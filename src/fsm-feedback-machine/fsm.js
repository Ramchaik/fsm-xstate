const feedbackMachine = {
  initial: "question",
  states: {
    question: {
      on: {
        CLICK_GOOD: "thanks",
        CLICK_BAD: "form",
      },
    },
    form: {
      on: {
        SUBMIT: "thanks",
      },
    },
    thanks: {
      on: {
        CLOSE: "closed",
      },
    },
    closed: {},
  },
};

const transition = (state, event) =>
  feedbackMachine.states[state]?.on?.[event] || state;

module.exports = {
  feedbackMachine,
  transition,
};
