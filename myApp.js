let express = require('express');
const path = require('path');
let app = express();

app.get('/', (req, res) => {
  let absolutePath = path.join(__dirname, 'views/index.html');
  res.sendFile(absolutePath);
});

let publicPath = path.join(__dirname, 'public');
app.use('/public', express.static(publicPath));

app.get('/json', (req, res) => {
  res.json({ "message": "Hello json" });
});

































module.exports = app;
