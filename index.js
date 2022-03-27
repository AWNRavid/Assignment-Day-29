require('dotenv').config();
const express = require('express');
const { JSON } = require('mysql/lib/protocol/constants/types');
const app = express();
const port = process.env.PORT || 3005;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const pets = require('./routes/pets')

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use('/pets', pets);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
