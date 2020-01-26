export const BasketReducer = (state, action) => {
  switch (action.type) {
    case "ADDED_TO_BASKET":
      const itemToAdd = state.items[action.itemId];
      const count = itemToAdd.count + action.count;
      const newItem = {
        count,
        price: action.price * count,
        currency: action.currency,
      }
      const newItems = { ...state.items };
      newItems[action.itemId] = newItem;
      return {
        ...state,
        items: newItems
      };
    case "REMOVE_FROM_BASKET":
      const emptyItem = {
        count: 0,
        price: 0,
        currency: "£",
      }
      const emptyItems = { ...state.items };
      emptyItems[action.itemId] = emptyItem;
      return {
        ...state,
        items: emptyItems
      };
    default:
      return state;
  }
};