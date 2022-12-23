/****
 * 描述:组件-布局页面-头部
 * 创建者:李克振
 * 日期:2021/04/30
****/
import React, { useState } from 'react'
import { Layout, Popover } from 'antd'
import YaBreadcrumb from './ya-breadcrumb'
import {
  DownOutlined
} from '@ant-design/icons'

import { usePushPage } from '@/hooks'
import './index.scss'

const { Header } = Layout


function LayoutHeader () {
  // 服务器时间
  const [serverTime] = useState('2020-07-01')
  const pushPage = usePushPage()

  // 头部右侧Popover 弹出内容
  const content = (
    <ul className="layout-header-popper-list">
      <li onClick={() => pushPage('/main/my-account')}>
        <i className="iconfont icon-zhanghao" />我的账号
      </li>
      <li onClick={() => pushPage('/login')}>
        <i className="iconfont icon-tuichu" />退出登录
      </li>
    </ul>
  )


  return (
    <Header className="layout-header-wrap">

      {/* 面包屑导航 */}
      <YaBreadcrumb></YaBreadcrumb>

      {/* 头部右侧区域 */}
      <div className="header-right">
        <div>{ serverTime }</div>

        <div className="divide"></div>

        <Popover className="user-popover" placement="bottom" content={content} trigger="click">
          <div className="user-popover-link">您好，admin <DownOutlined className="ml20" /></div>
        </Popover>
        {/* <Button 
          type="link" 
          className="header-btn"
          onClick={() => pushPage('/login')}>
          <LogoutOutlined />
        </Button> */}
      </div>
    </Header>
  )
    
    
}

export default LayoutHeader