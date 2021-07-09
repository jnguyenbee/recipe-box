const express = require("express");
//const request = require("request");
var https = require('https');

const app = express();
//app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000");
})