'use strict';

var _createClass = require('babel-runtime/helpers/create-class').default;

var _classCallCheck = require('babel-runtime/helpers/class-call-check').default;

Object.defineProperty(exports, '__esModule', {
    value: true
});
/** @class QFind 
* @param manager */
let QFind = (function () {
    function QFind(manager) {
        _classCallCheck(this, QFind);

        this.manager = manager;
        this.VO = manager.VO;
        this.options = {};
    }

    _createClass(QFind, [{
        key: 'toModel',
        /** @memberof QFind 
        * @instance 
        * @method toModel 
        * @param result */value: function toModel(result) {
            this.manager.store.toModel(result);
        }
    }, {
        key: 'fields',
        /** @memberof QFind 
        * @instance 
        * @method fields 
        * @param value */value: function fields(value) {
            this.options.fields = value;
            return this;
        }
    }, {
        key: 'field',
        /** @memberof QFind 
        * @instance 
        * @method field 
        * @param value */value: function field(value) {
            this.options.fields = [value];
            return this;
        }
    }, {
        key: 'query',
        /** @memberof QFind 
        * @instance 
        * @method query 
        * @param value */value: function query(value) {
            this._query = value;
            return this;
        }
    }, {
        key: 'sort',
        /** @memberof QFind 
        * @instance 
        * @method sort 
        * @param value */value: function sort(value) {
            this.options.sort = value;
            return this;
        }
    }, {
        key: 'limit',
        /** @memberof QFind 
        * @instance 
        * @method limit 
        * @param value */value: function limit(value) {
            this.options.limit = value;
            return this;
        }
    }, {
        key: 'notimeout',
        /** @memberof QFind 
        * @instance 
        * @method notimeout */value: function notimeout() {
            this.options.timeout = false;
            return this;
        }
    }, {
        key: 'cursor',
        /** @memberof QFind 
        * @instance 
        * @method cursor */value: function cursor() {
            var _this = this;

            return this.manager.executeHooks(['beforeFind', 'beforeCursor'], this.options).then(function () {
                return _this.manager.store.cursor(_this._query, _this.options);
            });
        }
    }]);

    return QFind;
})();

exports.default = QFind;
module.exports = exports.default;
//# sourceMappingURL=QFind.js.map