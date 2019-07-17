"use strict";

var _interopRequireDefault = require("C:\\code\\msp\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes");

var _env = require("./config/env");

var _db = require("./config/db");

var app = (0, _express.default)();
(0, _env.setEnvironment)(app);
(0, _db.connectToDB)();
(0, _routes.registerRoutes)(app);
app.get('/', function (req, res) {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('**** Running server in development mode ****');
  } else {
    return res.sendFile('index.html', {
      root: __dirname + '/../dist/'
    });
  }
});
app.listen(3000, function () {
  console.log('**** MSP app listening on port 3000 in ' + process.env.NODE_ENV + ' mode! ****');
});