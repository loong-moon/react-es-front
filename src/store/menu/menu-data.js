/****
 * 描述:公共状态-菜单模拟数据
 * 创建者:李克振
 * 日期:2021/04/30
****/

// 菜单mock数据
export const menuDataMock = [
  {
    resId: '0',
    resName: '示例',
    parentId: '',
    resUrl: null,
    resType: '1',
    resIcon: 'kaifashili',
    children: [
      {
        resId: '01',
        resName: '公共组件示例',
        parentId: '4',
        resUrl: '/main/components-demo',
        resType: '2',
        resIcon: 'LineChartOutlined',
      },
      {
        resId: '02',
        resName: '表格示例',
        parentId: '4',
        resUrl: '/main/table-demo',
        resType: '2',
        resIcon: '',
      },
      {
        resId: '021',
        resName: '可编辑表格示例',
        parentId: '4',
        resUrl: '/main/editable-table-demo',
        resType: '2',
        resIcon: '',
      },
      {
        resId: '03',
        resName: '面板示例',
        parentId: '4',
        resUrl: '/main/panel-demo',
        resType: '2',
        resIcon: '',
      },
      {
        resId: '04',
        resName: 'echarts示例',
        parentId: '4',
        resUrl: '/main/echart-demo',
        resType: '2',
        resIcon: '',
      },
    ],
  },
  {
    resId: '1',
    resName: '首页',
    parentId: '',
    resUrl: '/main/home',
    resType: '1',
    resIcon: 'HomeOutlined',
    children: [],
  },
  
  // {
  //   resId: '10',
  //   resName: '系统管理',
  //   parentId: null,
  //   resUrl: null,
  //   resType: '1',
  //   resIcon: 'SettingOutlined',
  //   children: [{
  //     resId: '101',
  //     resName: '自定义首页',
  //     parentId: '1',
  //     resUrl: '/main/custom-home-page',
  //     resType: null,
  //   }, {
  //     resId: '102',
  //     resName: '菜单资源管理',
  //     parentId: '7',
  //     resUrl: '/main/menu-resource-manage',
  //     resType: '2',
  //     resIcon: 'DatabaseOutlined',
  //   }, {
  //     resId: '103',
  //     resName: '页面权限管理',
  //     parentId: '7',
  //     resUrl: '/main/page-authority-manage',
  //     resType: '2',
  //     resIcon: 'ContainerOutlined',
  //   }, {
  //     resId: '104',
  //     resName: '用户信息管理',
  //     parentId: '7',
  //     resUrl: '/main/user-info-manage',
  //     resType: null,
  //     resIcon: 'LaptopOutlined',
  //   }],
  // },
  
]