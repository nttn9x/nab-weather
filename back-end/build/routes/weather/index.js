"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var controller = _interopRequireWildcard(require("./weather.controller"));

var router = (0, _express.Router)();
router.get("/location/:weoid", controller.getLocation);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map