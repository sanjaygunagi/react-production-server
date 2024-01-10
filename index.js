const express = require('express');
const path = require('path');

const port = 9999;

const app = express();


app.use(express.static(path.join(__dirname, '/build')));

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});