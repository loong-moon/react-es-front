/****
 * user模块的reducer
****/
import initState from './initState'
import actionType from './actionType'

const reducer = (state = initState, action) => {
  switch (action.type) {
  
  // 更新用户
  case actionType.UPDATE_USER:
    return Object.assign({}, state, action.data)

  default:
    return state
  }
}

export default reducer