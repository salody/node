const express = require('express');
const bodyParser = require('body-parser');

const store = require('./store');

const app = express();
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/creatUser', (req, res) => {
  store
    .createUser({
      username: req.body.username,
      password: req.body.password
    })
    .then(() => res.sendStatus(200))
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})