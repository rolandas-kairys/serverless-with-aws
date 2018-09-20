const express = require('express');
const http = require('serverless-http');


const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'all good'
  });
});

app.get('/todos', (req, res) => {
  const todos = [
    { id: 1, name: 'clean up', status: 'open' },
    { id: 2, name: 'cook', status: 'done' }
  ];
  res.json({ data: todos });
});

app.get('/todos/:todo', (req, res) => {
  res.json({ id: 1, name: 'clean up', status: 'open' });
});

module.exports.handler = http(app);