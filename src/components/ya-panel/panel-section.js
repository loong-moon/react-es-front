/****
 * 描述: 公共组件-面板-内容区域
 * 创建者:李克振
 * 日期:2021/05/10
****/
import React from 'react'
import PropTypes from 'prop-types'

function PanelSide (props) {
  const {
    title,
    className,
    children,
    ...restProps 
  } = props
  
  return (
    <section {...restProps} 
      className={`ya-panel-section ${className}`}>
      <div className="ya-panel-section-title">{title}</div>
      <div className="ya-panel-section-body">
        {children}
      </div>
    </section>           
  )
}

// 参数类型验证
PanelSide.propTypes = {
  className: PropTypes.string, // 样式名
  children: PropTypes.node, // 面板内容
  title: PropTypes.string, // 内容区域名字
}
export default PanelSide