/****
 * 描述:配置-图插件配置
 * 创建者:李克振
 * 日期:2021/05/13
****/
import G6 from '../ya-g6/g6'

const minimap = () => {
  return new G6.Minimap({
    className: 'ya-graph-minimap',
    size: [150, 100],
    type: 'keyShape',
  })
}


export default {
  minimap,
}