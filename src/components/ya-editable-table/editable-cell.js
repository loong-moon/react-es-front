/****
 * 描述:组件-可编辑表格-可编辑单元格
 * 创建者:李克振
 * 日期:2021/01/29
****/

import React, { 
// useState,
// useEffect,
// useRef, 
// useContext,
} from 'react'
import PropTypes from 'prop-types'


const EditableCell = (props) => {
  const { width, align, children } = props
  const style = {}
  
  if (width) {
    style.width = width
  } else {
    style.flex = 1
  }

  if (align) {
    style.textAlign = align
  }

  return (
    <div 
      className="ya-editable-table-col"
      style={style}>
      {children}
    </div>
  )
}


EditableCell.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]), // 宽度
  align: PropTypes.string, // 单元格对齐
  children: PropTypes.node, // 用于每行表格的key字段名
}

export default EditableCell