import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
const ProductContainer = (props) => {
  const {products} = props;
  const [listProductCart, setListProductCart] = useState(JSON.parse(localStorage.getItem("CART")) ? JSON.parse(localStorage.getItem("CART")) : []);
  const onAddToCart = (product) => {
    let dataIndex = listProductCart?.findIndex((x) => x.id === product.id);
    if (dataIndex !== -1) {
      alert('Sản phẩm đã có trong giỏ hàng')
    } else {
      setListProductCart([...listProductCart, product]);
    }
  };
  useEffect(() => {
    localStorage.setItem("CART", JSON.stringify(listProductCart));
  }, [listProductCart]);
    return (
      <div className="main-product">
        <div className="row">
          {products?.map((product) => (
            <div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <div className="product-item">
                  <div className="pi-img-wrapper">
                    <img
                      src={product.image}
                      className="img-responsive"
                      alt="#"
                    />

                    <div></div>
                  </div>
                  <Link to={"/productdetail/" + product.id}>
                    <h3 style={{ marginTop: 10 }}>
                      <p>{product.name}</p>
                    </h3>
                  </Link>
                  <div className="pi-price">{product.price}</div>
                  <p
                    className="btn add2cart"
                    onClick={() => onAddToCart(product)}
                  >
                    Add to cart
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default ProductContainer;
