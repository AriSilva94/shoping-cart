import React from "react";
import Cards from "./card";
import "../styles/amazon.css";

const Amazon = ({ handleClick, products, loadDataBase }) => {
  return (
    <div className="container">
      {products ? (
        <section>
          {products.map((item) => (
            <Cards key={item.id} item={item} handleClick={handleClick} />
          ))}
        </section>
      ) : (
        <button onClick={loadDataBase}>Carregar produtos</button>
      )}
    </div>
  );
};

export default Amazon;
