/****
 * 描述: 公共组件-icon组件
 * 创建者:李克振
 * 日期:2021/05/10
****/
import React from 'react'
import PropTypes from 'prop-types'
import iconEnums from './icon-enums'

function YaIcon (props) {
  const { type } = props
  const IconType = iconEnums[type]
  let el = null

  if (IconType) {
    el = <IconType className="ya-icon" {...props} />
  } else {
    el = <i className={`ya-icon iconfont icon-${type}`}></i>
  }

  return el
}

// 参数类型验证
YaIcon.propTypes = {
  type: PropTypes.string, // 菜单类型或class名
}

export default YaIcon