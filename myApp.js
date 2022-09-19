let express = require('express');
const path = require('path');
const ENV = require('dotenv').config();
let app = express();

app.get('/', (req, res) => {
  let absolutePath = path.join(__dirname, 'views/index.html');
  res.sendFile(absolutePath);
});

let publicPath = path.join(__dirname, 'public');
app.use('/public', express.static(publicPath));

app.get('/json', (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({ "message": `${message}` });
});

































module.exports = app;
