/****
 * 描述: 接口-用户模块
 * 创建者:李克振
 * 日期:2021/05/10
****/
import http from '@http'


/**
 * 登录系统
 * @param {object} data<必须>  // 请求传递的数据
 * @param {string} data.username<必须>  // 用户名
 * @param {string} data.password<必须> // 密码
 * @param {object} config<可选>  // 请求配置
 * @returns {promise} // 返回
 **/
export const login = (data) => {
  return http({
    method: 'post',
    url: '/user/login',
    data,
  })
}

/**
 * 获取菜单
 * @param {object} data<必须>  // 请求传递的数据
 * @param {string} data.userId<必须>  // 用户id
 * @returns {promise} // 返回
 **/
export const getMenu = (data) => {
  return http({
    method: 'post',
    url: '/user/menu',
    data
  })
}