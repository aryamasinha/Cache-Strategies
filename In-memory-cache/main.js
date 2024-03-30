const { Cache } = require('./cache.js');
const myCache = new Cache(); 
myCache.put('myKey1', { myValue: 'hello' });
myCache.put('myKey2', { myValue: 'world' });
myCache.put('myKey3', { myValue: 'foo' }, 5 * 1000);

// Retrieve
const myObject1 = myCache.get('myKey1');
const myObject2 = myCache.get('myKey2');
const myObject3 = myCache.get('myKey3');

console.log(myObject1); 
console.log(myObject2); 
console.log(myObject3); 


setTimeout(() => {
    const myObject3Expired = myCache.get('myKey3');
    console.log(myObject3Expired); 
}, 6000);
