const os = require('os');
const dns = require('dns');
const events = require('events');
const e = require('cors');

console.log("Os Name: ", os.type());
console.log("Os Architecture: ", os.arch());
console.log("os cpu info: ", os.cpus());
console.log("os free memory: ", os.freemem());
console.log("temperature: ", os.tmpdir());
console.log("os hostname: ", os.hostname());
console.log("os platform: ", os.platform());
console.log("os homedir: ", os.homedir());

dns.lookup('www.google.com', (err, address) => {
    if (err) {
        console.error(err);
        return;
        
    }
    console.log('address: %j family: IPv%s', address);
});

const eventEmitter = new events.EventEmitter();

const connectHandler = function connected() {
    console.log('connection successful.');
    
}
eventEmitter.on('connection', connectHandler);

eventEmitter.emit('connection');