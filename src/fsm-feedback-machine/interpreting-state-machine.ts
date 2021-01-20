import { Machine } from "src/types";
import { feedbackMachine, transition } from "./fsm";

function interpret(
  machine: Machine
): {
  onTransition: (l: any) => void;
  send: (e: string) => void;
  stop: () => void;
} {
  let currentState = machine.initial;
  let status = 1; // 1 means started, 2 means stoped

  const listeners = new Set();

  const send = (event: string) => {
    // Don't accept events if stopped
    if (status === 2) {
      console.log("machine stoped");
      return;
    }

    const nextState = transition(currentState, event);
    console.log(nextState);
    currentState = nextState;
  };

  const onTransition = (listener: any) => {
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

export const send = interpret(feedbackMachine).send;
