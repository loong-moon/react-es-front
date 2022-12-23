/****
 * 描述:route配置-demo模块
 * 创建者:李克振
 * 日期:2021/04/30
****/
import { lazy } from 'react'

// 组件示例
const ComponentsDemo = lazy(() => import(/* webpackChunkName: "demo" */ '@/pages/demo/components-demo'))
// 表格示例
const TableDemo = lazy(() => import(/* webpackChunkName: "demo" */ '@/pages/demo/table-demo'))
// 面板示例
const PanelDemo = lazy(() => import(/* webpackChunkName: "demo" */ '@/pages/demo/panel-demo'))
// 图表示例
const EchartDemo = lazy(() => import(/* webpackChunkName: "demo" */ '@/pages/demo/echart-demo'))
// 可编辑表格示例
const EditableTableDemo = lazy(() => import(/* webpackChunkName: "demo" */ '@/pages/demo/editable-table-demo'))

const routes = [
  {
    key: 'ComponentsDemo',
    path: '/main/components-demo',
    component: ComponentsDemo,
  },
  {
    key: 'TableDemo',
    path: '/main/table-demo',
    component: TableDemo,
  },
  {
    key: 'EditableTableDemo',
    path: '/main/editable-table-demo',
    component: EditableTableDemo,
  },
  {
    key: 'PanelDemo',
    path: '/main/panel-demo',
    component: PanelDemo,
  },
  {
    key: 'EchartDemo',
    path: '/main/echart-demo',
    component: EchartDemo,
  },
]

export default routes