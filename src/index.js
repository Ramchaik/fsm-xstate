const { send } = require("./fsm-promise-object/interpreter");

send("FETCH");
send("FETCH"); // anomalous state
send("RESOLVE");
