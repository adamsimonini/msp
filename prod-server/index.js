"use strict";

var _interopRequireDefault = require("C:\\code\\msp\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes");

var app = (0, _express.default)();
var port = 3000;
(0, _routes.registerRoutes)(app);
app.get('/', function (req, res) {
  return res.send('Allahu Akbar');
});
app.listen(port, function () {
  return console.log("MSP app listening on THE port ".concat(port, "!"));
});