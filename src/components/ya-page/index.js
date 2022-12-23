/****
 * 描述: 公共组件-内容面板
 * 创建者:李克振
 * 日期:2021/05/10
****/
import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'


function YaPanel (props) {
  const {
    className,
    pageTitle,
    showTitle = false,
    children, 
    ...restProps 
  } = props
  
  const wrapClassName = className ? `ya-page-wrap ${className}` : 'ya-page-wrap'


  return (
    <section {...restProps} 
      className={wrapClassName}>

      {/* 标题区域 */}
      { showTitle && <div className="ya-page-title">
        {pageTitle}
      </div>
      }
                
      {/* 插槽的形式注入 */}
      <div className="ya-page-body">
        {children}
      </div>    
                       
    </section>           
  )
}

// 参数类型验证
YaPanel.propTypes = {
  className: PropTypes.string, // 样式名
  showTitle: PropTypes.bool, // 是否使用内容横排的弹性盒子
  pageTitle: PropTypes.oneOfType([ // 面板标题, 可以传递字符串或react元素
    PropTypes.string,
    PropTypes.node,
  ]),
  children: PropTypes.node, // 面板内容
}
export default YaPanel