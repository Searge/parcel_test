'use strict';

const Joi = require('joi');
const nanoid = require('nanoid');
const express = require('express');

const passwordSchema = Joi.string().min(3).max(10).alphanum();
const app = express();

app.use('*', (req, res) => {
  console.log('Browser requests');
  res.send('<h1>Hello world</h1>')
});
const listener = app.listen(4444, () => {
  console.log(`Web server started at ${listener.address().port}`);
});

console.log(passwordSchema.validate('Hello5'));
console.log(nanoid.random('12').join('.'));
