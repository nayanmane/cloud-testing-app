
var express = require("express");
require('dotenv').config()
const path = require('path');
var app = express();
const Router = require("./Routes/IndexRouter");
app.use(express.static(path.join(__dirname)));
app.use("/api", Router);

var port = process.env.APP_PORT || 8090;
app.listen(port);
console.log("Order API is runnning at " + port);
