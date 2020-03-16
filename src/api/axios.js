/****
 * 添加axios的全局配置，创建请求或新的实例可以引用该文件
****/

import axios from 'axios'

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = '/api'

const CancelSourceMap = new Map()
// 全局请求拦截器
axios.interceptors.request.use(config => {
  // 发起请求时，取消掉当前正在进行的相同请求
  const source = axios.CancelToken.source()
  config.cancelToken = source.token
  
  if (CancelSourceMap.has(config.url)) {
    CancelSourceMap.get(config.url).cancel('取消重复请求')
    CancelSourceMap.set(config.url, source)
  } else {
    CancelSourceMap.set(config.url, source)
  }

  return config
}, error => {
  return Promise.reject(error)
})


// 全局响应拦截器
axios.interceptors.response.use(
  function (res) {
    // 在这里对返回的数据进行处理
    if (res.data.statusCode === 200) {
      return res.data
    } else {
      return Promise.reject(res.data)
    }
  },
  function (err) {
    // 处理请求错误
    if (err && err.response) {
      switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break

      case 401:
        err.message = '未授权，请登录'
        break

      case 403:
        err.message = '拒绝访问'
        break

      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`
        break

      case 408:
        err.message = '请求超时'
        break

      case 500:
        err.message = '服务器内部错误'
        break

      case 501:
        err.message = '服务未实现'
        break

      case 502:
        err.message = '网关错误'
        break

      case 503:
        err.message = '服务不可用'
        break

      case 504:
        err.message = '网关超时'
        break

      case 505:
        err.message = 'HTTP版本不受支持'
        break

      default:
      }
    }

    return Promise.reject(err)
  }
)

export default axios
