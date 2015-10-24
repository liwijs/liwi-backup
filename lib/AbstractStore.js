'use strict';

var _createClass = require('babel-runtime/helpers/create-class').default;

var _classCallCheck = require('babel-runtime/helpers/class-call-check').default;

var _Object$assign = require('babel-runtime/core-js/object/assign').default;

Object.defineProperty(exports, '__esModule', {
    value: true
});
/** @class AbstractStore 
* @param db 
* @param manager */
let AbstractStore = (function () {
    function AbstractStore(db, manager) {
        _classCallCheck(this, AbstractStore);

        this.db = db;
        this.manager = manager;
    }

    _createClass(AbstractStore, [{
        key: 'toVO',
        /** @memberof AbstractStore 
        * @instance 
        * @method toVO 
        * @param result */value: function toVO(result) {
            return this.manager.toVO(result);
        }
    }, {
        key: 'toId',
        /** @memberof AbstractStore 
        * @instance 
        * @method toId 
        * @param id */value: function toId(id) {
            return id;
        }
    }, {
        key: 'updateByKey',
        /** @memberof AbstractStore 
        * @instance 
        * @method updateByKey 
        * @param options */value: function updateByKey(options) {
            var _this = this;

            var keyPath = this.keyPath;
            if (!options.key) {
                throw new Error('Missing property key in options');
            }

            options.partialUpdate = options.data !== options.fullData;
            options.criteria = {};
            options.criteria[keyPath] = options.key;
            options.data = _Object$assign({}, options.data);
            delete options.data[keyPath];
            return this.update(options).then(function (count) {
                if (count !== undefined && count !== 1) {
                    throw new Error('Failed to updateByKey ' + _this.manager.VO.name + ': ' + options.key + ' (' + count + ')');
                }
            });
        }
    }, {
        key: 'removeByKey',
        /** @memberof AbstractStore 
        * @instance 
        * @method removeByKey 
        * @param options */value: function removeByKey(options) {
            var _this2 = this;

            var keyPath = this.keyPath;
            if (!options.key) {
                throw new Error('Missing property key in options');
            }

            options.criteria = {};
            options.criteria[keyPath] = options.key;
            return this.remove(options).then(function (count) {
                if (count !== undefined && count !== 1) {
                    throw new Error('Failed to removeByKey ' + _this2.manager.VO.name + ': ' + options.key + ' (' + count + ')');
                }
            });
        }
    }, {
        key: 'keyPath',
        /** @memberof AbstractStore 
        * @instance 
        * @member keyPath */get: function get() {
            return this.manager.VO.keyPath || 'id';
        }
    }]);

    return AbstractStore;
})();

exports.default = AbstractStore;
module.exports = exports.default;
//# sourceMappingURL=AbstractStore.js.map