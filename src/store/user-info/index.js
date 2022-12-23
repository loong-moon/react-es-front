/****
 * 描述:公共状态-用户模块reducer
 * 创建者:李克振
 * 日期:2021/04/30
****/
import initState from './init-state'
import {
  UPDATE_USER_INFO
} from './action-type'

const reducer = (state = initState, action) => {
  switch (action.type) {
  
  // 更新用户
  case UPDATE_USER_INFO:
    return Object.assign({}, state, action.data)

  default:
    return state
  }
}

export default reducer