import React from 'react';
import Cart from '../views/Cart';
import CartButton from '../components/CartButton';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Cart Component', () => {
  it('Renders Cart', () => {
    const cart = <Cart itemId="HI" price={10.12} item="Lightbulb" currency="$" />;
    shallow((cart));
  });
  it('Cart Button Clicks', () => {
    const mockCallBack = jest.fn();
    const cart = <CartButton onClick={mockCallBack}/>;

    const button = shallow((cart));
    const buttonElement = button.find('button');
    buttonElement.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});