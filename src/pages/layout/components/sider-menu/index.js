/****
 * 描述:组件-布局页面-侧边菜单
 * 创建者:李克振
 * 日期:2021/04/30
****/
// import React from 'react'
import View from './index.comp'
import { connect } from 'react-redux'
import actionCreator from '@/store/menu/action-creator'


// 将store中属性注入到组件
const mapStateToProps = (state, ownProps) => {
  return {
    menuData: state.menu.menuData,
  }
}


const Comp = connect(mapStateToProps, actionCreator)(View)

export default Comp
