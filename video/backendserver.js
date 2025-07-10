const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Route
app.post('/bookings', (req, res) => {
  const { name, vehicle, time } = req.body;
  const sql = 'INSERT INTO bookings (name, vehicle, time) VALUES (?, ?, ?)';
  db.query(sql, [name, vehicle, time], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.json({ message: 'Booking successful!' });
  });
});


