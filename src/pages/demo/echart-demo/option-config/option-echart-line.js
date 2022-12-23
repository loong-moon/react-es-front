/****
 * 描述:配置-折线图
 * 创建者:李克振
 * 日期:2021/05/10
****/

export default {
  
  dataset: {
    // 提供一份数据。
    source: [
      ['product', '接口'],
      ['测试', 12],
      ['系统1', 7],
      ['系统5', 5],
      ['系统2', 4],
      ['系统3', 3],
      ['系统4', 2],
      ['系统6', 2],
    ]
  },

  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line'
    }
  },

  // 图表渲染区域的边距
  grid: {
    top: 10,
    left: 15,
    right: 15,
    bottom: 0,
    containLabel: true
  },


  // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
  series: [
    { 
      type: 'line',
    },
  ]
}