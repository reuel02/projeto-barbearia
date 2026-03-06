import connect from "../../config/connection.js";

export const clientList = async (req, res) => {
  try {
    const result = await connect.query(
      "select * from usuarios where tipo = $1",
      ["Cliente"],
    );
    return res.json(result.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
