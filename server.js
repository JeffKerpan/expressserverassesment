'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const bodyParser = require('body-parser');

// LOCATED in npm docs
// https://nmpjs.com/package/body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/pets', function (req, res, next) {
  // send ALL pets
  // res.send(SOMETHING)
});

app.get('/pets/:id', function (req, res, next) {
  // USE req.params.id to get the id that the user went to
  // ex localhost:8000/pets/4
});

app.post('/pets', function (req, res, next) {
  // USE req.body {}
  // body-parser working here to not post an empty object
});

app.patch('/pets/:id', function (req, res, next) {
  // USE req.params.id to find what pet they are talking about
  // req.body
});

app.patch('/pets/:id', function (req, res, next) {
  // USE req.params.id
});

app.delete('/pets/:id', function (req, res, next) {
  // USE req.params.id
});

app.use(function (req, res, next) {
  // SEND a 404 status for not found
  //
});

app.use(function (err, req, res, next) {
  // SEND a 500 status since for errors
});

app.listen(port, function () {
  console.log('Listening on port', port);
});

module.exports = app;
