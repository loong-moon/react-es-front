/****
 * 描述:增强g6-注册新的行为等
 * 创建者:李克振
 * 日期:2021/06/02
****/
import G6 from '@antv/g6'

import behaviors from './behaviors'
import nodes from './nodes'
import edges from './edges'

if (behaviors) {
  for (const [key, config] of Object.entries(behaviors)) {
    G6.registerBehavior(key, config)
  }
}

if (nodes) {
  for (const node of nodes) {
    G6.registerNode(node.name, node.config, node.extend)
  }
}

if (nodes) {
  for (const edge of edges) {
    G6.registerEdge(edge.name, edge.config, edge.extend)
  }
}


export default G6