/****
 * 工具类函数出口
****/

/**
 * 深拷贝
 * @param {object} obj<必须>  // 被拷贝的对象
 * @returns {object} clone // 返回的对象
 **/
export const deepCopy = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj
  const clone = Array.isArray(obj) ? [] : {}
  for (const i in obj) {
    if (typeof obj[i] === 'object') {
      deepCopy(obj[i])
    } else {
      clone[i] = obj[i]
    }
  }
  return clone
}

/**
 * 格式化日期
 * @param {object} date<必须>  // 日期，可以是各种有效的日期，包括字符串、日期对象、时间戳
 * @param {string} fmt<可选>  // 需要的格式
 * @returns {string} fmt // 返回格式化后的日期
 **/
export const formatDate = (date, fmt) => {
  if (!date) {
    return date
  } else {

    if (!fmt) {
      fmt = 'YYYY-MM-DD hh:mm:ss'
    }

    const isString = typeof date === 'string'
    const isFloatNUmber = /^[0-9]+.?[0-9]*/.test(date)
    const isHasSeparator = /[-:/]/.test(date)
    const time = isString && isFloatNUmber && !isHasSeparator ? new Date(parseFloat(date)) : new Date(date)

    const o = {
      'M+': time.getMonth() + 1, // 月份
      'D+': time.getDate(), // 日
      'h+': time.getHours(), // 小时
      'm+': time.getMinutes(), // 分
      's+': time.getSeconds(), // 秒
      'q+': Math.floor((time.getMonth() + 3) / 3), // 季度
      S: time.getMilliseconds() // 毫秒
    }
    if (/(Y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
      }
    }
    return fmt
  }
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
export const GetQuery = (name, url) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const searchStr = url || window.location.search
  const r = searchStr.substr(1).match(reg) // 获取url中"?"符后的字符串并正则匹配

  let val = null
  if (r !== null) {
    val = encodeURIComponent(r[2])
  }
  
  return val
}