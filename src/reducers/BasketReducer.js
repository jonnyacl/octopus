export const BasketReducer = (state, action) => {
  switch (action.type) {
    case "ADDED_TO_BASKET":
      if (action.itemId) {
        const itemToAdd = state[action.itemId];
        const count = itemToAdd.count + action.count;
        const newItem = {
          count,
          price: action.price * count,
          currency: action.currency,
        };
        let newState = {
          ...state,
        };
        newState[action.itemId] = newItem;
        return newState;
      }
      return state;
    case "REMOVE_FROM_BASKET":
      if (action.itemId) {
        const emptyItem = {
          count: 0,
          price: 0,
          currency: "£",
        }
        let newEmptiedState = {
          ...state,
        };
        newEmptiedState[action.itemId] = emptyItem;
        return newEmptiedState;
      }
      return state;
    default:
      return state;
  }
};