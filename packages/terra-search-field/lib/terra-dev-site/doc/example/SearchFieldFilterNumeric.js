'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SearchFieldExampleTemplate = require('terra-search-field/lib/terra-dev-site/doc/example/SearchFieldExampleTemplate');

var _SearchFieldExampleTemplate2 = _interopRequireDefault(_SearchFieldExampleTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var SearchFieldFilterNumeric = function (_React$Component) {
  _inherits(SearchFieldFilterNumeric, _React$Component);

  function SearchFieldFilterNumeric(props) {
    _classCallCheck(this, SearchFieldFilterNumeric);

    var _this = _possibleConstructorReturn(this, (SearchFieldFilterNumeric.__proto__ || Object.getPrototypeOf(SearchFieldFilterNumeric)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    _this.state = { searchText: '' };
    return _this;
  }

  _createClass(SearchFieldFilterNumeric, [{
    key: 'onChange',
    value: function onChange(event, text) {
      var searchText = text;
      if (text && text.length > 0 && /\d/.test(text)) {
        searchText = text.substring(0, text.length - 1);
      }
      this.setState({ searchText: searchText });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SearchFieldExampleTemplate2.default, {
        onChange: this.onChange,
        value: this.state.searchText
      });
    }
  }]);

  return SearchFieldFilterNumeric;
}(_react2.default.Component);

exports.default = SearchFieldFilterNumeric;