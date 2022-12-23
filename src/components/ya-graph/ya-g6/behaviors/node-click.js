/****
 * 描述:自定义注册行为-定义节点点击行为
 * 创建者:李克振
 * 日期:2021/05/12
****/
import { each } from '@antv/util'

const DEFAULT_TRIGGER = 'shift'
const ALLOW_EVENTS = ['shift', 'ctrl', 'alt', 'control']

export default {
  getDefaultCfg () {
    return {
      multiple: true, // 是否支持多选
      trigger: DEFAULT_TRIGGER,
      selectedState: 'selected',
      relateEdge: true, // 是否支持有关联的边
    }
  },
  getEvents () {
    const self = this
    // 检测输入是否合法
    if (!(ALLOW_EVENTS.indexOf(self.trigger.toLowerCase()) > -1)) {
      self.trigger = DEFAULT_TRIGGER
      // eslint-disable-next-line no-console
      console.warn(
        "Behavior brush-select 的 trigger 参数不合法，请输入 'drag'、'shift'、'ctrl' 或 'alt'"
      )
    }
    if (!self.multiple) {
      return {
        'node:click': 'onClick',
        'combo:click': 'onClick',
        'canvas:click': 'onCanvasClick',
      }
    }
    return {
      'node:click': 'onClick',
      'combo:click': 'onClick',
      'canvas:click': 'onCanvasClick',
      keyup: 'onKeyUp',
      keydown: 'onKeyDown',
    }
  },
  onClick (evt) {
    const self = this
    const { item } = evt
    if (!item || item.destroyed) {
      return
    }

    const type = item.getType()
    const { graph, keydown, multiple, shouldUpdate, shouldBegin, relateEdge } = self
    if (!shouldBegin.call(self, evt)) {
      return
    }

    console.log(self, evt, 'aaaaaaaaaaaaaaaaaaaa 当点击节点时')

    // 未按键时 || 不允许多选节点时
    if (!keydown || !multiple) {
      const selected = graph.findAllByState(type, self.selectedState)
      each(selected, (combo) => {
        if (combo !== item) {
          graph.setItemState(combo, self.selectedState, false)
        }
      })

      // 支持相关边时
      if (relateEdge) {
        const edges = graph.findAllByState('edge', self.selectedState)
        each(edges, (edge) => {
          graph.setItemState(edge, self.selectedState, false)
        })
      }
    }

    // 取消选中的节点
    let selected
    if (item.hasState(self.selectedState)) {
      if (shouldUpdate.call(self, evt)) {
        graph.setItemState(item, self.selectedState, false)
      }

      selected = false

    } else {
      if (shouldUpdate.call(self, evt)) {
        graph.setItemState(item, self.selectedState, true)

        // 支持相关边时
        if (relateEdge) {
          const edges = item.getEdges()
          each(edges, (edge) => {
            graph.setItemState(edge, self.selectedState, true)
          })
        }

      }

      selected = true
    }


    const selectedNodes = graph.findAllByState('node', self.selectedState)
    const selectedEdges = graph.findAllByState('edge', self.selectedState)
    const selectedCombos = graph.findAllByState('combo', self.selectedState)

    graph.emit('nodeselectchange', {
      target: item,
      selectedItems: {
        nodes: selectedNodes,
        edges: selectedEdges,
        combos: selectedCombos,
      },
      select: selected,
    })
    
  },
  onCanvasClick () {
    const { graph } = this
    const selected = graph.findAllByState('node', this.selectedState)
    each(selected, (node) => {
      graph.setItemState(node, this.selectedState, false)
    })

    const selectedEdges = graph.findAllByState('edge', this.selectedState)
    each(selectedEdges, (edge) => {
      graph.setItemState(edge, this.selectedState, false)
    })

    const selectedCombos = graph.findAllByState('combo', this.selectedState)
    each(selectedCombos, (combo) => {
      graph.setItemState(combo, this.selectedState, false)
    })
    graph.emit('nodeselectchange', {
      selectedItems: { nodes: [], edges: [], combos: [] },
      select: false,
    })
  },
  onKeyDown (e) {
    const self = this
    const code = e.key
    if (!code) {
      return
    }
    if (code.toLowerCase() === this.trigger.toLowerCase() || code.toLowerCase() === 'control') {
      self.keydown = true
    } else {
      self.keydown = false
    }
  },
  onKeyUp () {
    const self = this
    self.keydown = false
  },
}
