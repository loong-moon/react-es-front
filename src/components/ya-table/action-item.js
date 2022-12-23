/****
 * 描述: 公共组件-表格操作
 * 创建者:李克振
 * 日期:2021/05/10
****/
import React from 'react'
import PropTypes from 'prop-types'
import { Upload, Button, Tooltip } from 'antd'

function ActionItem (props) {

  const {
    row,
    data, 
    onClick = () => {}
  } = props

  let {
    key, // 操作的关键字，是判断操作的主要依据，不可重复
    title, // 用来说明是什么操作
    icon, // 自定义的图标，可以是字符串，也可以是react元素， 一般使用默认图标
    uploadProps, // 仅当key为upload时传递
    isClick = true, // 当前图标是否禁用
    isHide = false, // 当前图标是否隐藏
  } = data

  let iconClass = ''
  let iconComponent = null
  switch (key) {
  case 'edit': // 编辑图标
    iconClass = 'iconfont icon-bianji'
    break
  case 'delete': // 删除图标
    iconClass = 'iconfont icon-shanchu'
    break
  case 'upload': // 上传图标
    iconClass = 'iconfont icon-shangchuan'
    break
  case 'download': // 下载图标
    iconClass = 'iconfont icon-xiazai'
    break
  case 'calculate': // 计算图标
    iconClass = 'iconfont icon-jisuan'
    break
  case 'view': // 查看或预览图标
    iconClass = 'iconfont icon-chakan'
    break
  case 'test': // 测试图标
    iconClass = 'iconfont icon-ceshi'
    break
  case 'play': // 执行图标
    iconClass = 'iconfont icon-zhixing'
    break
  case 'relate': // 关联资源图标
    iconClass = 'iconfont icon-guanlian'
    break
  default: // 自定义图标
    if (typeof icon === 'string') {
      iconClass = icon
    } else {
      iconComponent = icon
    }
    break
  }

  // 获取是否可以点击
  if (typeof isClick === 'function') {
    isClick = isClick(row)
  }

  // 获取是否要隐藏
  if (typeof isHide === 'function') {
    isHide = isHide(row)
  }

  // 判断渲染什么图标
  let iconEl = null
  if (iconClass) {
    iconEl = <Tooltip title={title}>
      <i className={iconClass}></i>
    </Tooltip>
  } else if (iconComponent) {
    iconEl = <Tooltip title={title}>
      {iconComponent}
    </Tooltip>
  }
  
  // 判断渲染什么状态
  let actionElement = null
  if (isHide || iconEl === null) { // 当要隐藏时
    actionElement = null
  } else if (isClick) { // 当可点击时
    actionElement = uploadProps ? 
      <Upload {...uploadProps} className='upload-btn'>
        <Button className="table-action" type="link" onClick={() => { onClick(key, row) }}>
          {iconEl}
        </Button>
      </Upload> : 
      <Button className="table-action" type="link" onClick={() => { onClick(key, row) }}>
        {iconEl}
      </Button>
  } else { // 当不可点击时
    actionElement = <Button className="table-action" type="link" disabled={true}>
      {iconEl}
    </Button>
  }

  return actionElement
}

// 参数类型验证
ActionItem.propTypes = {
  row: PropTypes.object, // 当前操作行数据
  data: PropTypes.object, // 图标显示数据
  onClick: PropTypes.func, // 处理表格操作函数
}

export default ActionItem