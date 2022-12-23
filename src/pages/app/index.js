/****
 * 描述: 根组件入口
 * 创建者:李克振
 * 日期:2021/05/10
****/

// import React from 'react'
import View from './index.comp'
import { connect } from 'react-redux'
import actionCreator from '@/store/menu/action-creator'


// 将store中属性注入到组件
const mapStateToProps = (state, ownProps) => {
  return {
    permissionPaths: state.menu.permissionPaths
  }
}

const Comp = connect(mapStateToProps, actionCreator)(View)

export default Comp
