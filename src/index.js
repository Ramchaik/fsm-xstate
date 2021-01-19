// const { sendObj, sendSwitch } = require("./fsm-promise/interpreter");
const { send } = require("./fsm-feedback-machine/interpreting-state-machine");

/*
sendObj("FETCH");
sendObj("FETCH"); // anomalous state
sendObj("RESOLVE");

console.log(" -------------------------- ");

sendSwitch("FETCH");
sendSwitch("FETCH"); // anomalous state
sendSwitch("RESOLVE");

console.log(" -------------------------- ");
*/

send("CLICK_BAD");
send("SUBMIT");
send("CLOSE");
