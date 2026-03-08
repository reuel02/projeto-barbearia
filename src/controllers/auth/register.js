import bcrypt from "bcrypt";
import connect from "../../config/connection.js";

export const register = async (req, res) => {
  const { name, type, email, password } = req.body;

  if (!name || !type || !email || !password) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  try {
    const emailFound = await connect.query(
      "select * from  usuarios where email = $1",
      [email],
    );

    if (emailFound.rows.length > 0) {
      res
        .status(400)
        .json({ error: "Ja existe cadastro com o email informado" });
    }

    const hash = await bcrypt.hash(password, 10);

    const result = await connect.query(
      "insert into usuarios (nome, tipo, email, senha_hash) values ($1, $2, $3, $4)",
      [name, type, email, hash],
    );

    return res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
