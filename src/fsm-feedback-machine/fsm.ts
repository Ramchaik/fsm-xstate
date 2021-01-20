import { Machine } from "src/types";

export const feedbackMachine: Machine = {
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

export const transition = (state: string, event: string): string =>
  feedbackMachine.states[state]?.on?.[event] || state;
