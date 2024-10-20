import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const AdminDashboard = () => {
   return (
      <Layout style={{ minHeight: '100vh' }}>
         <Sider collapsible>
            <div className="logo" style={{ height: '32px', margin: '16px', background: 'rgba(255, 255, 255, 0.2)' }} />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
               <Menu.Item key="1">Dashboard</Menu.Item>
               <Menu.Item key="2">User Management</Menu.Item>
               <Menu.Item key="3">Settings</Menu.Item>
            </Menu>
         </Sider>
         <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
               <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Admin</Breadcrumb.Item>
                  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
               </Breadcrumb>
               <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Admin Dashboard Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design Admin Template ©2024 Created by Your Name</Footer>
         </Layout>
      </Layout>
   );
};

export default AdminDashboard;
