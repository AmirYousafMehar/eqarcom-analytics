import React from 'react'
import { Button, Layout } from 'antd';
import { AppstoreOutlined, UserOutlined } from '@ant-design/icons'
const { Header } = Layout;
/**
* @author
* @function TopHeader
**/

export const TopHeader = ({setToggle}) => {
  return(
    <Header className='custom-shadow' style={{ padding: 0,background:'#184461',position:'sticky',top:0,zIndex:99999 }}>
    <Button
      type="text"
      icon={<AppstoreOutlined />}
      onClick={()=>setToggle(false)}
      style={{
        height:'40px',
        background:'#FFFFFF',
        marginLeft:'40px',
        color:'#21405c',
    
      }}
    >Dashboard</Button>
    <Button
      type="text"
      icon={<AppstoreOutlined />}
 
      style={{
        height:'40px',
        background:'#FFFFFF',
        marginLeft:'40px',
        color:'#21405c',
    
      }}
      onClick={()=>setToggle(true)}
    >Echarts</Button>
  </Header>
 
   )

 }