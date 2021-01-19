const { machine, transition: transitionObj } = require("./fsm-object/fsm");
const { transition: transitionSwitch } = require("./fsm-switch/fsm");
/**
 * Impure
 */

const interpretObjMachine = (machine) => {
  let currentState = machine.initial; // idle
  const send = (event) => {
    const nextState = transitionObj(currentState, event);
    console.log(nextState);
    currentState = nextState;
  };
  return { send };
};

const interpretSwitchMachine = () => {
  let currentState = "idle";
  const send = (event) => {
    const nextState = transitionSwitch(currentState, event);
    console.log(nextState);
    currentState = nextState;
  };
  return { send };
};

module.exports = {
  sendObj: interpretObjMachine(machine).send,
  sendSwitch: interpretSwitchMachine().send,
};
