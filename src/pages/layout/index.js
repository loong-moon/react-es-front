/****
 * 描述:页面-布局页面
 * 创建者:李克振
 * 日期:2021/04/30
****/
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import SiderMenu from './components/sider-menu'
import LayoutHeader from './components/layout-header'

import logo from '@/assets/imgs/logo.png'
import './index.scss'


const { Header, Content, Sider } = Layout


function App (props) {
  // 生成侧边栏收缩状态及更新函数
  const [collapsed, setCollapsed] = useState(false)
  // console.log(props, 'aaaaaaaaaaaaaaaaa layout参数')
  
  return (
    <Layout className="page-layout">

      {/* 侧边栏 */}
      <Sider
        className="layout-sider-wrap" 
        width="230"
        collapsedWidth="64"
        collapsed={collapsed}>
        <Header className="sider-header">
          <img className="logo" src={logo} alt="logo" />
        </Header>

        {/* 侧边菜单 */}
        <SiderMenu></SiderMenu>

        <div className="menu-collapse" onClick={() => setCollapsed(!collapsed)}>
          <i className={collapsed ? 'iconfont icon-shenzhan' : 'iconfont icon-shousuo'}></i>
        </div>
      </Sider>

      {/* 主内容布局 */}
      <Layout>
        {/* 头部 */}
        <LayoutHeader></LayoutHeader>

        {/* 面包屑导航 */}
        {/* <MingBreadcrumb {...breadData[pathname]}></MingBreadcrumb> */}

        {/* route区域 */}
        <Content className="layout-body">
          <Outlet />
        </Content>
      </Layout>

    </Layout>
  )
}

// 参数类型验证
App.propTypes = {
  routes: PropTypes.array,
}

export default App
