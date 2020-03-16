/****
 * 用户相关接口
****/
import axios from '@axios'

/**
 * 登录系统
 * @param {object} data<必须>  // 请求传递的数据
 * @param {string} data.username<必须>  // 用户名
 * @param {string} data.password<必须> // 密码
 * @param {object} config<可选>  // 请求配置
 * @returns {promise} // 返回
 **/
export const login = function (data) {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}