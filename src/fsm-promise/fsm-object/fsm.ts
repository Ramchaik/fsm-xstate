/**
 * Pure
 */

import { Machine } from "src/types";

export const machine: Machine = {
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

export const transition = (state: string, event: string): string =>
  machine.states[state]?.on?.[event] || state;
