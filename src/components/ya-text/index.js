/****
 * 描述: 公共组件-可点击文字组件
 * 创建者:李克振
 * 日期:2021/05/10
****/
import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function YaText (props) {
  let { 
    className,
    type = 'btn',
    children, 
    onClick,
  } = props

  // 处理自定义样式
  className = className ? `ya-text ${className}` : 'ya-text'
  if (type === 'btn') {
    className += ' text-btn'
  } else if (type === 'link') {
    className += ' text-link'
  }
  
  return <span className={className} onClick={onClick}>{children}</span>
}

// 参数类型验证
YaText.propTypes = {
  className: PropTypes.string, // 自定义样式
  type: PropTypes.string, // 文字样式类型 btn-文字按钮 link-文字链接
  children: PropTypes.node, // 文字内容
  onClick: PropTypes.func, // 点击事件
}

export default YaText