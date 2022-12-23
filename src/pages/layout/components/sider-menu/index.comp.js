/****
 * 描述:组件-布局页面-侧边菜单组件
 * 创建者:李克振
 * 日期:2021/04/30
****/
import React, { 
  useEffect, 
  // useState 
} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import { YaIcon } from '@/components'
import pathNameConfig from './pathname-config'

import './index.scss'
const { SubMenu } = Menu


function SiderMenu (props) {
  const { menuData, getMenuList } = props
  const location = useLocation()
  const navigate = useNavigate()
  
  // 默认高亮菜单
  let selectedKeys = [location.pathname] 
  if (pathNameConfig[location.pathname]) {
    selectedKeys = [pathNameConfig[location.pathname]]
  }

  // 初始化菜单
  useEffect(() => {
    if (menuData.length === 0) {
      getMenuList()
    }
  }, [menuData, getMenuList])

  // 渲染菜单
  const renderMenuItem = (item) => {
    const { resIcon, resName, resUrl } = item
    
    const obj = {
      key: resUrl,
    }
    if (resIcon) {
      obj.icon = <YaIcon type={resIcon} />
    }
    
    return (
      <Menu.Item {...obj}>
        { resName }
      </Menu.Item>
    )
  }

  // 处理菜单点击事件
  const handleClick = (data) => {
    navigate(data.key)
  }

  return (
    <div className="sider-menu-wrapper">
      <Menu
        className="sider-menu"
        defaultSelectedKeys={selectedKeys}
        mode="inline"
        theme="dark"
        onClick={handleClick}
      >
        {
          menuData.map(item => {
            const { submenu, resId, resIcon, resName } = item
            let el = null
            
            if (submenu.length === 0) {
              el = renderMenuItem(item)
            } else {
              el = <SubMenu key={resId} icon={<YaIcon type={resIcon} />} title={resName}>
                { submenu.map(subItem => {
                  const obj = {
                    ...subItem,
                    resIcon: null,
                  }
                  return renderMenuItem(obj)
                }) }
              </SubMenu>
            }

            return el
          })
        }

      </Menu>

    </div>
  )
}

// 参数类型验证
SiderMenu.propTypes = {
  collapsed: PropTypes.bool, // 是否收缩
  menuData: PropTypes.array, // 菜单数据
  getMenuList: PropTypes.func, // 获取菜单数据
}

export default SiderMenu