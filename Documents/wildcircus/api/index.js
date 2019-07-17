const express = require('express');
const mysql = require('mysql')
const nodemailer = require('nodemailer');
const http = require ('http');

const api = express();


//log connection database
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

//test
api.get('/', (req, res) => {
  res.send('ok?good')
});

//call api database show
api.get('/show', (req, res) => {
  connection.query('SELECT * FROM shows', (err, result) => {
    if (err) throw err;
    res.send(result);
  })
});


api.post('/message', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO message SET ?', formData, (err, results) => {
   if (err) {
     console.log(err);
     res.status(500).send("Erreur lors de la sauvegarde d'un film");
   } else {
     res.sendStatus(200);
   }
 });
 });

//filter price show 
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