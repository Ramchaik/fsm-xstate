import { createMachine } from "xstate";

export const feedbackMachine = createMachine({
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
    thanks: {},
    closed: {},
  },
});
