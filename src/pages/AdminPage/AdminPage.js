import React, { Component } from 'react';
import { Tabs } from 'antd';
import ProductContent from './ProductContent/ProductContent';
import ProductTypeContent from './ProductTypeContent/ProductTypeContent';
import UserContent from './UserContent/UserContent';
import AdminContent from './AdminContent/AdminContent';
import OrderContent from './OrderContent/OrderContent';

const { TabPane } = Tabs;
class AdminPage extends Component {
    render() {
        return (
            <div className="admin-page container">
                <div className="row main-admin">
                <Tabs defaultActiveKey="1" type="card" size="large" >
                    <TabPane tab="QUẢN LÝ SẢN PHẨM" key="1" className="admin-tabs">
                    <ProductContent/>
                    </TabPane>
                    <TabPane tab="QUẢN LÝ LOẠI SẢN PHẨM" key="2" className="admin-tabs">
                    <ProductTypeContent/>
                    </TabPane>
                    <TabPane tab="QUẢN LÝ USER" key="3" className="admin-tabs">
                    <UserContent/>
                    </TabPane>
                    <TabPane tab="QUẢN LÝ ADMIN" key="4" className="admin-tabs">
                    <AdminContent/>
                    </TabPane>
                    <TabPane tab="QUẢN LÝ HÓA ĐƠN" key="5" className="admin-tabs">
                    <OrderContent/>
                    </TabPane>
                </Tabs>
                </div>
            </div>
        );
    }
}

export default AdminPage;
