import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/cartSlice';

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalCost = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price} x {item.quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
          <button onClick={() => dispatch(decrementQuantity(item))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
        </div>
      ))}
      <h3>Total: ${totalCost}</h3>
      <button>Checkout (Coming Soon)</button>
    </div>
  );
};

export default CartPage;
