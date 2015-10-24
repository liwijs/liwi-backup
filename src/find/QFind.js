export default class QFind {
    constructor(manager) {
        this.manager = manager;
        this.VO = manager.VO;
        this.options = {};
    }

    toModel(result) {
        this.manager.store.toModel(result);
    }

    fields(value) {
        this.options.fields = value;
        return this;
    }

    field(value) {
        this.options.fields = [value];
        return this;
    }

    query(value) {
        this._query = value;
        return this;
    }

    sort(value) {
        this.options.sort = value;
        return this;
    }

    limit(value) {
        this.options.limit = value;
        return this;
    }

    notimeout() {
        this.options.timeout = false;
        return this;
    }

    cursor() {
        return this.manager.executeHooks(['beforeFind', 'beforeCursor'], this.options)
            .then(() => {
                return this.manager.store.cursor(this._query, this.options);
            });
    }
}
