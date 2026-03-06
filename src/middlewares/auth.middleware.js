import jwt from "jsonwebtoken";
import "dotenv/config";

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(404)
      .json({ error: "Usuario sem autenticacao, token nao foi fornecido" });
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return res.status(401).json({ error: "Erro no formato do token" });
  }

  const token = parts[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);

    req.usuarioId = decoded.id;

    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
