const brain = require('brain.js');
const net = new brain.recurrent.LSTMTimeStep();

net.train([
    [1, 2, 3, 4, 5, 6, 7]
]);

const output = net.run([1, 2, 3, 4, 5, 6]); // 3

console.log(output);