const { transition } = require("./fsm-promise-object");

console.log(transition("idle", "FETCH"));
console.log(transition("pending", "FETCH")); // anomalous state
console.log(transition("pending", "RESOLVE"));
