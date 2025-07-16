const express = require('express');
const { createServer } = require('http');

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 5000;
server.listen(port, '0.0.0.0', () => {
  console.log(`Test server running on port ${port}`);
});