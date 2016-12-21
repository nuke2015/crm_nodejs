// redis缓存
var Cacheman = require('cacheman');
var options = {
    ttl: 3600,
    engine: 'redis',
    port: 6379,
    host: '127.0.0.1'
};
cache = new Cacheman('cache', options);
exports.get = function(key, cb) {
    cache.get(key, cb);
}
exports.del = function(key, cb) {
    cache.del(key, cb);
}
exports.set = function(key, value, ttl, cb) {
    cache.set(key, value, ttl, cb);
}