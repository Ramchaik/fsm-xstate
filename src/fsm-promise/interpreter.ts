import { Machine } from "src/types";
import { machine, transition as transitionObj } from "./fsm-object/fsm";
import { transition as transitionSwitch } from "./fsm-switch/fsm";
/**
 * Impure
 */

const interpretObjMachine = (
  machine: Machine
): {
  send: (e: string) => void;
} => {
  let currentState = machine.initial; // idle
  const send = (event: string) => {
    const nextState = transitionObj(currentState, event);
    console.log(nextState);
    currentState = nextState;
  };
  return { send };
};

const interpretSwitchMachine = (): {
  send: (e: string) => void;
} => {
  let currentState = "idle";
  const send = (event: string) => {
    const nextState = transitionSwitch(currentState, event);
    console.log(nextState);
    currentState = nextState;
  };
  return { send };
};

export const sendObj = interpretObjMachine(machine).send;
export const sendSwitch = interpretSwitchMachine().send;
