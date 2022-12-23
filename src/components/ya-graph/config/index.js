/****
 * 描述:配置-图公共配置
 * 创建者:李克振
 * 日期:2021/05/13
****/
import layoutConfig from './layout-config'
import pluginConfig from './plugin-config'

import {
  nodeStateSelected,
  edgeStateSelected
} from './default-style-config'

import colorConfig from './color-config'

export {
  layoutConfig,
  pluginConfig,
}

// 图默认配置
export const initOptions = {
  animate: true, // 是否开启全局动画

  // 画布的交互模式
  modes: {
    // 默认交互模式
    // default: ['drag-canvas', 'zoom-canvas', 'drag-node', 'click-select'],
    default: ['drag-canvas', 'click-select'],
    // 框选交互模式
    // brushSelect: [
    //   {
    //     type: 'brush-select',
    //     trigger: 'drag',
    //   },
    //   'drag-node',
    //   'zoom-canvas',
    //   'click-select',
    // ],
  },
  
  // 默认节点的配置
  defaultNode: {
    size: 50,
    type: 'circleEntity',
    // style: {
    //   fill: '#49c2bb',
    //   stroke: '',
    //   lineWidth: 0,
    // },
    labelCfg: {
      // position: 'bottom',
      // offset: 10,
      style: {
        fontSize: 18,
        // fill: '#ffffff',
      }
    },
  },

  // 默认边的配置
  defaultEdge: {
    // size: 1,
    color: colorConfig.defaultEdgeColor,
    style: {
      endArrow: {
        path: 'M 0,0 L 10,5 Q 7,0,10,-5 Z',
        // path: 'M 0,0 L 8,4 L 8,-4 Z',
        fill: colorConfig.defaultEdgeColor,
        d: -25,
      },
    },
    labelCfg: {
      autoRotate: true,
      style: {
        fill: '#000',
        fontSize: 14,
        background: {
          fill: '#b4ffd5',
          padding: [5, 10, 0, 10],
          radius: 10,
        },
      }
    }
  },

  linkCenter: true,

  // 布局配置项
  layout: layoutConfig.force,

  // 节点不同状态下的样式集合
  nodeStateStyles: {
    // 选中样式
    selected: {
      ...nodeStateSelected
    },
  },

  // 边不同状态下的样式集合
  edgeStateStyles: {

    // 选中样式
    selected: {
      ...edgeStateSelected
    },
  },
}