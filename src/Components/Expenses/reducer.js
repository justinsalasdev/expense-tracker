export default function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state.map(e => e), action.payload];

    case "delete":
      return state.filter((_, index) => index !== action.payload);

    default:
      console.log("unknown action");
      return state;
  }
}
