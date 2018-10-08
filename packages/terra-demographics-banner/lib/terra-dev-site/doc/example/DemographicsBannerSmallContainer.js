'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraImage = require('terra-image');

var _terraImage2 = _interopRequireDefault(_terraImage);

var _DemographicsBanner = require('terra-demographics-banner/lib/DemographicsBanner');

var _DemographicsBanner2 = _interopRequireDefault(_DemographicsBanner);

var _demographicsCat = require('../assets/demographicsCat.jpg');

var _demographicsCat2 = _interopRequireDefault(_demographicsCat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
var DemographicsBannerSmallContainer = function DemographicsBannerSmallContainer() {
  return _react2.default.createElement(
    'div',
    { style: { maxWidth: '525px' } },
    _react2.default.createElement(_DemographicsBanner2.default, {
      age: '25 Years',
      dateOfBirth: 'May 9, 1992',
      deceasedDate: 'March 12, 2017',
      gender: 'True Male',
      identifiers: { MRN: 12343, REA: '3JSDA' },
      photo: _react2.default.createElement(_terraImage2.default, { alt: 'My Cat', src: _demographicsCat2.default }),
      personName: 'Johnathon Doe'
    })
  );
};

exports.default = DemographicsBannerSmallContainer;