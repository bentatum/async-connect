'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (depsMapper) {
  return function (Component) {
    var AsyncConnect = function (_React$PureComponent) {
      _inherits(AsyncConnect, _React$PureComponent);

      function AsyncConnect() {
        _classCallCheck(this, AsyncConnect);

        return _possibleConstructorReturn(this, (AsyncConnect.__proto__ || Object.getPrototypeOf(AsyncConnect)).apply(this, arguments));
      }

      _createClass(AsyncConnect, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.getDeps(this.props);
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(next) {
          this.getDeps(next);
        }
      }, {
        key: 'getDeps',
        value: function getDeps(props) {
          var _props$store$getState = props.store.getState(),
              statuses = _props$store$getState.async.statuses;

          var deps = typeof depsMapper === 'function' ? depsMapper(props) : depsMapper;

          deps.forEach(function (_ref) {
            var key = _ref.key,
                promise = _ref.promise,
                payload = _ref.payload;

            if (!statuses[key]) {
              props.store.dispatch(promise(payload));
            }
          });
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(Component, this.props);
        }
      }]);

      return AsyncConnect;
    }(_react2.default.PureComponent);

    AsyncConnect.contextTypes = {
      store: _propTypes2.default.object.isRequired
    };

    return AsyncConnect;
  };
};