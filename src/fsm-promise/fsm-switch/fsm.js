/**
 * Pure
 */
const transition = (state, event) => {
  switch (state) {
    case "idle":
      switch (event) {
        case "FETCH":
          return "pending";
        default:
          return state;
      }

    case "pending":
      switch (event) {
        case "RESOLVE":
          return "resolved";
        case "REJECT":
          return "rejected";
        default:
          return state;
      }

    case "resolved":
    case "rejected":
    default:
      return state;
  }
};

module.exports = {
  transition,
};
