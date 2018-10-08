'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _prismLight = require('react-syntax-highlighter/prism-light');

var _prismLight2 = _interopRequireDefault(_prismLight);

var _prism = require('react-syntax-highlighter/styles/prism');

var _jsx = require('react-syntax-highlighter/languages/prism/jsx');

var _jsx2 = _interopRequireDefault(_jsx);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _ExampleTemplateModule = require('./ExampleTemplate.module.scss');

var _ExampleTemplateModule2 = _interopRequireDefault(_ExampleTemplateModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _prismLight.registerLanguage)('jsx', _jsx2.default);

var cx = _bind2.default.bind(_ExampleTemplateModule2.default);

var propTypes = {
  /**
   * The example component.
   */
  example: _propTypes2.default.element,
  /**
   * The example source code.
   */
  exampleSrc: _propTypes2.default.string,
  /**
   * The example title.
   */
  title: _propTypes2.default.string,
  /**
   * The example description.
   */
  description: _propTypes2.default.node,
  /**
   * Additional content.
   */
  children: _propTypes2.default.element
};

var defaultProps = {
  example: undefined,
  exampleSrc: undefined,
  title: undefined,
  description: undefined,
  children: undefined
};

var ExampleTemplate = function (_React$Component) {
  _inherits(ExampleTemplate, _React$Component);

  function ExampleTemplate(props) {
    _classCallCheck(this, ExampleTemplate);

    var _this = _possibleConstructorReturn(this, (ExampleTemplate.__proto__ || Object.getPrototypeOf(ExampleTemplate)).call(this, props));

    _this.state = { isExpanded: false };
    _this.handleCodeToggle = _this.handleCodeToggle.bind(_this);
    return _this;
  }

  _createClass(ExampleTemplate, [{
    key: 'handleCodeToggle',
    value: function handleCodeToggle() {
      this.setState(function (prevState) {
        return { isExpanded: !prevState.isExpanded };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          example = _props.example,
          exampleSrc = _props.exampleSrc,
          children = _props.children,
          description = _props.description,
          customProps = _objectWithoutProperties(_props, ['title', 'example', 'exampleSrc', 'children', 'description']);

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: cx('template', customProps.className) }),
        title && _react2.default.createElement(
          'div',
          { className: cx('header') },
          _react2.default.createElement(
            'h2',
            { className: cx('title') },
            title
          )
        ),
        _react2.default.createElement(
          'div',
          { className: cx('content') },
          description && _react2.default.createElement(
            'div',
            { className: cx('description') },
            description
          ),
          example,
          children
        ),
        exampleSrc && _react2.default.createElement(
          'div',
          { className: cx('footer') },
          _react2.default.createElement(
            'button',
            { type: 'button', className: cx('toggle'), onClick: this.handleCodeToggle },
            _react2.default.createElement('span', { className: cx('chevron-left') }),
            _react2.default.createElement(
              'span',
              null,
              'Code'
            ),
            _react2.default.createElement('span', { className: cx('chevron-right') })
          ),
          _react2.default.createElement(
            'div',
            { className: cx('code', { 'is-expanded': this.state.isExpanded }) },
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'javascript', style: _prism.okaidia, customStyle: { margin: '0', borderRadius: '0' } },
              exampleSrc
            )
          )
        )
      );
    }
  }]);

  return ExampleTemplate;
}(_react2.default.Component);

ExampleTemplate.propTypes = propTypes;
ExampleTemplate.defaultProps = defaultProps;

exports.default = ExampleTemplate;