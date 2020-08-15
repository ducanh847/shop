import React, { Component } from "react";
import { Input, Badge,notification } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
//import { Redirect } from "react-router-dom";
const { Search } = Input;

class Nav extends Component {
  state = {
       isLogout: false,
       isLogin: false,
       isAdmin:false
     }
  logout = () =>{
  localStorage.clear();
  this.setState({
    isLogout: true,
    isLogin: false
  })
  notification.success({
    message: 'Thông báo',
    description: 'Đăng xuất thành công',
    placement: "bottomRight"
    
  });
     
  }
 componentDidMount(){
    const isLogin = localStorage.getItem('isLogin');
    this.setState({
      isLogin: isLogin
    })
    console.log(isLogin)
    
  }
  render() {
    const name = localStorage.getItem('user')
    const {isLogin}= this.state
    const {isLogout} = this.state

    if (isLogout) {
      console.log("logout success")
    }
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
        <div style={{display:'flex',justifyContent:'space-between'}}>
            {(isLogin) ?   
                <div>
                  {/* check admin */}
                  {(name==="KIEN")? 
                  <Link to="/admin">
                  <button type="button"  className="btn btn-default">
                    Hi! Admin {name}
                  </button> 
                  </Link> : <Link to="/account">
                  <button type="button"  className="btn btn-default">
                    Hi! {name}
                  </button> 
                  </Link>
                  } 
                
                 <Link to="/">
                  <button type="button" onClick={this.logout} className="btn btn-default">
                    LOG-OUT
                  </button> 
                </Link>    
              </div>
            
            : 
              <Link to="/login">
              <button type="button" className="btn btn-default">
                SIGN-IN
              </button>
              </Link>
            
          
          }

          <Link to="/cart">
            <Badge count={1}>
              <button type="button" className="btn btn-default">
                <ShoppingCartOutlined /> CART
              </button>
            </Badge>
          </Link>
        </div>
      </header>
    );
  }
}

export default Nav;
