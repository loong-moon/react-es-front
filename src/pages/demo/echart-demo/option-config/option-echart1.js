/****
 * 描述:配置-折线图
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
      ['product', '已启用标签', '未启用标签'],
      ['客户适当性属性', 43.3, 85.8],
      ['客户基础性属性', 83.1, 73.4],
      ['客户业务属性', 86.4, 65.2],
      ['客户特征分析', 72.4, 53.9],
      ['客户交易情况', 72.4, 53.9],
      ['客户资产属性', 72.4, 53.9],
      ['客户合规属性标签组', 72.4, 53.9],
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
      type: 'bar',
      barMaxWidth: chartWidths[1],
    },
  ]
}