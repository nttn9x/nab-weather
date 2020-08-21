"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var getLocation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var weoid, cityName, url, _cityName, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            weoid = req.params.weoid;
            cityName = req.query.cityName;
            url = "".concat(process.env.WEATHER_API, "/location/").concat(weoid);

            if (!("cityName" in req.query)) {
              _context.next = 10;
              break;
            }

            _cityName = req.query.cityName;

            if (!(!_cityName || _cityName.length < 1)) {
              _context.next = 9;
              break;
            }

            res.send([]);
            return _context.abrupt("return");

          case 9:
            url = "".concat(url, "?query=").concat(_cityName);

          case 10:
            _context.next = 12;
            return (0, _nodeFetch["default"])(url).then(function (res) {
              return res.json();
            });

          case 12:
            data = _context.sent;
            res.send(data);
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function getLocation(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getLocation = getLocation;
//# sourceMappingURL=weather.controller.js.map