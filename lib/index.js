'use strict';

var _createClass = require('babel-runtime/helpers/create-class').default;

var _classCallCheck = require('babel-runtime/helpers/class-call-check').default;

var _Map = require('babel-runtime/core-js/map').default;

var _Object$freeze = require('babel-runtime/core-js/object/freeze').default;

var _Promise = require('babel-runtime/core-js/promise').default;

var _Object$keys = require('babel-runtime/core-js/object/keys').default;

const databases = new _Map();

/** @class Db 
* @param dbName 
* @param Store 
* @param options */
let Db = (function () {
    function Db(dbName, Store, options) {
        _classCallCheck(this, Db);

        this.dbName = dbName;
        options.dbName = dbName;
        this.options = options;
        this.Store = Store;
        this.models = [];
    }

    _createClass(Db, [{
        key: 'initialize',
        /** @memberof Db 
        * @instance 
        * @method initialize */value: function initialize() {
            var _this = this;

            return this.Store.initialize(this).then(function () {
                _Object$freeze(_this);
            });
        }
    }, {
        key: 'close',
        /** @memberof Db 
        * @instance 
        * @method close */value: function close() {
            return this.Store.close(this);
        }
    }, {
        key: 'add',
        /** @memberof Db 
        * @instance 
        * @method add 
        * @param vo */value: function add(vo) {
            this.models.push(vo);
        }
    }, {
        key: 'createStore',
        /** @memberof Db 
        * @instance 
        * @method createStore 
        * @param manager */value: function createStore(manager) {
            return new this.Store(this, manager);
        }
    }]);

    return Db;
})();

module.exports = _Object$freeze({
    initialize(config, getStore) {
        if (!config) {
            return;
        }

        if (!getStore) {
            getStore = function (type) {
                return require('springbokjs-db-' + (type || 'mongo'));
            };
        }

        return _Promise.all(_Object$keys(config).map(function (dbKey) {
            let dbConfig = config[dbKey];
            let Store = getStore(dbConfig.type);
            let db = new Db(dbConfig.dbName, Store, dbConfig);
            databases.set(dbKey, db);
            return db.initialize();
        }));
    },

    close() {
        databases.forEach(function (db) {
            return db.close();
        });
    },

    get(dbKey) {
        return databases.get(dbKey);
    },

    forEach(callback) {
        return databases.forEach(callback);
    }
});
//# sourceMappingURL=index.js.map