/****
 * 描述:公共组件-异步加载时的loading组件
 * 创建者:李克振
 * 日期:2021/05/10
****/
import React from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import './index.scss'


function Loading (props) {
  const { 
    text,
    icon,
  } = props

  return (
    <div className="page-loading">
      <Spin tip={text} indicator={icon} />
    </div>
  )
    
}

// 参数类型验证
Loading.propTypes = {
  text: PropTypes.string, // 加载中文字
  icon: PropTypes.node, // 加载中图标
}

export default Loading