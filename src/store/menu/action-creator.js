/****
 * 描述:公共状态-菜单actions
 * 创建者:李克振
 * 日期:2021/04/30
****/
import { createActions } from '../common'
import actionType from './action-type'

export const menuActionsConf = {
  getMenuList: {
    actionType: actionType.GET_MENU_LIST,
  }
}

const actionCreator = createActions(menuActionsConf)
export default actionCreator