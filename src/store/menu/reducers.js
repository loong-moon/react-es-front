/****
 * 描述:公共状态-菜单reducer封装
 * 创建者:李克振
 * 日期:2021/04/30
****/
import actionType from './action-type'
// import { getMenu } from '@/api/user'
import { menuDataMock } from './menu-data'

// 格式化菜单
function formatMenu (data) {
  const menuData = []
  const paths = []

  for (const item of data) {
    const { resId, resUrl, resName, resIcon, children } = item
    paths.push(resUrl)

    const submenu = children.map(({ resId, resUrl, resName, resIcon }) => {
      paths.push(resUrl)

      return { 
        resId,
        resUrl,
        resName,
        resIcon,
      }
    })

    const menu = { 
      resId,
      resUrl,
      resName,
      resIcon, 
      submenu, 
    }
    menuData.push(menu)
    
  }

  const permissionPaths = paths.filter(path => path !== null)
  // console.log(data, menuData, permissionPaths, 'aaaaaaaaaaaaaaaaaaaaaaa 格式化菜单')

  return {
    menuData,
    permissionPaths,
  }
  
}

const reducers = {
  [actionType.GET_MENU_LIST]: (state, action) => {
    const { menuData, permissionPaths } = formatMenu(menuDataMock)

    return Object.assign({}, state, {
      menuData,
      permissionPaths,
    })
  }
}

export default reducers