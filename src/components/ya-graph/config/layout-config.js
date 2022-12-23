/****
 * 描述:配置-图公共配置
 * 创建者:李克振
 * 日期:2021/05/13
****/

// g6力导布局
const gForce = {
  type: 'gForce', // g6力导布局
  // center: [0, 0], 布局的中心
  // linkDistance: 50, // 可选，边长
  // nodeStrength: 500, // 节点作用力，正数代表节点之间的斥力作用，负数代表节点之间的引力作用（注意与 'force' 相反）
  edgeStrength: 100, // 边的作用力（引力）大小
  preventOverlap: true, // 是否防止重叠
  // nodeSize: 100, // 节点大小（直径）
  nodeSpacing: 50, // preventOverlap为true时，节点间距最小值
  // minMovement: 1, // 当一次迭代的平均移动长度小于该值时停止迭代。数字越小，布局越收敛，所用时间将越长
  // damping: 0.9, // 阻尼系数，取值范围 [0, 1]
  // maxSpeed: 1000, // 一次迭代的最大移动长度
  // coulombDisScale: 0.005, // 库伦系数，斥力的一个系数
  // gravity: 50, // 中心力大小，指所有节点被吸引到 center 的力。数字越大，布局越紧凑
  maxIteration: 500, // 最大迭代次数
  // workerEnabled: true, // 是否启用 web-worker 以防布局计算时间过长阻塞页面交互
  // gpuEnabled: true, // 是否启用 GPU 并行计算

  // 每个节点质量的回调函数，使用方法与 nodeSpacing 类似
  // getMass: (d) => {
  //   if (d.id === '0') return 100
  //   return 1
  // },

  // 每个节点中心力的 x、y、强度的回调函数，若不指定，则没有额外中心力
  // getCenter: (d, degree) => {
  //   return [180, 180, 10] // x, y, strength
  // },

  // 每一次迭代的回调函数
  // getCenter: () => {},

  // 布局完成后的回调函数
  // onLayoutEnd: () => {},
}

// 经典力导布局，同d3
const force = {
  type: 'force', // 经典力导布局，同d3
  // center: [300, 200], // 布局的中心
  linkDistance (data) {
    let number = 400
    if (data.linkDistance) {
      number = data.linkDistance
    }
    return number
  }, // 可选，边长
  nodeStrength: -500, // 节点作用力，正数代表节点之间的引力作用，负数代表节点之间的斥力作用
  // edgeStrength: 0.1, // 边的作用力（引力）大小
  preventOverlap: true, // 是否防止重叠
  // collideStrength: 1, // 防止重叠的力强度
  // nodeSize: 100, // 节点大小（直径）
  nodeSpacing: 50, // preventOverlap为true时，节点间距最小值
  // alpha: 0.3, // 当前的迭代收敛阈值
  // alphaDecay: 0.028, // 迭代阈值的衰减率
  // alphaMin: 0.001, // 停止迭代的阈值
  // clustering: false, // 是否按照聚类信息布局
  // clusterNodeStrength: -1, // 聚类节点作用力。负数代表斥力
  // clusterEdgeStrength: 0.1, // 聚类边作用力
  // clusterNodeSize: 10, // 聚类节点大小 / 直径，直径越大，越分散
  // clusterFociStrength: 0.8, // 用于 foci 的力
  // forceSimulation: true, // 自定义 force 方法，若不指定，则使用 d3.js 的方法

  // 每一次迭代的回调函数
  // onTick: () => {},

  // 布局完成后的回调函数
  // onLayoutEnd: () => {},

  // workerEnabled: false, // 是否启用 web-worker 以防布局计算时间过长阻塞页面交互
}

export default {
  gForce,
  force,
}