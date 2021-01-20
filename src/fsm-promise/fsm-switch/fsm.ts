/**
 * Pure
 */
export const transition = (state: string, event: string): string => {
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
