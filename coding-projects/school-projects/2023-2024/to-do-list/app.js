const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');
const path = require('path'); // Add this line

const app = express();
const port = 3000;

app.use(bodyParser.json());

// SQLite database setup
const db = new sqlite3.Database(':memory:'); // Use in-memory database for simplicity

// Create tasks table
db.run('CREATE TABLE tasks (id INTEGER PRIMARY KEY, description TEXT, completed BOOLEAN, completion_date TEXT)');

// Get all tasks
app.get('/tasks', (req, res) => {
  db.all('SELECT * FROM tasks', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Add a new task
app.post('/tasks', (req, res) => {
  const { description, completion_date } = req.body;
  const completed = false;

  db.run('INSERT INTO tasks (description, completed, completion_date) VALUES (?, ?, ?)', [description, completed, completion_date], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

// Update a task
app.put('/tasks/:id', (req, res) => {
  const { description, completed, completion_date } = req.body;
  const taskId = req.params.id;

  db.run('UPDATE tasks SET description=?, completed=?, completion_date=? WHERE id=?', [description, completed, completion_date, taskId], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ rows_updated: this.changes });
  });
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;

  db.run('DELETE FROM tasks WHERE id=?', taskId, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ rows_deleted: this.changes });
  });
});

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
