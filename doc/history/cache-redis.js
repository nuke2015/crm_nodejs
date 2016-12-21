var Cacheman = require('cacheman');
var options = {
    ttl: 90,
    engine: 'redis',
    port: 6379,
    host: '127.0.0.1'
};
// or
var cache = new Cacheman('todo', options);
// set the value
cache.set('my key', {
    foo: 'bar'
}, function(error) {
    if (error) throw error;
    // get the value
    cache.get('my key', function(error, value) {
        if (error) throw error;
        console.log(value); //-> {foo:"bar"}
        // delete entry
        cache.del('my key', function(error) {
            if (error) throw error;
            console.log('value deleted');
        });
    });
});