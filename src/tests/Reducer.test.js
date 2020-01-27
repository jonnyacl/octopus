import { BasketReducer }  from '../reducers/BasketReducer';
const preState = {
    ESB: { count: 0, price: 0, currency: "£" },
};

describe('Basket Reducer Tests', () => {
  it('Reducer handles add to basket', () => {
    const action = {
        type: "ADDED_TO_BASKET",
        count: 2,
        itemId: "ESB",
        price: 10,
        currency: "£",
    };
    const basketState = BasketReducer(preState, action);
    expect(basketState).toEqual({ ESB: { count: 2, price: 20, currency: '£' } });
  });
  it('Reducer handles remove from basket', () => {
    const action = {
        type: "REMOVE_FROM_BASKET", itemId: "ESB"
    };
    const basketState = BasketReducer(preState, action);
    expect(basketState).toEqual({ ESB: { count: 0, price: 0, currency: '£' } });
  });
  it('Reducer returns pre state on invalid event type', () => {
    const action = {
        type: "BAD_EVENT", itemId: "ESB"
    };
    const basketState = BasketReducer(preState, action);
    expect(basketState).toEqual(preState);
  });
  it('Reducer returns pre state on invalid event action', () => {
    const action = {
        type: "REMOVE_FROM_BASKET", whatisThis: "ESB"
    };
    const basketState = BasketReducer(preState, action);
    expect(basketState).toEqual(preState);
  });
});