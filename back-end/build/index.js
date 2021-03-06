"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = require("dotenv");

var _routes = _interopRequireDefault(require("./routes"));

(0, _dotenv.config)();
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use((0, _cors["default"])());
app.all("*", function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,OPTIONS,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With, Accept");
  next();
});
app.use(_express["default"]["static"]("public"));
app.use("/api", _routes["default"]);
app.use(function (err, req, res, next) {
  if (err.status) {
    res.status(err.status).send({
      error: err === null || err === void 0 ? void 0 : err.message
    });
  } else {
    res.status(400).send(err);
  }
});
app.listen(process.env.SERVER_PORT, function () {
  return console.log("VDC app listening on port ".concat(process.env.SERVER_PORT, "!"));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map