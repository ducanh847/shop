import React, { Component, useState } from "react";
import { Breadcrumb, Row } from "antd";
import { Divider } from "antd";
//import ProductItem from "../../components/Product/ProductItem";
import ProductContainer from "./ProductContainer";
import { Link } from "react-router-dom";
import ProductSlide from "./ProductSlide";

const ProductPage = (props) => {
  const {products} = props;
    return (
      <div className="container product-page ">
        <Row className="my-breadcrump">
          <Breadcrumb className="padleft">
            <Breadcrumb.Item><Link to="/">HOME</Link></Breadcrumb.Item>
            <Breadcrumb.Item>MY PRODUCT</Breadcrumb.Item>
          </Breadcrumb>

          <ul style={{ paddingLeft: 600, margin: 0 }}>
            <button type="button" className="btn btn-default">
              Filter
            </button>
          </ul>
          <ul style={{ paddingRight: 50, margin: 0 }}>
            <button type="button" className="btn btn-default">
              Pagination
            </button>
          </ul>
        </Row>
        
        <ProductContainer products={products}/>
      
        <Divider
          style={{
            color: "red",
            fontSize: 22,
            fontWeight: "bold",
            padding: 20,
            background: "lightgray",
          }}
        >
          HOT SALE
        </Divider>
        <ProductSlide />
        <hr />
      </div>
    );
}
export default ProductPage;
