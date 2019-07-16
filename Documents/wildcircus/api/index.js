const express = require('express');
const mysql = require('mysql')

const api = express();

api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "wildcircus",
  password: "Wildcodelearning000,"
});

connection.connect((err) => {
  if (err) throw err;
  console.log("I'm connected..");
});


api.get('/', (req, res) => {
  res.send('ok?good')
});

api.get('/show', (req, res) => {
  connection.query('SELECT * FROM shows', (err, result) => {
    if (err) throw err;
    res.send(result);
  })
});

api.get('/show/filter?', (req, res) => {
  if(req.query.price){
    if(req.query.price === "asc") {
      connection.query('SELECT * FROM shows ORDER BY price ASC', (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    } else if(req.query.price === "desc") {
      connection.query('SELECT * FROM shows ORDER BY price DESC', (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    } else {
      res.sendStatus(400);
    }
  } else {
    res.sendStatus(400);
  }
  // connection.query('SELECT * FROM shows', (err, result) => {
  //   if (err) throw err;
  //   res.send(result);
  // })
});

api.listen(8000,(err) => {
  if(err) throw err;
    console.log('Api ok..');
});