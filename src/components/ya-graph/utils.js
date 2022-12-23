/****
 * 描述:方法-图处理方法
 * 创建者:李克振
 * 日期:2021/06/11
****/

// 刷新拖拽节点位置
function refreshDragedNodePosition (e) {
  const model = e.item.get('model')
  model.fx = e.x
  model.fy = e.y
}

// 绑定drag事件
export const listenDagEvent = (graph) => {
  if (graph) {
    graph.on('node:dragstart', function (e) {
      // const zoom = graph.getZoom()
      graph.layout()
      refreshDragedNodePosition(e)
    })
    graph.on('node:drag', function (e) {
      // const zoom = graph.getZoom()
      refreshDragedNodePosition(e)
    })
    graph.on('node:dragend', function (e) {
      e.item.get('model').fx = null
      e.item.get('model').fy = null
    })
  }
}