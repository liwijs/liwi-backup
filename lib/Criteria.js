'use strict';

var _createClass = require('babel-runtime/helpers/create-class').default;

var _classCallCheck = require('babel-runtime/helpers/class-call-check').default;

Object.defineProperty(exports, '__esModule', {
    value: true
});
/** @class Criteria */
let Criteria = (function () {
    function Criteria() {
        _classCallCheck(this, Criteria);

        this.criteria = {};
    }

    _createClass(Criteria, [{
        key: 'fieldEquals',
        /** @memberof Criteria 
        * @instance 
        * @method fieldEquals 
        * @param field 
        * @param value */value: function fieldEquals(field, value) {
            this.criteria.field = value;
        }
    }, {
        key: 'fieldNotEquals',
        /** @memberof Criteria 
        * @instance 
        * @method fieldNotEquals 
        * @param field 
        * @param value */value: function fieldNotEquals(field, value) {
            this.criteria.field = { $not: value };
        }
    }, {
        key: 'fieldInValues',
        /** @memberof Criteria 
        * @instance 
        * @method fieldInValues 
        * @param field 
        * @param values */value: function fieldInValues(field, values) {
            this.criteria.field = { $in: values };
        }
    }, {
        key: 'or',
        /** @memberof Criteria 
        * @instance 
        * @method or 
        * @param iterable */value: function or(iterable) {
            if (this.criteria.$or) {
                throw new Error('This criteria already have an or condition');
            }

            this.criteria.$or = iterable.map(function (c) {
                return c instanceof Criteria ? c.criteria : c;
            });
        }
    }]);

    return Criteria;
})();

exports.default = Criteria;
module.exports = exports.default;
//# sourceMappingURL=Criteria.js.map