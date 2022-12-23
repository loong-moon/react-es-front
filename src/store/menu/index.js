/****
 * 描述:公共状态-菜单reducer
 * 创建者:李克振
 * 日期:2021/04/30
****/
import initState from './init-state'
import actionType from './action-type'
import reducers from './reducers'

const reducer = (state = initState, action) => {
  switch (action.type) {
  
  // 更新主菜单
  case actionType.GET_MENU_LIST:
    return reducers[actionType.GET_MENU_LIST](state, action)

  default:
    return state
  }
}

export default reducer