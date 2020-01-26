import React, { useReducer } from 'react';
import Header from './views/Header';
import './App.scss';
import Item from './views/Item';
import Footer from './views/Footer';
import { BasketReducer } from './reducers/BasketReducer';
import { BasketContext} from './contexts/BasketContext';

const App = () => {

  const initialBasketState = {
    ESB: { count: 0, price: 0, currency: "£" },
  };

  const basketReducer = (state, action) => BasketReducer(state, action);
  const [basketState, basketDispatch] = useReducer(basketReducer, initialBasketState);

  const performanceData = [
    {
      temp: 200, "7w": 2, "11w": 2.2
    },
    {
      temp: 250, "7w": 2.5, "11w": 3
    },
    {
      temp: 300, "7w": 0.2, "11w": 3.5
    },
    {
      temp: 350, "7w": 0.1, "11w": 1.3
    },
    {
      temp: 400, "7w": 0.05, "11w": 0.2
    },
    {
      temp: 450, "7w": 0, "11w": 0.2
    },
  ];
  return (
    <BasketContext.Provider value={[basketState, basketDispatch]}>
      <div className="App">
        <Header />
        <Item
          id="ESB"
          item="Energy Saving Lightbulb"
          description="25W // Packet of 4"
          detail="Available in 7 watts, 9 watts, 11
            watts Spiral Lightbulb in B22,
            bulbs witches on instantly, no
            wait around warm start and
            flicker free features."
          specs={{
            brand: "Philips",
            weight: "77g",
            dimensions: "12.6x6.2x6.2cm",
            model: "E27 E6",
            colour: "Cool Daylight"
          }}
          price={12.99}
          perfData={performanceData}
        >
        </Item>
        <Footer />
      </div>
    </BasketContext.Provider>
  );
}

export default App;
