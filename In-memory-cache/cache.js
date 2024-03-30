
class Cache {
    constructor(expirationTime = 30 * 60 * 1000) {
        this.cache = new Map();
        this.expirationTime = expirationTime;
    }
    put(key, value, expirationTime = this.expirationTime) {
        const now = new Date().getTime();
        const expiration = now + expirationTime;

        this.cache.set(key, { value, expiration });
    }
    get(key) {
        const now = new Date().getTime();
        const cached = this.cache.get(key);

        if (cached && cached.expiration > now) {
            return cached.value;
        }

        this.cache.delete(key);
        return null;
    }
    delete(key) {
        return this.cache.delete(key);
    }
    clear() {
        this.cache.clear();
    }
    keys() {
        return [...this.cache.keys()];
    }
    size() {
        return this.cache.size;
    }
}

module.exports = {
    Cache
};
