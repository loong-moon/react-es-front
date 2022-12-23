/****
 * 描述: 公共组件-内容面板
 * 创建者:李克振
 * 日期:2021/05/10
****/
import React from 'react'
import PropTypes from 'prop-types'
import PanelSide from './panel-side'
import PanelSection from './panel-section'
import './index.scss'


function YaPanel (props) {
  const {
    flex,
    flexRow,
    full,
    className,
    panelTitle,
    headerRight, 
    children, 
    ...restProps 
  } = props
  
  let wrapClassName = className ? ' ' + className : ''

  if (flex) {
    wrapClassName = wrapClassName + ' flex'
  } else if (flexRow) {
    wrapClassName = wrapClassName + ' flex-row'
  } else if (full) {
    wrapClassName = wrapClassName + ' full'
  }

  return (
    <section {...restProps} 
      className={'ya-panel-wrap' + wrapClassName}>

      {/* 只有当有标题时才会显示标题区域 */}
      { panelTitle && <div className="ya-panel-header">
        <div className="header-title">
          { panelTitle }
        </div>
        
        <div className="header-right">
          { headerRight }
        </div>
      </div>
      }
                
      {/* 插槽的形式注入 */}
      <div className="ya-panel-body scollbar">
        {children}
      </div>    
                       
    </section>           
  )
}

YaPanel.PanelSide = PanelSide
YaPanel.PanelSection = PanelSection

// 参数类型验证
YaPanel.propTypes = {
  className: PropTypes.string, // 样式名
  flex: PropTypes.bool, // 是否使用弹盒子模式
  flexRow: PropTypes.bool, // 是否使用内容横排的弹性盒子
  full: PropTypes.bool, // 是否充满全屏
  panelTitle: PropTypes.oneOfType([ // 面板标题, 可以传递字符串或react元素
    PropTypes.string,
    PropTypes.node,
  ]),
  headerRight: PropTypes.node, // 面板头部右侧部分
  children: PropTypes.node, // 面板内容
}
export default YaPanel