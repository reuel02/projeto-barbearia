import connect from "../../config/connection.js";

export const insertSchedules = async (req, res) => {
  const { id } = req.params;
  const { weekDay, openHour, closeHour } = req.body;

  try {
    if (!weekDay || !openHour || !closeHour) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios." });
    }

    const barberFound = await connect.query(
      "select * from usuarios where id = $1",
      [id],
    );

    if (barberFound.rowCount <= 0) {
      return res
        .status(404)
        .json({ message: "Barbeiro não encontrado no sistema." });
    }

    const insert = await connect.query(
      `insert into horarios_trabalho (barbeiro_id, dia_semana, hora_abertura, hora_fechamento)
        values ($1, $2, $3, $4)`,
      [id, weekDay, openHour, closeHour],
    );

    return res.status(201).json({ message: "Horario de trabalho cadastrado." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
