// src/server.js

const express = require('express');
const app = express();
const port = 3000;

const {
  add,
  subtract,
  multiply,
  divide,
  modulus,
  power,
  sqrt
} = require('./calculator');

function parseNumbers(req, res, next) {
  req.a = parseFloat(req.query.a);
  req.b = req.query.b ? parseFloat(req.query.b) : null;
  if (isNaN(req.a) || (req.b !== null && isNaN(req.b))) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  next();
}

app.get('/add', parseNumbers, (req, res) => {
  res.json({ result: add(req.a, req.b) });
});

app.get('/subtract', parseNumbers, (req, res) => {
  res.json({ result: subtract(req.a, req.b) });
});

app.get('/multiply', parseNumbers, (req, res) => {
  res.json({ result: multiply(req.a, req.b) });
});

app.get('/divide', parseNumbers, (req, res) => {
  try {
    res.json({ result: divide(req.a, req.b) });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/modulus', parseNumbers, (req, res) => {
  res.json({ result: modulus(req.a, req.b) });
});

app.get('/power', parseNumbers, (req, res) => {
  res.json({ result: power(req.a, req.b) });
});

app.get('/sqrt', (req, res) => {
  const a = parseFloat(req.query.a);
  if (isNaN(a)) return res.status(400).json({ error: 'Invalid input' });

  try {
    res.json({ result: sqrt(a) });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Calculator API running at http://localhost:${port}`);
});

//hello changes