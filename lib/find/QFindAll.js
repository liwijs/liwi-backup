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

/** @class QFindAll */
let QFindAll = (function (_QFind) {
    _inherits(QFindAll, _QFind);

    function QFindAll() {
        _classCallCheck(this, QFindAll);

        _get(Object.getPrototypeOf(QFindAll.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(QFindAll, [{
        key: 'exec',
        /** @memberof QFindAll 
        * @instance 
        * @method exec */value: function exec() {
            return this.cursor();
        }
    }, {
        key: 'forEach',
        /** @memberof QFindAll 
        * @instance 
        * @method forEach 
        * @param callback */value: function forEach(callback) {
            return this.cursor().then(function (cursor) {
                return cursor.forEach(callback);
            });
        }
    }, {
        key: 'fetch',
        /** @memberof QFindAll 
        * @instance 
        * @method fetch */value: function fetch() {
            return this.cursor().then(function (cursor) {
                return cursor.toArray();
            });
        }
    }]);

    return QFindAll;
})(_QFind3.default);

exports.default = QFindAll;
module.exports = exports.default;
//# sourceMappingURL=QFindAll.js.map