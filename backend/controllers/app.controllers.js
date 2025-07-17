const pool = require("../config/db");

module.exports.getAllTodos = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM Todo ORDER BY id");
    res.status(200).json({ message: "All Todo found", content: result.rows });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error " + err.message });
  }
};

module.exports.createTodo = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400).json({ message: "Bad requiest" });
  }

  res.status(200).json({ content: { title, content } });

  // try {
  //   const result = await pool.query(
  //     `INSERT INTO Todo(title, content) VALUES($1, $2) RETURNING *`,
  //     [title, content]
  //   );
  //   res
  //     .status(200)
  //     .json({ message: "Todo is created", content: result.rows[0] });
  // } catch (err) {
  //   res.status(500).json({ message: "Internal Server Error " + err.message });
  // }
};

module.exports.getTodoById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM Todo  WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Ressource not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error " + err.message });
  }
};

module.exports.editTodo = async (req, res) => {
  const { id } = req.params;

  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  const lastid = keys.length + 1;
  values.push(id);

  let request_body = "";

  for (let i = 0; i < keys.length; i++) {
    request_body += `${keys[i].toUpperCase()}=$${i + 1},`;
  }

  if (request_body.endsWith(",")) {
    request_body = request_body.slice(0, -1);
  }

  try {
    const CHECK = await pool.query("SELECT * FROM Todo WHERE ID=$1", [id]);
    if (CHECK.rows[0].length !== 0) {
      const RESULT = await pool.query(
        `UPDATE Todo SET ${request_body} WHERE ID=$${lastid} RETURNING *`,
        values
      );
      return res
        .status(200)
        .json({ message: "Request success", content: RESULT.rows });
    } else {
      return res.status(400).json({ message: "Not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query(
      "DELETE FROM Todo WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Ressource not found" });
    }
    res.json({ message: "Todo is deleted" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error " + err.message });
  }
};
