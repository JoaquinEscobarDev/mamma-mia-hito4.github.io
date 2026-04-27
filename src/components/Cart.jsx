import { useState } from "react";
import { pizzaCart } from "../assets/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div className="container my-5">
      <h3 className="mb-4">Detalles del pedido:</h3>

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2"
        >
          <div className="d-flex align-items-center gap-3">
            <img
              src={pizza.img}
              alt={pizza.name}
              style={{ width: "70px", height: "70px", objectFit: "cover" }}
            />
            <h6 className="mb-0 text-capitalize">{pizza.name}</h6>
          </div>

          <div className="d-flex align-items-center gap-3">
            <span>${pizza.price.toLocaleString()}</span>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => decrease(pizza.id)}
            >
              -
            </button>
            <span>{pizza.count}</span>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => increase(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h2 className="mt-4">Total: ${total.toLocaleString()}</h2>
      <button className="btn btn-dark mt-3">Pagar</button>
    </div>
  );
};

export default Cart;