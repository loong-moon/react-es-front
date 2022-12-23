/****
 * 描述: 公共组件-内容面板-侧边
 * 创建者:李克振
 * 日期:2021/05/10
****/
import React from 'react'
import PropTypes from 'prop-types'

function PanelSide (props) {
  let {
    className,
    children,
    ...restProps 
  } = props

  // 处理自定义样式
  className = className ? `ya-panel-side ${className}` : 'ya-panel-side'
  
  return (
    <section {...restProps} 
      className={className}>
      {children}
    </section>           
  )
}

// 参数类型验证
PanelSide.propTypes = {
  className: PropTypes.string, // 样式名
  children: PropTypes.node, // 面板内容
}
export default PanelSide