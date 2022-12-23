/****
 * 描述:配置-用户访问部门TOP10
 * 创建者:李克振
 * 日期:2021/05/10
****/

export default {

  dataset: {
    // 提供一份数据。
    source: [
      ['product', '用户访问'],
      ['合规法务部', 90],
      ['哈尔滨西大', 82],
      ['哈尔滨中山', 75],
      ['营业部框架', 72.4],
      ['淄博石化', 67],
      ['齐齐哈尔', 50],
      ['其他部门框架', 42],
      ['运营中心', 2],
    ]
  },

  // 极坐标系组件
  polar: {
  },

  series: [{
    type: 'bar',
    coordinateSystem: 'polar',

    // 极坐标系（polar）特有的属性：
    encode: {
      radius: '用户访问',
      angle: 'product'
    }
  }]
}