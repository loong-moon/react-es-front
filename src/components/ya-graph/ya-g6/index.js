/****
 * 描述:公共组件-g6封装
 * 创建者:李克振
 * 日期:2021/05/12
****/
import React, { 
  useState,
  useEffect, 
  useRef,
} from 'react'
import PropTypes from 'prop-types'
import './index.scss'

import G6 from './g6'
import { bindEvent, removeEvent } from '@/utils'
import onEvents from './on-events'

function YaG6 (props) {
  let {
    className,
    options = {},
    data,
    onGraphEvent = () => {},
    onGraphInstanceChange = () => {},
  } = props

  const grapEl = useRef(null)
  const [graphInstance, setGraphInstance] = useState(null)

  // 初始化图
  useEffect(() => {
    // console.log(options, 'aaaaaaaaaaaaaaaaaa 传入的图配置')

    // 创建图实例
    const buildGraphInstance = () => {
      
      const grapConfig = {
        container: grapEl.current, // String | HTMLElement
        width: grapEl.current.clientWidth, // Number，必须，图的宽度
        height: grapEl.current.clientHeight, // Number，必须，图的高度
        ...options,
      }
  
      const newGraphInstance = new G6.Graph(grapConfig)

      // 绑定右键菜单事件
      newGraphInstance.on('contextmenu', (e) => onGraphEvent(e))
      
      // 绑定事件
      for (const [key, onEvent] of Object.entries(onEvents)) {
        newGraphInstance.on(key, (e) => onEvent(e, newGraphInstance))
      }
      
      // 渲染图
      newGraphInstance.data(data) // 添加图数据
      newGraphInstance.render() // 渲染图

      // 开启支持css缩放
      newGraphInstance.get('canvas').set('supportCSSTransform', true)

      // console.log(newGraphInstance, grapEl, 'aaaaaaaaaaaaaaaaaaa 图新实例')
      onGraphInstanceChange(newGraphInstance)
      setGraphInstance(newGraphInstance)
    }

    if (graphInstance) {
      graphInstance.destroy()
      buildGraphInstance()
    } else {
      buildGraphInstance()
    }
    
  }, [options])


  // 重置图大小
  useEffect(() => {

    // 重置图大小方法
    const resize = () => {
      // console.log(graphInstance, 'aaaaaaaaaaaaaaaaaaa 重置图大小')
      graphInstance.changeSize(grapEl.current.clientWidth, grapEl.current.clientHeight)
    }

    // 监听resize事件
    bindEvent(window, 'resize', resize)
    
    // 清除监听事件
    return () => removeEvent(window, 'resize', resize)
      
  }, [graphInstance])


  // 图数据改变
  useEffect(() => {
    // console.log(data, 'data 改变')
    if (graphInstance && graphInstance.cfg) {
      const keys = Object.keys(data)
      
      if (keys.length === 0) {
        graphInstance.clear()
      } else {
        graphInstance.changeData(data)
      }
    }
  }, [data])

  
  // 处理自定义样式
  className = className ? `ya-g6-graph ${className}` : 'ya-g6-graph'

  return <div className={className} ref={grapEl}></div>
}

// 参数类型验证
YaG6.propTypes = {
  className: PropTypes.string, // 自定义样式
  options: PropTypes.object, // graph的配置
  data: PropTypes.object, // graph的数据
  onGraphEvent: PropTypes.func, // 图事件回调函数
  onGraphInstanceChange: PropTypes.func, // 图实例变化回调函数
}

export default YaG6