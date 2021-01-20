import { sendObj, sendSwitch } from "./fsm-promise/interpreter";
import { send } from "./fsm-feedback-machine/interpreting-state-machine";
import { feedbackMachine } from "./fsm-xstate-feedback-machine/fsm";

/*
sendObj("FETCH");
sendObj("FETCH"); // anomalous state
sendObj("RESOLVE");

console.log(" -------------------------- ");

sendSwitch("FETCH");
sendSwitch("FETCH"); // anomalous state
sendSwitch("RESOLVE");

console.log(" -------------------------- ");

send("CLICK_BAD");
send("SUBMIT");
send("CLOSE");
console.log(" -------------------------- ");
*/

console.log(feedbackMachine.initialState);
const clickGoodEvent = {
  type: "CLICK_GOOD",
};

const nextState = feedbackMachine.transition(
  feedbackMachine.initialState,
  clickGoodEvent
);

console.log("**********");

console.log(nextState);
