import { createMachine, interpret } from "xstate";

const feedbackMachine = createMachine({
  initial: "question",
  states: {
    question: {
      on: {
        CLICK_GOOD: {
          target: "thanks",
        },
      },
    },
    form: {},
    thanks: {
      on: {
        CLOSE: {
          target: "closed",
        },
      },
    },
    closed: {},
  },
});

export const feedbackService = interpret(feedbackMachine)
  .onTransition((state) => {
    console.log(state.value);
  })
  .start();
