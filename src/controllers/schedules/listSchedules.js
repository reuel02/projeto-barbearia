import connect from "../../config/connection.js";

export const listSchedules = async (req, res) => {
    try {
        const select = await connect.query("select * from horarios_trabalho");

        res.json(select.rows);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
} 