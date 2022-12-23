/****
 * 描述: 公共组件-展示卡片
 * 创建者:李克振
 * 日期:2021/05/10
****/
import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

import { backgroundColorEnum } from './background-enum'

function YaViewCard (props) {
  let {
    className,
    title,
    count,
    icon,
    background,
    height,
    onClick = () => {},
  } = props
  
  // 处理自定义样式
  className = className ? `ya-view-card-wrap ${className}` : 'ya-view-card-wrap'

  // 处理背景
  let style = {}
  if (background) {
    
    if (backgroundColorEnum[background]) {
      background = backgroundColorEnum[background]
    }
    style = { background }
  }  
  
  // 添加高度
  if (height) {
    style = Object.assign(style, { height: height + 'px' })
  }

  return (
    <div className={className} style={style} onClick={onClick}>
      {/* 卡片展示内容 包括标题和统计数字 */}
      <div className="ya-view-card-con">
        <div className="ya-view-card-count">{count}</div>
        <div className="ya-view-card-title">{title}</div>
      </div>

      {/* 卡片图标 */}
      { icon && (
        <React.Fragment>
          <div className="icon-box">{icon}</div>
          <div className="box-bg"></div>
        </React.Fragment>
      )}

    </div>
  )
}

// 参数类型验证
YaViewCard.propTypes = {
  className: PropTypes.string, // 自定义样式
  title: PropTypes.string, // 卡片标题
  count: PropTypes.number, // 卡片展示的统计数字
  icon: PropTypes.node, // 卡片用到的图标
  background: PropTypes.string, // 卡片背景，可以传递已经定义的图片名字
  height: PropTypes.number, // 卡片高度
  onClick: PropTypes.func, // 点击卡片事件
}

export default YaViewCard