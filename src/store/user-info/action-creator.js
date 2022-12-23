/****
 * 描述:公共状态-用户模块actions配置
 * 创建者:李克振
 * 日期:2021/04/30
****/
import { createActions } from '../common'
import {
  UPDATE_USER_INFO
} from './action-type'

export const userInfoActionsConf = {
  updateUserInfo: {
    actionType: UPDATE_USER_INFO,
  }
}

const actionCreator = createActions(userInfoActionsConf)
export default actionCreator