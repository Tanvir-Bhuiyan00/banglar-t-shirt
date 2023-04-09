import React from "react";
import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Plese add some products</p>;
  } else {
    message = (
      <div>
        <h3>Borloxxx</h3>
        <p>
          <small>Thanks for giving your money</small>
        </p>
      </div>
    );
  }
  return (
    <div>
      <h2 className={cart.length === 1 ? "yellow" : "blue"}>
        Order Summary: {cart.length}
      </h2>
      {cart.length > 2 ? (
        <span className="purple">Aro kino</span>
      ) : (
        <span>fokira</span>
      )}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
      {cart.length === 2 && <p>Double bonanza!!</p>}
      {cart.length === 3 || <h3>Tinta to hoilo na</h3>}
    </div>
  );
};

export default Cart;
