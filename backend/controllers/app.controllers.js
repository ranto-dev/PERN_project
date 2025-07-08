const pool = require("../config/db");

module.exports.getAllTodos = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM Todo ORDER BY id");
    res.status(200).json({ message: "All Todo found", content: result.rows });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error " + err.message });
  }
};

module.exports.createTodo = async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  if (!title || !content) {
    res.status(400).json({ message: "Bad requiest" });
  }

  try {
    const result = await pool.query(
      `INSERT INTO Todo(title, content) VALUES($1, $2) RETURNING *`,
      [title, content]
    );
    res
      .status(200)
      .json({ message: "Todo is created", content: result.rows[0] });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error " + err.message });
  }
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
  const title = req.body.title;
  const content = req.body.content;
  const id = req.params.id;

  if (!title || !content || !id) {
    res.status(400).json({ message: "Bad requiest" });
  }

  try {
    const result = await pool.query(
      `UPDATE Todo SET title=$1, content=$2 WHERE id=$3 RETURNING *`,
      [title, content, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo is updated", content: result.rows[0] });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error " + err.message });
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
