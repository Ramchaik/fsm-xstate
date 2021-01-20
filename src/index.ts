import { feedbackService } from "./fsm-xstate-feedback-machine/fsm";

feedbackService.send({
  type: "CLICK_GOOD",
});

feedbackService.send("CLOSE");

feedbackService.stop();
