import connect from "../../config/connection.js";

export const barbersList = async (req, res) => {
  try {
    const result = await connect.query(
      "select * from usuarios where tipo = $1",
      ["Barbeiro"],
    );
    return res.json(result.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
