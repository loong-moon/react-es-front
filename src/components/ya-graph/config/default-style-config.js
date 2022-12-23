/****
 * 描述:配置-初始化样式配置
 * 创建者:李克振
 * 日期:2021/06/11
****/
import colorConfig from './color-config'

export const nodeStateSelected = {
  stroke: colorConfig.selectedColor,
  lineWidth: 2,
  shadowBlur: 0,
}

export const edgeStateSelected = {
  stroke: colorConfig.selectedColor,
  lineWidth: 2,
  shadowBlur: 0,
  endArrow: {
    path: 'M 0,0 L 10,5 Q 7,0,10,-5 Z',
    // path: 'M 0,0 L 8,4 L 8,-4 Z',
    fill: colorConfig.selectedColor,
    d: -25,
  },
}

