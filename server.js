'use strict';

const express = require('express');

// Constants
const PORT = 2000;


// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT);
console.log(`Running on ${PORT}`);