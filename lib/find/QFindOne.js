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

/** @class QFindOne */
let QFindOne = (function (_QFind) {
    _inherits(QFindOne, _QFind);

    function QFindOne() {
        _classCallCheck(this, QFindOne);

        _get(Object.getPrototypeOf(QFindOne.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(QFindOne, [{
        key: 'fetch',
        /** @memberof QFindOne 
        * @instance 
        * @method fetch 
        * @param callback */value: function fetch(callback) {
            var _this = this;

            return this.manager.executeHooks(['beforeFind', 'beforeFindOne'], this.options).then(function () {
                return _this.manager.store.findOne(_this._query, _this.options);
            }).then(function (result) {
                result = result ? _this.manager.toVO(result) : result;
                return callback ? callback(result) : result;
            });
        }
    }, {
        key: 'byId',
        /** @memberof QFindOne 
        * @instance 
        * @method byId 
        * @param id */value: function byId(id) {
            this._query = { _id: this.manager.store.toId(id) };
            return this;
        }
    }, {
        key: 'notNull',
        /** @memberof QFindOne 
        * @instance 
        * @method notNull */value: function notNull() {
            return this.fetch().then(function (result) {
                if (result === null) {
                    let error = new Error('Failed to find the object');
                    error.status = 404;
                    throw error;
                }

                return result;
            });
        }
    }]);

    return QFindOne;
})(_QFind3.default);

exports.default = QFindOne;
module.exports = exports.default;
//# sourceMappingURL=QFindOne.js.map