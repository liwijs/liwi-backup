export default class AbstractStore {
    constructor(db, manager) {
        this.db = db;
        this.manager = manager;
    }

    toVO(result) {
        return this.manager.toVO(result);
    }

    toId(id) {
        return id;
    }

    get keyPath() {
        return this.manager.VO.keyPath || 'id';
    }

    updateByKey(options) {
        const keyPath = this.keyPath;
        if (!options.key) {
            throw new Error('Missing property key in options');
        }

        options.partialUpdate = options.data !== options.fullData;
        options.criteria = {};
        options.criteria[keyPath] = options.key;
        options.data = Object.assign({}, options.data);
        delete options.data[keyPath];

        return this.update(options).then((count) => {
            if (count !== undefined && count !== 1) {
                throw new Error('Failed to updateByKey ' +
                                this.manager.VO.name + ': ' + options.key + ' (' + count + ')');
            }
        });
    }

    removeByKey(options) {
        const keyPath = this.keyPath;
        if (!options.key) {
            throw new Error('Missing property key in options');
        }

        options.criteria = {};
        options.criteria[keyPath] = options.key;

        return this.remove(options).then((count) => {
            if (count !== undefined && count !== 1) {
                throw new Error('Failed to removeByKey ' +
                                this.manager.VO.name + ': ' + options.key + ' (' + count + ')');
            }
        });
    }
}
