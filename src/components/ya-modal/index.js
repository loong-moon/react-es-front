/****
 * 描述: 公共组件-弹框
 * 创建者:李克振
 * 日期:2021/05/10
****/
import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'
import './index.scss'

function YaTag (props) {
  let { 
    className,
    children,
    ...restProps
  } = props

  // 处理自定义样式
  className = className ? `ya-modal-wrap ${className}` : 'ya-modal-wrap'
  
  return <Modal 
    {...restProps}
    className={className}
    centered={true}
    cancelButtonProps={{
      type: 'primary',
      ghost: true,
    }}>
    {children}
  </Modal>
}

// 参数类型验证
YaTag.propTypes = {
  className: PropTypes.string, // 自定义样式
  children: PropTypes.node, // 弹框内容
}

export default YaTag