const Emitter = require('events');

const emitter = new Emitter();

emitter.on('message', (data, second, third) => {
    console.log('You sent a message ' + data)
    console.log('Second argument ' + second)
});

const MESSAGE = process.env.MESSAGE || '';

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123);
} else {
    emitter.emit('message', 'You didn`t indicate a message');
}
