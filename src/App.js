/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect, useCallback } from "react";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import dataList from "./data";
import { DBConfig } from "./services/DBConfig";
import { initDB, useIndexedDB } from "react-indexed-db-hook";

initDB(DBConfig);

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const { add } = useIndexedDB("products");
  const { getAll } = useIndexedDB("products");
  const [products, setProducts] = useState([]);

  const loadDataBase = () => {
    add(dataList).then(() => {
      console.log("Cadastrado");
      getAllProducts();
    });
  };

  const getAllProducts = useCallback(() => {
    getAll().then((productsFromDB) => {
      setProducts(productsFromDB[0]);
    });
  });

  const handleClick = (item) => {
    if (cart.some((cartItem) => cartItem.id === item.id)) {
      console.log(`Item com ID ${item.id} já está no carrinho.`);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} {...{ products, loadDataBase }} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App;
