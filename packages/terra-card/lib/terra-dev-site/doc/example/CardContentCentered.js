'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('terra-card/lib/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardContentCentered = function CardContentCentered() {
  return _react2.default.createElement(
    _Card2.default,
    null,
    _react2.default.createElement(
      _Card2.default.Body,
      { isContentCentered: true },
      'Content is centered'
    )
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = CardContentCentered;