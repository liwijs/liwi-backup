import QFind from './QFind';

export default class QFindOne extends QFind {
    fetch(callback) {
        return this.manager.executeHooks(['beforeFind', 'beforeFindOne'], this.options)
            .then(() => {
                return this.manager.store.findOne(this._query, this.options);
            }).then((result) => {
                result = result ? this.manager.toVO(result) : result;
                return callback ? callback(result) : result;
            });
    }

    byId(id) {
        this._query = { _id: this.manager.store.toId(id) };
        return this;
    }

    notNull() {
        return this.fetch().then((result) => {
            if (result === null) {
                let error = new Error('Failed to find the object');
                error.status = 404;
                throw error;
            }

            return result;
        });
    }
}
