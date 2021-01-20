import { createMachine } from "xstate";

export const feedbackMachine = createMachine({
  initial: "question",
  states: {
    question: {},
    form: {},
    thanks: {},
    closed: {},
  },
});
