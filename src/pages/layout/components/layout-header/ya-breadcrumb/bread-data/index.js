/****
 * 描述:配置-布局页面-面包屑数据出口
 * 创建者:李克振
 * 日期:2021/04/30
****/
import single from './single' // 未划分模块页面
import demo from './demo' // 示例模块页面
import systemManage from './system-manage' // 系统管理模块页面


export default {
  ...single,
  ...demo,
  ...systemManage,
}