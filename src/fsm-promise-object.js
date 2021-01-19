const machine = {
  initial: "idle",
  states: {
    idle: {
      on: {
        FETCH: "pending",
      },
    },
    pending: {
      on: {
        RESOLVE: "resolved",
        REJECT: "rejected",
      },
    },
    resolved: {},
    rejected: {},
  },
};

const transition = (state, event) =>
  machine.states[state]?.on?.[event] || state;

module.exports = {
  transition,
};
