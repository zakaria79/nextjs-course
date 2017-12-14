'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = function user(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-3187760039'
  }, _react2.default.createElement('h1', {
    className: 'jsx-3187760039'
  }, 'Name: ', props.name), _react2.default.createElement('p', {
    className: 'jsx-3187760039'
  }, 'Age: ', props.age), _react2.default.createElement(_style2.default, {
    styleId: '3187760039',
    css: ['div.jsx-3187760039{border:1px solid #eee;box-shadow:0 2px 3px #ccc;padding:20px;text-align:center;width:60%;margin:2rem auto;}']
  }));
};

exports.default = user;