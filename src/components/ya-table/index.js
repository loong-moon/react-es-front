/****
 * 描述: 公共组件-表格
 * 创建者:李克振
 * 日期:2021/05/10
****/

import React from 'react'
import {
  Table,
} from 'antd'
import ActionColum from './action-colum'
import './index.scss'
import PropTypes from 'prop-types'

// 默认的分页选项
const defaultPagination = { 
  size: 'default', // 默认风格
  showSizeChanger: true, // 显示每页大小变化
  pageSizeOptions: ['5', '10', '20', '50', '100'],
  showTotal: total => <React.Fragment>共<span>{total}</span>条</React.Fragment>,
  showQuickJumper: true, // 显示快速跳转
}

function YaTable (props) {
  let { 
    className,
    columns, 
    pagination, 
    actionData, 
    dataSource = [], 
    children, 
    rowKey = 'id',
    actionClick,
    ...restProps 
  } = props

  // 处理分页
  if (pagination) { // 自定义分页时合并配置
    pagination = Object.assign({}, defaultPagination, pagination)
  } else if (pagination !== false) { // 不等于false时使用默认配置
    pagination = defaultPagination
  }

  // 处理class
  let wrapClassName = 'ya-table-wrap'
  if (className) {
    wrapClassName += ` ${className}`
  }
  if (pagination && dataSource.length !== 0) {
    wrapClassName += ' pagination'
  }

    
  // 当有操作列数据时
  if (actionData) {
    const {
      title = '操作', 
      align = 'center', 
      width = 150, 
      actions, 
      ...restData
    } = actionData
        
    const actionCol = {
      title,
      align,
      width,
      render: row => <ActionColum row={row} actions={actions} actionClick={actionClick}></ActionColum>,
      ...restData
    }

    columns = [...columns, actionCol]
  }
      
  return (
    <Table
      className={wrapClassName}
      size="middle"
      rowKey={rowKey}
      pagination={pagination}
      columns={columns} 
      dataSource={dataSource}
      {...restProps}
    >
      {children}
    </Table>
  )
}

// 参数类型验证
YaTable.propTypes = {
  className: PropTypes.string, // 类名
  columns: PropTypes.array, // 列数据
  pagination: PropTypes.oneOfType([ // 分页设置
    PropTypes.object,
    PropTypes.bool,
  ]),
  actionData: PropTypes.object, // 操作列数据
  dataSource: PropTypes.array, // 表格数据
  children: PropTypes.element, // 表格组件子，优先级没有columns高
  rowKey: PropTypes.oneOfType([ // 表格行 key 的取值，可以是字符串或一个函数
    PropTypes.string,
    PropTypes.func,
  ]),
  actionClick: PropTypes.func, // 处理表格操作函数
}

export default YaTable