import QFind from './QFind';

export default class QFindAll extends QFind {
    exec() {
        return this.cursor();
    }

    forEach(callback) {
        return this.cursor().then((cursor) => {
            return cursor.forEach(callback);
        });
    }

    fetch() {
        return this.cursor().then((cursor) => {
            return cursor.toArray();
        });
    }
}
