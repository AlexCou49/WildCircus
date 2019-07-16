const express = require('express');
const mysql = require('mysql')

const api = express();
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Wildcodelearning000,"
});

connection.connect((err) => {
  if (err) throw err;
  console.log("I'm connected..");
});


api.get('/', (req, res) => {
  res.send('ok?good')
})

api.listen(8000,(err) => {
  if(err) throw err;
    console.log('Api ok..');
})