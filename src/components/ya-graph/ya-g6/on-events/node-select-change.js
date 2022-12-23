/****
 * 描述:监听事件绑定函数-节点选中改变监听
 * 创建者:李克振
 * 日期:2021/06/02
****/
import { each } from '@antv/util'

const nodeSelectChange = (event, graph) => {
  const { selectedItems, select } = event

  // 将所有已选中的边取消选中状态
  const edges = graph.findAllByState('edge', 'selected')
  each(edges, (edge) => {
    graph.setItemState(edge, 'selected', false)
  })

  // 当为选中状态时，将关联的边也设置为选中状态
  if (select) {
    let edges = []

    for (const node of selectedItems.nodes) {
      edges = edges.concat(node.getEdges())
    }

    each(edges, (edge) => {
      graph.setItemState(edge, 'selected', true)
    })
  } 
}

export default nodeSelectChange