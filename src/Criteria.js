export default class Criteria {
    constructor() {
        this.criteria = {};
    }

    fieldEquals(field, value) {
        this.criteria.field = value;
    }

    fieldNotEquals(field, value) {
        this.criteria.field = { $not: value };
    }

    fieldInValues(field, values) {
        this.criteria.field = { $in: values };
    }

    or(iterable) {
        if (this.criteria.$or) {
            throw new Error('This criteria already have an or condition');
        }

        this.criteria.$or = iterable.map((c) => c instanceof Criteria ? c.criteria : c);
    }
}
