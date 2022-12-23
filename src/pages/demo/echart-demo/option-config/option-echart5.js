/****
 * 描述:配置-数据接口
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
      ['product', '接口数量'],
      ['开通科创版业务用户-0515', 30],
      ['tiest2', 20],
      ['test10', 19],
      ['营销接口', 14],
      ['test1111', 13],
      ['vvv', 10],
      ['11111', 8],
      ['投资测试', 7],
      ['客户投资', 3],
      ['eee', 1],
    ]
  },

  
  // 图表渲染区域的边距
  grid: {
    top: 10,
    left: 25,
    right: 0,
    bottom: 0,
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
  ]
}