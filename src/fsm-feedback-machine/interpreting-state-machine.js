const { feedbackMachine, transition } = require("./fsm");

function interpret(machine) {
  let currentState = machine.initial;
  let status = 1; // 1 means started, 2 means stoped

  const listeners = new Set();

  const send = (event) => {
    // Don't accept events if stopped
    if (status === 2) {
      console.log("machine stoped");
      return;
    }

    const nextState = transition(currentState, event);
    console.log(nextState);
    currentState = nextState;
  };

  const onTransition = (listener) => {
    listeners.add(listener);
  };

  // Cleanup
  const stop = () => {
    status = 2;
    listeners.clear();
  };

  return {
    onTransition,
    send,
    stop,
  };
}

module.exports = {
  send: interpret(feedbackMachine).send,
};
