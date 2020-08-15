import React, { Component, useState, useEffect } from "react";
import Slide from "./Slide";
import { Divider } from "antd";
import ProductContainer from "../ProductPage/ProductContainer";
import Axios from "axios";
//import ProductList from "../ProductPage/ProductList";

const HomePage = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:3000/products`).then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div className="container homepage">
      <Slide />
      <hr />
      <Divider
        style={{
          color: "red",
          fontSize: 22,
          fontWeight: "bold",
          padding: 20,
          background: "lightgray",
        }}
      >
        TOP PRODUCT
      </Divider>
      {/* <ProductList/> */}
      <ProductContainer
        products={products}
      />
      <Divider
        style={{
          color: "red",
          fontSize: 22,
          fontWeight: "bold",
          padding: 20,
          background: "lightgray",
        }}
      >
        THƯƠNG HIỆU
      </Divider>
    </div>
  );
};

export default HomePage;
