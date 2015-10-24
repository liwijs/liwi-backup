"use strict";

var _createClass = require("babel-runtime/helpers/create-class").default;

var _classCallCheck = require("babel-runtime/helpers/class-call-check").default;

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** @class AbstractCursor */
let AbstractCursor = (function () {
    function AbstractCursor() {
        _classCallCheck(this, AbstractCursor);
    }

    _createClass(AbstractCursor, [{
        key: "result",
        /** @memberof AbstractCursor 
        * @instance 
        * @method result */value: function result() {
            return this._store.findByKey(this.key, {});
        }
    }, {
        key: "vo",
        /** @memberof AbstractCursor 
        * @instance 
        * @method vo */value: function vo() {
            return this.result().then(this._store.toVO.bind(this._store));
        }
    }, {
        key: "remove",
        /** @memberof AbstractCursor 
        * @instance 
        * @method remove */value: function remove() {
            return this._store.deleteByKey(this.primaryKey);
        }
    }, {
        key: "forEach",
        /** @memberof AbstractCursor 
        * @instance 
        * @method forEach 
        * @param callback */value: function forEach(callback) {
            var _this = this;

            return this.forEachKeys(function (key) {
                return _this.vo().then(callback);
            });
        }
    }]);

    return AbstractCursor;
})();

exports.default = AbstractCursor;
module.exports = exports.default;
//# sourceMappingURL=AbstractCursor.js.map