import React from "react";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const Cards = ({ item, handleClick }) => {
  const { title, category, price, img } = item;

  // Estilização para tornar as imagens responsivas

  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt={title} />
      </div>
      <div className="description">
        <div className="details">
          <p>{title}</p>
        </div>
        <div className="hr"></div>
        <div className="details">
          <button onClick={() => handleClick(item)}>
            Adicionar no carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
