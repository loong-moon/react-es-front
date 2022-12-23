/****
 * 描述:页面-登录页面出口
 * 创建者:李克振
 * 日期:2021/04/30
****/
// import React from 'react'
import View from './index.comp'
import { connect } from 'react-redux'
import actionCreator from '@/store/user-info/action-creator'


// 将store中属性注入到组件
const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.userInfo
  }
}

const Comp = connect(mapStateToProps, actionCreator)(View)

export default Comp
