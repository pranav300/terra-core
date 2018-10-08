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

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _IconSearch = require('terra-icon/lib/icon/IconSearch');

var _IconSearch2 = _interopRequireDefault(_IconSearch);

var _terraFormInput = require('terra-form-input');

var _terraFormInput2 = _interopRequireDefault(_terraFormInput);

var _SearchFieldModule = require('./SearchField.module.scss');

var _SearchFieldModule2 = _interopRequireDefault(_SearchFieldModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_SearchFieldModule2.default);

var Icon = _react2.default.createElement(_IconSearch2.default, null);

var KEYCODES = {
  ENTER: 13
};

var propTypes = {
  /**
   * The defaultValue of the search field. Use this to create an uncontrolled search field.
   */
  defaultValue: _propTypes2.default.string,

  /**
   * When true, will disable the auto-search.
   */
  disableAutoSearch: _propTypes2.default.bool,

  /**
   * Whether or not the field should display as a block.
   */
  isBlock: _propTypes2.default.bool,

  /**
   * When true, will disable the field.
   */
  isDisabled: _propTypes2.default.bool,

  /**
   * The minimum number of characters to perform a search.
   */
  minimumSearchTextLength: _propTypes2.default.number,

  /**
   * Placeholder text to show while the search field is empty.
   */
  placeholder: _propTypes2.default.string,

  /**
   * Function to trigger when user changes the input value. Provide a function to create a controlled input.
   */
  onChange: _propTypes2.default.func,

  /**
   * A callback to indicate an invalid search. Sends parameter {String} searchText.
   */
  onInvalidSearch: _propTypes2.default.func,

  /**
   * A callback to perform search. Sends parameter {String} searchText.
   */
  onSearch: _propTypes2.default.func,

  /**
   * How long the component should wait (in milliseconds) after input before performing an automatic search.
   */
  searchDelay: _propTypes2.default.number,

  /**
   * The value of search field.  Use this to create a controlled search field.
   */
  value: _propTypes2.default.string,

  /**
   * Callback ref to pass into the inner input component.
   */
  inputRefCallback: _propTypes2.default.func,

  /**
   * Custom input attributes to apply to the input field such as aria-label.
   */
  // eslint-disable-next-line react/forbid-prop-types
  inputAttributes: _propTypes2.default.object
};

var defaultProps = {
  defaultValue: undefined,
  disableAutoSearch: false,
  isBlock: false,
  isDisabled: false,
  minimumSearchTextLength: 2,
  placeholder: '',
  searchDelay: 250,
  value: undefined,
  inputAttributes: undefined
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  }
};

var SearchField = function (_React$Component) {
  _inherits(SearchField, _React$Component);

  function SearchField(props) {
    _classCallCheck(this, SearchField);

    var _this = _possibleConstructorReturn(this, (SearchField.__proto__ || Object.getPrototypeOf(SearchField)).call(this, props));

    _this.handleTextChange = _this.handleTextChange.bind(_this);
    _this.handleSearch = _this.handleSearch.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.updateSearchText = _this.updateSearchText.bind(_this);

    _this.searchTimeout = null;
    _this.state = { searchText: _this.props.defaultValue };
    return _this;
  }

  _createClass(SearchField, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // if consumer updates the value prop with onChange, need to update state to match
      this.updateSearchText(this.props.value);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearSearchTimeout();
    }
  }, {
    key: 'handleTextChange',
    value: function handleTextChange(event) {
      var textValue = event.target.value;
      this.updateSearchText(textValue);

      if (this.props.onChange) {
        this.props.onChange(event, textValue);
      }

      if (!this.searchTimeout && !this.props.disableAutoSearch) {
        this.searchTimeout = setTimeout(this.handleSearch, this.props.searchDelay);
      }
    }
  }, {
    key: 'updateSearchText',
    value: function updateSearchText(searchText) {
      if (searchText !== undefined && searchText !== this.state.searchText) {
        this.setState({ searchText: searchText });
      }
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      if (event.nativeEvent.keyCode === KEYCODES.ENTER) {
        this.handleSearch();
      }
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch() {
      this.clearSearchTimeout();

      var searchText = this.state.searchText || '';

      if (searchText.length >= this.props.minimumSearchTextLength && this.props.onSearch) {
        this.props.onSearch(searchText);
      } else if (this.props.onInvalidSearch) {
        this.props.onInvalidSearch(searchText);
      }
    }
  }, {
    key: 'clearSearchTimeout',
    value: function clearSearchTimeout() {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          disableAutoSearch = _props.disableAutoSearch,
          isBlock = _props.isBlock,
          isDisabled = _props.isDisabled,
          minimumSearchTextLength = _props.minimumSearchTextLength,
          placeholder = _props.placeholder,
          searchDelay = _props.searchDelay,
          onChange = _props.onChange,
          onInvalidSearch = _props.onInvalidSearch,
          onSearch = _props.onSearch,
          value = _props.value,
          inputRefCallback = _props.inputRefCallback,
          inputAttributes = _props.inputAttributes,
          customProps = _objectWithoutProperties(_props, ['defaultValue', 'disableAutoSearch', 'isBlock', 'isDisabled', 'minimumSearchTextLength', 'placeholder', 'searchDelay', 'onChange', 'onInvalidSearch', 'onSearch', 'value', 'inputRefCallback', 'inputAttributes']);

      var searchFieldClassNames = cx(['searchfield', { block: isBlock }, customProps.className]);

      var valueTemp = {};
      if (value !== undefined) {
        valueTemp.value = value;
      } else {
        valueTemp.defaultValue = defaultValue;
      }

      var inputText = this.context.intl.formatMessage({ id: 'Terra.searchField.search' });
      var buttonText = this.context.intl.formatMessage({ id: 'Terra.searchField.submit-search' });
      var additionalInputAttributes = _extends({ 'aria-label': inputText }, inputAttributes, valueTemp);

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: searchFieldClassNames }),
        _react2.default.createElement(_terraFormInput2.default, _extends({
          className: cx('input'),
          type: 'search',
          placeholder: placeholder,
          onChange: this.handleTextChange,
          disabled: isDisabled,
          'aria-disabled': isDisabled,
          onKeyDown: this.handleKeyDown,
          refCallback: inputRefCallback
        }, additionalInputAttributes)),
        _react2.default.createElement(_terraButton2.default, {
          className: cx('button'),
          text: buttonText,
          onClick: this.handleSearch,
          isDisabled: isDisabled,
          icon: Icon,
          isIconOnly: true,
          isCompact: true
        })
      );
    }
  }]);

  return SearchField;
}(_react2.default.Component);

SearchField.propTypes = propTypes;
SearchField.defaultProps = defaultProps;
SearchField.contextTypes = contextTypes;

exports.default = SearchField;