const { sendObj, sendSwitch } = require("./fsm-promise/interpreter");

sendObj("FETCH");
sendObj("FETCH"); // anomalous state
sendObj("RESOLVE");

console.log(" -------------------------- ");

sendSwitch("FETCH");
sendSwitch("FETCH"); // anomalous state
sendSwitch("RESOLVE");
