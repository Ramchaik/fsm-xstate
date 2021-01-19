const { machine, transition: transitionObj } = require("./fsm-object/fsm");
const { transition: transitionSwitch } = require("./fsm-switch/fsm");
/**
 * Impure
 */

let currentStateObj = machine.initial; // idle
let currentStateSwitch = "idle";

const sendObj = (event) => {
  const nextState = transitionObj(currentStateObj, event);
  console.log(nextState);
  currentStateObj = nextState;
};

const sendSwitch = (event) => {
  const nextState = transitionSwitch(currentStateSwitch, event);
  console.log(nextState);
  currentStateSwitch = nextState;
};

module.exports = {
  sendObj,
  sendSwitch,
};
