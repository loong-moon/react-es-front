/****
 * 描述:自定义注册边-自定义曲线
 * 创建者:李克振
 * 日期:2021/07/05
****/
const line = {
  name: 'customQuadratic',
  config: {
    getPathPoints (cfg) {
      const startBBox = cfg.sourceNode.getKeyShape().getCanvasBBox()
      const endBBox = cfg.targetNode.getKeyShape().getCanvasBBox()
      console.log(startBBox, endBBox, cfg, 'aaaaaaaaaaaaaaaaaaaaaa getPathPoints')
      return cfg
    },
    // getPath (points) {
    //   const path = []
    //   path.push(['M', points[0].x, points[0].y])
    //   path.push(['Q', points[1].x, points[1].y, points[2].x, points[2].y])
    //   // console.log(points, 'aaaaaaaaaaaaaaaaaaaaaa customQuadratic')
    //   return path
    // },
  },
  extend: 'quadratic'
}

export default line