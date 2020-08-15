import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios';
const ProductItem = (props) => {
  const { listProduct, product } = props;
  const [listProductCart, setListProductCart] = useState([]);
  const onAddToCart = (product) => {
    setListProductCart([...listProductCart, product]);
    // console.log(listProductCart);
    // let dataIndex = listProductCart?.findIndex((x) => x.id === product.id);
    // console.log(dataIndex)
    // if (dataIndex !== -1) {
    //   listProductCart[dataIndex].quanlity += 1;
    // } else {
    //   console.log('ok')
      console.log(listProductCart)
    // }

  };
  return (
    <div>
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <div className="product-item">
          <div className="pi-img-wrapper">
            <img src={product.image} className="img-responsive" alt="#" />

            <div></div>
          </div>
          <Link to={"/productdetail/" + product.id}>
            <h3 style={{ marginTop: 10 }}>
              <p>{product.name}</p>
            </h3>
          </Link>
          <div className="pi-price">{product.price}</div>
          <p className="btn add2cart" onClick={() => onAddToCart(product)}>
            Add to cart
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
