'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalBody = function (_React$Component) {
  _inherits(ModalBody, _React$Component);

  function ModalBody() {
    _classCallCheck(this, ModalBody);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  ModalBody.getDefaultPrefix = function getDefaultPrefix() {
    return 'modal';
  };

  ModalBody.prototype.render = function render() {
    var prefix = this.props.modalPrefix || ModalBody.getDefaultPrefix();

    return _react2.default.createElement(
      'div',
      _extends({}, this.props, { className: (0, _classnames2.default)(this.props.className, prefix + '-body') }),
      this.props.children
    );
  };

  return ModalBody;
}(_react2.default.Component);

ModalBody.propTypes = {
  /**
   * A css class applied to the Component
   */
  modalPrefix: _react2.default.PropTypes.string
};

module.exports = ModalBody;