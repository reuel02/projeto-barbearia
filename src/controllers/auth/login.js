import bcrypt from "bcrypt";
import connect from "../../config/connection.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const emailFound = await connect.query(
      "select * from  usuarios where email = $1",
      [email],
    );

    if (emailFound.rows.length == 0) {
      return res.status(404).json({ error: "Email incorreto" });
    }

    const passwordCompare = await bcrypt.compare(
      password,
      emailFound.rows[0].senha_hash,
    );

    if (!passwordCompare) {
      return res.status(400).json({ error: "Senha incorreta" });
    }

    const user = {
      email,
      password,
    };

    const token = jwt.sign(user, process.env.JWT_SECRETKEY);

    return res
      .status(201)
      .json({ message: "Usuario logado com sucesso", token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
