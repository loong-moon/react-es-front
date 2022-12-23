/****
 * 描述: 公共组件-表格操作列
 * 创建者:李克振
 * 日期:2021/05/10
****/

import React from 'react'
import ActionItem from './action-item'
import PropTypes from 'prop-types'

function ActionColum (props) {
  const { row, actions = [], actionClick } = props

  return (
    <div className="handle-col">
      {actions.map(item => <ActionItem key={item.key} row={row} data={item} onClick={actionClick} />)}
    </div>
  )
}

// 参数类型验证
ActionColum.propTypes = {
  row: PropTypes.object, // 表格操作行数据
  actions: PropTypes.array, // 操作动作数据
  actionClick: PropTypes.func, // 处理表格操作函数
}

export default ActionColum