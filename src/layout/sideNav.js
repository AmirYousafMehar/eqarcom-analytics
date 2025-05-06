import React from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Col, Divider, Row ,Card} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
/**
* @author
* @function SideNav
**/

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
    (icon, index) => ({
      key: String(index + 1),
      icon: React.createElement(icon),
      label: `nav ${index + 1}`,
    }),
  );
export const SideNav = (props) => {
  return(
    <Sider
    style={{
      background:'#165f92',
      position:'sticky',
      top:0,
    }}
    breakpoint="lg"
    collapsedWidth="0"
    onBreakpoint={(broken) => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}
  >
    <div className="demo-logo-vertical">
      <h1>DEMO LOGO</h1>
    </div>
    <Menu theme={null} mode="inline" defaultSelectedKeys={['4']} items={items} />
  </Sider>
   )

 }