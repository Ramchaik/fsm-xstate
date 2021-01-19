const { machine, transition } = require("./fsm");
/**
 * Impure
 */

// 'idle'
let currentState = machine.initial;

const send = (event) => {
  const nextState = transition(currentState, event);

  console.log(nextState);

  currentState = nextState;
};

module.exports = {
  send,
};
