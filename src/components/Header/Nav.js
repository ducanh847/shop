import React, { Component, useState, useEffect } from "react";
import { Input, Badge, notification } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
//import { Redirect } from "react-router-dom";
const { Search } = Input;

const Nav = (props) => {

  const {count}= props;
  const [isLogout, setIsLogout] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [countCart, setCountCart] = useState(count);

  const logout = () => {
    localStorage.clear();
    setIsLogout(true);
    isLogin(false);
    notification.success({
      message: "Thông báo",
      description: "Đăng xuất thành công",
      placement: "bottomRight",
    });
  };
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    setCountCart(localStorage.getItem("COUNT"));
    setIsLogin(isLogin);
  }, []);
  useEffect(() => {
    setCountCart(count)
  }, [count]);
  const name = localStorage.getItem('user')
  // const {isLogout} = this.state
  return (
    <header className="header">
      <div className="navbar">
        <Link className="navbar-brand" to="/">
          LOGO
        </Link>
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Sản phẩm</Link>
          </li>
          <li>
            <Link to="/aboutus">Giới thiệu</Link>
          </li>
        </ul>
      </div>
      <div>
        <Search
          placeholder="Search sản phẩm..."
          onSearch={(value) => console.log(value)}
          style={{ width: 300 }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {isLogin ? (
          <div>
            {/* check admin */}
            {name === "KIEN" ? (
              <Link to="/admin">
                <button type="button" className="btn btn-default">
                  Hi! Admin {name}
                </button>
              </Link>
            ) : (
              <Link to="/account">
                <button type="button" className="btn btn-default">
                  Hi! {name}
                </button>
              </Link>
            )}

            <Link to="/">
              <button
                type="button"
                onClick={() => logout}
                className="btn btn-default"
              >
                LOG-OUT
              </button>
            </Link>
          </div>
        ) : (
          <Link to="/login">
            <button type="button" className="btn btn-default">
              SIGN-IN
            </button>
          </Link>
        )}

        <Link to="/cart">
          <Badge count={countCart}>
            <button type="button" className="btn btn-default">
              <ShoppingCartOutlined /> CART
            </button>
          </Badge>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
