var mongoose = require("mongoose");
var express = require("express");

const API_PORT = 3001;
const app = express();
mongoose.promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/dbmode", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var db = mongoose.connection;


module.exports = db;

