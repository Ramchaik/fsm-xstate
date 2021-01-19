const { feedbackMachine, transition } = require("./fsm");

function interpret(machine) {
  let currentState = machine.initial;
  const send = (event) => {
    const nextState = transition(currentState, event);
    console.log(nextState);
    currentState = nextState;
  };

  return { send };
}

module.exports = {
  send: interpret(feedbackMachine).send,
};
