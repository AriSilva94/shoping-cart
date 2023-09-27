import React from "react";
import Cards from "./card";
import "../styles/amazon.css";
import { Form, Button } from "react-bootstrap";

const Amazon = ({
  handleClick,
  products,
  loadDataBase,
  handleList,
  productsFiltered,
  isFiltered,
  cleanForm,
  searchValue,
}) => {
  return (
    <div className="container">
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Procure por um produto aqui..."
          className="me-2"
          aria-label="Search"
          value={searchValue}
          onChange={(event) => handleList(event)}
        />
        <Button variant="outline-primary" onClick={cleanForm}>
          Limpar
        </Button>
      </Form>
      {isFiltered ? (
        <>
          {productsFiltered ? (
            <section>
              {productsFiltered.map((item) => (
                <Cards key={item.id} item={item} handleClick={handleClick} />
              ))}
            </section>
          ) : (
            <button onClick={loadDataBase}>Carregar produtos</button>
          )}
        </>
      ) : (
        <>
          {products ? (
            <section>
              {products.map((item) => (
                <Cards key={item.id} item={item} handleClick={handleClick} />
              ))}
            </section>
          ) : (
            <button onClick={loadDataBase}>Carregar produtos</button>
          )}
        </>
      )}
    </div>
  );
};

export default Amazon;
