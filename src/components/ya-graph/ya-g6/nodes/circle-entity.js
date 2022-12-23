/****
 * 描述:自定义注册节点-圆形实体
 * 创建者:李克振
 * 日期:2021/06/02
****/
import {
  // each, 
  deepMix,
} from '@antv/util'

import { ext } from '@antv/matrix-util'
const { transform } = ext

const entity = {
  name: 'circleEntity',
  config: {
    // 配置参数
    options: {
      style: {
        fill: '#49c2bb',
        // stroke: '#49c2bb',
      },
      labelCfg: {
        position: 'bottom',
        offset: 10,
        style: {
          fill: '#ffffff'
        }
      }
    },
    // 绘制函数
    draw (cfg, group) {
      // console.log(cfg, this, 'aaaaaaaaaaaaaaaaaaaaa 绘制图形')
      const { icon: defaultIcon = {}, labelCfg } = this.getOptions(cfg)
      const style = this.getShapeStyle(cfg)
      const icon = deepMix({}, defaultIcon, cfg.icon)
      const keyShape = group.addShape('circle', {
        attrs: style,
        className: `${this.type}-keyShape`,
        draggable: true,
      })

      const labelStyle = this.getLabelStyle(cfg, labelCfg, group)
      
      group.addShape('text', {
        attrs: {
          ...labelStyle,
        },
        className: `${this.type}-label`,
        name: `${this.type}-label`,
      })

      if (cfg.score) {
        const scoreGroup = group.addGroup({
          name: 'scoreGroup',
          // attrs: {
          //   fill: '#FF6C6C',
          // },
        })

        scoreGroup.addShape('text', {
          attrs: {
            textBaseline: 'top',
            x: 15,
            y: 0,
            fontSize: 12,
            text: cfg.score,
            fill: '#FF6C6C',
            // textAlign: 'center',
          },
          className: `${this.type}-score`,
          name: `${this.type}-score`,
        })

        scoreGroup.addShape('image', {
          attrs: {
            x: 0,
            y: 0,
            height: 12,
            width: 12,
            cursor: 'pointer',
            img: cfg.scoreIcon,
          },
          name: 'node-icon',
        })

        const matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1]
        const box = scoreGroup.getCanvasBBox()

        // 3*3 矩阵变换，用于二维渲染
        const newMatrix = transform(matrix, [
          ['t', -box.width / 2, 60], // translate
          // ['r', Math.PI / 4], // rotate
          // ['s', 2, 0.5], // scale
        ])

        // console.log(scoreGroup, box, 'aaaaaaaaaaaaaaaaaaaaaa scoreGroup')

        scoreGroup.setMatrix(newMatrix)
      }

      const { width, height, show, text } = icon
      if (show) {
        if (text) {
          group.addShape('text', {
            attrs: {
              x: 0,
              y: 0,
              fontSize: 12,
              fill: '#000',
              stroke: '#000',
              textBaseline: 'middle',
              textAlign: 'center',
              ...icon,
            },
            className: `${this.type}-icon`,
            name: `${this.type}-icon`,
            draggable: true,
          })
        } else {
          group.addShape('image', {
            attrs: {
              x: -width / 2,
              y: -height / 2,
              ...icon,
            },
            className: `${this.type}-icon`,
            name: `${this.type}-icon`,
            draggable: true,
          })
        }
      }

      this.drawLinkPoints(cfg, group)

      return keyShape
    }
  },
  extend: 'circle'
}

export default entity