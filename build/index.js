"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_reactDom["default"].render(
  /*#__PURE__*/ _react["default"].createElement(
    "h1",
    {
      title: "foo",
    },
    /*#__PURE__*/ _react["default"].createElement("p", null, "hello world"),
    /*#__PURE__*/ _react["default"].createElement(
      "span",
      null,
      "hello world",
      /*#__PURE__*/ _react["default"].createElement("p", null, "hello world")
    )
  ),
  document.getElementById("root")
);
