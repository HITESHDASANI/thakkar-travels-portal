var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://hitesh11940:<db_password>@cluster0.bh5rkj3.mongodb.net/")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err))

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const flightsRouter = require("./routes/flights")
const bookingsRouter = require("./routes/bookings")

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// ✅ YOUR APIs
app.use("/api/flights", flightsRouter)
app.use("/api/bookings", bookingsRouter)

module.exports = app;