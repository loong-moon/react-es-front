/****
 * 描述:配置-关系图表
 * 创建者:李克振
 * 日期:2021/05/10
****/

export default {

  // 文字提示
  tooltip: {},
  
  // 数据更新动画的时长。
  animationDurationUpdate: 500,

  // 数据更新动画的缓动效果。
  animationEasingUpdate: 'quinticInOut',

  series: [
    {
      type: 'graph', // 系列类型
      layout: 'force', // 图的布局-力引导布局
      force: { // 力引导布局配置
        repulsion: 1000, // 节点之间的斥力因子
      },
      symbolSize: 20, // 关系图节点的大小
      roam: true, // 是否开启鼠标缩放和平移漫游
      // itemStyle: {
      //   borderWidth: 1,
      // },
      label: { // 图形上的文本标签
        show: true, // 是否显示标签
        fontSize: 8,
        formatter (item) {
          return item.name.charAt(0) + '...'
        }
      },
      edgeSymbol: ['none', 'arrow'], // 边两端的标记类型
      edgeSymbolSize: [0, 6], // 边两端的标记大小
      edgeLabel: { // 边的标签
        show: true,
        // fontSize: 12,
        verticalAlign: 'middle',
        padding: [10, 6, 0, 6],
        backgroundColor: 'white',
        formatter (item) {
          return 'ceshi'
        }
      },
      data: [
        {
          category: 0,
          name: '节点1',
          x: null,
          y: null,
          draggable: true,
        }, 
        {
          category: 1,
          name: '节点2',
          x: null,
          y: null,
          draggable: true,
        }, 
        {
          category: 0,
          name: '节点3',
          x: null,
          y: null,
          draggable: true,
        }, 
        {
          category: 1,
          name: '节点4',
          x: null,
          y: null,
          draggable: true,
        }
      ],
      links: [ // 节点间的关系数据
        // {
        //   source: 0, // 源节点
        //   target: 1, // 目标节点
        //   lineStyle: { // 关系边的线条样式
        //     curveness: 0.2 // 边的曲度，支持从 0 到 1 的值，值越大曲度越大
        //   }
        // }, 
        // {
        //   source: '节点2',
        //   target: '节点1',
        //   lineStyle: { // 关系边的线条样式
        //     curveness: 0.2 // 边的曲度，支持从 0 到 1 的值，值越大曲度越大
        //   }
        // }, 
        {
          source: '节点1',
          target: '节点2',
        }, 
        {
          source: '节点1',
          target: '节点3'
        }, 
        {
          source: '节点2',
          target: '节点3'
        }, 
        {
          source: '节点2',
          target: '节点4'
        }, 
        {
          source: '节点1',
          target: '节点4'
        }
      ],

      categories: [
        {
          name: '类目0',
        },
        {
          name: '类目1',
        }
      ],
      lineStyle: { // 关系边的公用线条样式
        opacity: 0.9,
        width: 1,
        curveness: 0, // 边的曲度，支持从 0 到 1 的值，值越大曲度越大
      },
    }
  ]
}