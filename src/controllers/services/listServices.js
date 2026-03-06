import connect from "../../config/connection.js";

export const listServices = async (req, res) => {
  try {
    const result = await connect.query("select * from servicos");

    res.json(result.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
