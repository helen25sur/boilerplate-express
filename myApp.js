let express = require('express');
const path = require('path');
const ENV = require('dotenv').config();
let app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
},
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);

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

app.get('/:word/echo', (req, res) => {
  const word = req.params.word;
  console.log(word)
  res.send({
    echo: word
  })
})

app.route('/name')
  .get((req, res) => {
    const firstname = req.query.first;
    const lastname = req.query.last;
    res.json(
      { name: `${firstname} ${lastname}` }
    )
  })
  .post((req, res) => {
    const firstname = req.body.first;
    const lastname = req.body.last;
    res.json(
      { name: `${firstname} ${lastname}` }
    )
  })

































module.exports = app;
