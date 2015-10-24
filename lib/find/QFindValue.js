'use strict';

var _get = require('babel-runtime/helpers/get').default;

var _inherits = require('babel-runtime/helpers/inherits').default;

var _createClass = require('babel-runtime/helpers/create-class').default;

var _classCallCheck = require('babel-runtime/helpers/class-call-check').default;

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _QFind2 = require('./QFind');

var _QFind3 = _interopRequireDefault(_QFind2);

/** @class QFindValue */
let QFindValue = (function (_QFind) {
    _inherits(QFindValue, _QFind);

    function QFindValue() {
        _classCallCheck(this, QFindValue);

        _get(Object.getPrototypeOf(QFindValue.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(QFindValue, [{
        key: 'fetch',
        /** @memberof QFindValue 
        * @instance 
        * @method fetch 
        * @param callback */value: function fetch(callback) {
            var _this = this;

            return this.fetch().then(function (result) {
                if (result) {
                    return result[_this.options.fields[0]];
                }

                return callback ? callback(result) : result;
            });
        }
    }]);

    return QFindValue;
})(_QFind3.default);

exports.default = QFindValue;
module.exports = exports.default;
//# sourceMappingURL=QFindValue.js.map