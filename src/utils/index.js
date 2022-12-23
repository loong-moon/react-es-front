/****
 * 描述:公共函数出口
 * 创建者:李克振
 * 日期:2021/02/22
****/

/**
 * 添加cookie
 * @param {string} name<必须>  // cookie名
 * @param {string} value<必须>  // cookie值
 * @param {number} expiresHours<必须>  // 过期时间
 **/
export const addCookie = (name, value, expiresHours) => {
  let cookieString = name + '=' + escape(value) + '; path=/'
  // 判断是否设置过期时间
  if (expiresHours > 0) {
    const date = new Date()
    date.setTime(date.getTime() + expiresHours * 3600 * 1000)
    cookieString = cookieString + '; expires=' + date.toUTCString()
  }
  document.cookie = cookieString
}

/**
 * 获取cookie
 * @param {string} name<必须>  // cookie名
 **/
export const getCookie = name => {
  const strCookie = document.cookie
  const arrCookie = strCookie.split(';')
  for (let i = 0; i < arrCookie.length; i++) {
    const arr = arrCookie[i].split('=')
    if (arr[0] === name) return unescape(arr[1])
  }
  return ''
}

/**
 * 删除cookie
 * @param {string} name<必须>  // cookie名
 **/
export const deleteCookie = name => {
  const date = new Date()
  date.setTime(date.getTime() - 10000)
  document.cookie = name + '=; path=/; expires=' + date.toUTCString()
}

/**
 * 事件绑定方法
 * @param {object} element<必须>  // dom对象
 * @param {string} type<必须>  // 事件类型
 * @param {function} handler<必须>  // 触发事件后的回调函数
 **/
export const bindEvent = (element, type, func) => {
  if (element.addEventListener) {
    element.addEventListener(type, func, false)
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, func)
  } else {
    element['on' + type] = func
  }
}

/**
 * 移除事件绑定
 * @param {object} element<必须>  // dom对象
 * @param {string} type<必须>  // 事件类型
 * @param {function} handler<必须>  // 触发事件后的回调函数
 **/
export const removeEvent = (element, type, handler) => {
  if (element.removeEventListener) {
    element.removeEventListener(type, handler, false)
  } else if (element.detachEvent) {
    element.detachEvent('on' + type, handler)
  } else {
    element['on' + type] = null
  }
}

/**
 * 深拷贝
 * @param {object} obj<必须>  // 被拷贝的对象
 * @returns {object} clone // 返回的对象
 **/
export const deepCopy = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj
  const clone = Array.isArray(obj) ? [] : {}
  for (const i in obj) {
    if (typeof obj[i] === 'object' || obj[i] !== null) {
      clone[i] = deepCopy(obj[i])
    } else {
      clone[i] = obj[i]
    }
  }
  return clone
}

/**
 * 格式化金额
 * @param {number} number<必须>  // 需要格式化金额
 * @returns {string} fmtNumber // 返回格式化后的金额
 **/
export const formatMoney = (number) => {
  if (!number) return 0
  try {
    return parseFloat(number).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  } catch (error) {
    return number
  }
}

/**
 * 生成唯一标识
 * @returns {string} guid // 生成的不重复的id
 **/
export const guid = () => {
  return Math.random()
    .toString()
    .substr(3, 4) + Date.now().toString(36)
  
}

/**
 * 获取url的参数
 * @param {string} name<必须>  // 要获取的参数名
 * @param {string} url<可选>  // 获取参数名的URL
 * @returns {string} val // 返回获取的参数值
 **/
export const getQuery = (name, url) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const searchStr = url || window.location.search
  const r = searchStr.substr(1).match(reg) // 获取url中"?"符后的字符串并正则匹配

  let val = null
  if (r !== null) {
    val = decodeURIComponent(r[2])
  }
  
  return val
}