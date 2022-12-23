/****
 * 描述:组件-布局页面-头部-面包屑部分
 * 创建者:李克振
 * 日期:2021/04/30
****/
import React from 'react'
import { Breadcrumb } from 'antd'
import { useLocation } from 'react-router-dom'
import './index.scss'

import breadData from './bread-data'


function YaBreadcrumb () {
  const { pathname } = useLocation()
  const data = breadData[pathname]

  return (
    <div className="ya-breadcrumb">

      <i className="iconfont icon-dingwei"></i>

      <Breadcrumb separator=">">
        {
          data && data.map(item => {
            const breadItem = item.path ? 
              <Breadcrumb.Item 
                key={item.name} 
                href={item.path}>
                {item.name}
              </Breadcrumb.Item> : 
              <Breadcrumb.Item 
                key={item.name} >
                {item.name}
              </Breadcrumb.Item>

            return breadItem
          })
        }
      </Breadcrumb>
      
    </div>
  )
    
}

export default YaBreadcrumb