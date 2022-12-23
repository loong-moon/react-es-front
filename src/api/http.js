import axios from 'axios'
// import { Loading } from 'element-ui'
import LoadingService from '@/components/loading/loading-sevice'

// axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json'

const baseURL = '/api'
const timeout = 10000

// 通用实例
const commonInstance = axios.create({
  baseURL,
  timeout,
})

// 存储正在请求的url
const httpSet = new Set()

// 添加请求拦截器
commonInstance.interceptors.request.use(config => {
  // 处理重复请求
  const source = axios.CancelToken.source()
  config.cancelToken = source.token
  
  const requestId = `${config.method}:${config.url}`
  if (httpSet.has(requestId)) {
    // 发起请求时，如果已有相同的请求，则取消当前请求
    source.cancel('取消重复请求')
  } else {
    httpSet.add(requestId)
  }
  // console.log(httpSet, config, 'aaaaaaaaaaaaaaa 处理重复请求')

  return config
}, error => {
  return Promise.reject(error)
})

// 添加响应拦截器
commonInstance.interceptors.response.use(
  function (res) {
    // 删除请求缓存
    const requestId = `${res.config.method}:${res.config.url}`
    if (httpSet.has(requestId)) {
      httpSet.delete(requestId)
    }

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
      // 删除请求缓存
      const resConfig = err.response.config
      const requestId = `${resConfig.method}:${resConfig.url}`
      if (httpSet.has(requestId)) {
        httpSet.delete(requestId)
      }
    
      switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break

      case 401:
        err.message = '未授权'
        // location.href = ''
        break

      case 403:
        err.message = '拒绝访问'
        break

      case 404:
        err.message = `请求地址出错: ${resConfig.url}`
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

    return Promise.reject(err.response || err)
  }
)

/**
 * 通用请求
 * @param {object} data<必须>  // api传递的数据, 类似axios参数
 * @param {boolean} data.hasLoading<必须>  // 是否添加全局加载动画，如果只是局部更新，加载动画应放在局部
 * @returns {promise} 
 **/
const http = function (data) {
  const { hasLoading = false, ...other } = data
  let loadingInstance = null
  
  if (hasLoading) {
    loadingInstance = LoadingService.init({
      text: '加载中...'
    })
  }

  const config = {
    ...other,
  }

  return commonInstance(config).then(res => {
    loadingInstance && loadingInstance.close()
    return res
  }).catch(err => {
    loadingInstance && loadingInstance.close()
    return err
  })
}



export default http
