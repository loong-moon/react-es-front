/****
 * 描述:配置-标签使用系统
 * 创建者:李克振
 * 日期:2021/05/10
****/
import { 
  chartWidths, 
} from './config'

export default {
  
  dataset: {
    // 提供一份数据。
    source: [
      ['product', '标签组', '接口'],
      ['测试', 103, 12],
      ['系统1', 87, 7],
      ['系统5', 86, 5],
      ['系统2', 30, 4],
      ['系统3', 15, 3],
      ['系统4', 13, 2],
      ['系统6', 12, 2],
    ]
  },

  // 图表渲染区域的边距
  grid: {
    top: 10,
    left: 15,
    right: 0,
    bottom: 35,
    containLabel: true
  },


  // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
  series: [
    { 
      type: 'bar', 
      barGap: '10%',
      barCategoryGap: '30%',
      barMaxWidth: chartWidths[1],
    },
    { 
      type: 'line',
      yAxisIndex: 1,
    },
  ]
}