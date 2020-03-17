/****
 * user模块的action创建函数
****/
import actionType from './actionType'
import { login } from '@/api/user'

export function updataUser (data) {
  return { type: actionType.UPDATE_USER, data }
}

export function fetchUser (data) {
  console.log(data, 'aaaaaaaaaaaaaaa')
  return dispatch => {
    return login().then(res => {
      console.log(res, 'resaaaaaaaaaaaaaaaaa')
      dispatch(updataUser(res.data))
    }).catch(error => {
      console.log(error.message, 'erroraaaaaaaaaaaaaaaaaaaaa')
    })
  }
}