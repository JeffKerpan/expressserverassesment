'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');

// LOCATED in npm docs
// https://npmjs.com/package/body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/pets', function(req, res, next) {
  // send ALL pets
  res.send('Here are ALL the pets');
});

app.get('/pets:id', function (req, res, next) {
  // USE req.params.id to get the ide that the user went to
  // ex: localhost:8000/pets/4
  res.send(req.params.id);
});

app.post('/pets', function (req, res, next) {
  // USE req.body {}
  // body-parser working here to not post an empty object
  res.send(req.body); // ??? not sure if this is correct
});

app.patch('/pets/:id', function(req, res, next) {
  // USE req.params.id to find what pet they are talking about
  res.send(req.params.id); // NOT sure if res.send correct??
});

app.patch('/pets/:id', function(req, res, next) {
  // USE req.params.id
  res.send(req.params.id); // NOT sure if correct???
});

app.delete('/pets/:id', function(req, res, next) {
  // USE req.params.id
});

app.use(function(req, res, next) {
  // SEND 404 status code if NOT found
  //
});

app.use(function(err, req, res, next) {
  // SEND 500 status code for server error
});

module.exports = app;
