/****
 * 描述: 公共组件-有状态标签
 * 创建者:李克振
 * 日期:2021/05/10
****/
import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'
import './index.scss'

function YaTag (props) {
  let { 
    className,
    color,
    label, 
  } = props

  // 处理自定义样式
  className = className ? `ya-tag ${className}` : 'ya-tag'

  // color默认五种状态'success'-成功, 'processing'-进行中, 'error'-失败, 'warning'-警告, 'default'-默认
  
  return <Tag className={className} color={color}>{label}</Tag>
}

// 参数类型验证
YaTag.propTypes = {
  className: PropTypes.string, // 自定义样式
  color: PropTypes.string, // 标签的颜色 
  label: PropTypes.string, // 标签的文字内容
}

export default YaTag