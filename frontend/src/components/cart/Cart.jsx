import React from 'react';


const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce(( sneakers) => sneaker.price, 0);

  return (
    <div className='cart'>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((sneaker) => (
              <li key={sneaker.article_number}>
                <div>
                  <img src={sneaker.image} alt={sneaker.name} />
                  <p>{sneaker.name}</p>
                  <p>${sneaker.price}</p>
                  <button onClick={() => removeFromCart(sneaker)}>
                    Remove from cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
