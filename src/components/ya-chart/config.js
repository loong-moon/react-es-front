/****
 * 描述:配置-图表公共配置
 * 创建者:李克振
 * 日期:2021/05/10
****/

// 图表颜色
export const chartColors = ['#2F85FF', '#09B9AB']

// 图表标签文字颜色
export const textColor = '#748294'

// 图表宽度
export const chartWidths = [18, 28]

// 分割线
export const splitLineStyle = {
  lineStyle: {
    color: '#e7e9ed'
  }
}

// 轴线
export const axisLineStyle = {
  lineStyle: {
    color: 'rgba(0, 0, 0, 0.45)',
  }
}

// 当x轴为数字轴时
export const xAxisValue = {
  axisLine: { // 轴线
    show: false
  },
  axisTick: axisLineStyle, // 刻度
  splitLine: splitLineStyle, // 分割线
  axisLabel: { // 标签文字
    color: textColor,
    margin: 12,
  }
}

// 当x轴为类目轴时
export const xAxisCategory = { 
  type: 'category', // 类型
  axisLine: axisLineStyle, // 轴线
  axisTick: { // 刻度
    show: false
  },
  axisLabel: { // 标签文字
    color: textColor,
    interval: 0,
    rotate: 30,
    margin: 8,
    verticalAlign: 'top',
    formatter: function (value) {
      return value.length > 7 ? value.slice(0, 6) + '...' : value
    }
  }
}

// 当x轴为line chart时
export const xAxisLine = { 
  type: 'category', // 类型
  axisLine: axisLineStyle, // 轴线
  axisTick: { // 刻度
    show: false
  },
  boundaryGap: false,
  axisLabel: { // 标签文字
    color: textColor,
    margin: 8,
  }
}

// y轴为数值轴时-无刻度、无轴线
export const yAxisValue = {
  axisLine: { // 轴线
    show: false
  },
  axisTick: { // 刻度
    show: false
  },
  splitLine: splitLineStyle, // 分割线
  axisLabel: { // 标签文字
    color: textColor
  }
}

// 当y轴为类型轴时
export const yAxisCategory = { 
  type: 'category', // 类型
  axisLine: { // 轴线
    show: false
  },
  axisTick: { // 刻度
    show: false
  },
  axisLabel: { // 标签文字
    color: textColor,
    interval: 0,
    formatter: function (value) {
      return value.length > 7 ? value.slice(0, 6) + '...' : value
    }
  }
}

// 当为极坐标系时
export const polarConf = {
  // 极坐标系的角度轴
  angleAxis: {
    type: 'category',
    axisLine: { // 轴线
      show: false
    },
    axisLabel: { // 标签文字
      color: textColor
    },
    axisTick: axisLineStyle, // 刻度
  },
  
  // 极坐标系的径向轴
  radiusAxis: {
    axisLine: splitLineStyle, // 轴线
    axisTick: axisLineStyle, // 刻度
    splitLine: splitLineStyle, // 分割线
    axisLabel: { // 标签文字
      color: textColor
    }
  },
}

// 提示框配置
export const tooltipConf = {
  trigger: 'axis',
  axisPointer: {
    type: 'shadow'
  }
}

// 图例组件位置
export const legendConf = {
  right: 0,
  bottom: 0,
  textStyle: {
    color: textColor,
  }
}