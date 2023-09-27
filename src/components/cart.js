import React, { useState, useEffect, useCallback } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [inputValues, setInputValues] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = useCallback(() => {
    let ans = 0;
    cart.forEach((item) => {
      const inputValue = inputValues[item.id] || item.price;
      ans += item.amount * inputValue;
    });
    setPrice(ans);
  }, [cart, inputValues]);

  const handlePriceItem = (newPrice, id) => {
    const updatedProducts = cart.map((product) => {
      if (product.id === id) {
        return { ...product, price: newPrice };
      }
      return product;
    });
    setCart(updatedProducts);
    setIsModalOpen(false);
  };

  const handleInputChange = (event, id) => {
    const newValue = event.target.value;
    setInputValues({
      ...inputValues,
      [id]: newValue.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      }),
    });
  };

  useEffect(() => {
    handlePrice();
  }, [handlePrice, inputValues]);

  return (
    <div className="container">
      <article>
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div className="btn-products">
              {isModalOpen ? (
                <>
                  <input
                    type="number"
                    value={inputValues[item.id] || item.price}
                    onChange={(event) => handleInputChange(event, item.id)}
                    placeholder="Digite o valor do produto"
                  />
                  <button
                    onClick={() =>
                      handlePriceItem(
                        inputValues[item.id] || item.price,
                        item.id
                      )
                    }
                  >
                    Salvar
                  </button>
                </>
              ) : (
                <button className="price" onClick={() => setIsModalOpen(true)}>
                  <span>
                    {item.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </button>
              )}

              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Valor total</span>
          <span>
            {price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </article>
    </div>
  );
};

export default Cart;
