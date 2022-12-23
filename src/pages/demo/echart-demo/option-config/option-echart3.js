/****
 * 描述:配置-标签服务体系
 * 创建者:李克振
 * 日期:2021/05/10
****/

import { 
  textColor, 
  chartWidths, 
} from './config'

export default {
  
  dataset: {
    // 提供一份数据。
    source: [
      ['product', '标签组'],
      ['运营中心', 23],
      ['test2dyj', 31],
      ['其他部门框架', 50],
      ['营销标签体系', 67],
      ['营业部框架', 72.4],
      ['合规法务标签体系', 75],
      ['运营标签体系', 82],
      ['合规框架', 90],
    ]
  },

  // 图表渲染区域的边距
  grid: {
    top: 0,
    left: 0,
    right: 10,
    bottom: 0,
    containLabel: true
  },

  // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
  series: [
    { 
      name: '标签组',
      type: 'bar', 
      barMaxWidth: chartWidths[0],
      label: {
        show: true,
        position: 'right',
        color: textColor
      },
      encode: {
        // 将 标签组 列映射到 X 轴。
        x: '标签组',
        // 将 product 列映射到 Y 轴。
        y: 'product'
      } 
    },
  ]
}