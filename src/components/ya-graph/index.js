/****
 * 描述:公共组件-图画布封装
 * 创建者:李克振
 * 日期:2021/05/12
****/
import React, { 
  useEffect, 
  useState,
} from 'react'
import PropTypes from 'prop-types'
import YaG6 from './ya-g6'
import './index.scss'

import { initOptions, layoutConfig, pluginConfig } from './config'
import nodeStyleConfig from './config/node-style-config'
import { listenDagEvent } from './utils'

function YaGraph (props) {
  const {
    className,
    options,
    data,
    layoutType,
    isShowMinimap,
    isMultiSelect,
    onGraphInstanceChange = () => {},
    ...restProps
  } = props

  const [graphOptions, setGraphOptions] = useState(initOptions)
  const [graphData, setGraphData] = useState({})
  const [graphInstance, setGraphInstance] = useState(null)

  // 处理图实例变化
  const handleGraphChange = (graph) => {
    setGraphInstance(graph)
    if (layoutType === 'force') {
      listenDagEvent(graph)
    }
    onGraphInstanceChange(graph)
  }

  // 布局类型改变
  useEffect(() => {
    const layout = layoutConfig[layoutType]
    if (layout && graphInstance) {
      graphInstance.updateLayout()

      if (layoutType === 'force') {
        listenDagEvent(graphInstance)
      }
    }
  }, [layoutType])

  // 当图元素数据改变时
  useEffect(() => {
    const { nodes = [] } = data

    // 给不同类型的实体添加不同的样式
    const newNodes = nodes.map(item => {
      let styles = {}
      if (item.entityType) {
        styles = nodeStyleConfig[item.entityType]
        // console.log(item, styles, 'aaaaaaaaaaaaaaa 当图元素数据改变时item')
      }

      return {
        ...item,
        ...styles,
      }
    })

    const newData = {
      ...data,
      nodes: newNodes
    }

    // console.log(newData, 'aaaaaaaaaaaaaaa 当图元素数据改变时')
    setGraphData(newData)
  }, [data])

  // 图配置改变
  useEffect(() => {
    const newOptions = Object.assign({}, graphOptions, options)

    if (layoutType) {
      newOptions.layout = layoutConfig[layoutType]
    }
    
    // 处理小地图显示
    if (isShowMinimap) {
      const plugins = [pluginConfig.minimap()]

      newOptions.plugins = plugins
    } else {
      newOptions.plugins = []
    }
    // console.log(options, 'aaaaaaaaaaaaaaa 图配置改变')

    setGraphOptions(newOptions)
  }, [options, isShowMinimap])

  // 小地图显示改变
  // useEffect(() => {

  //   // 处理小地图显示
  //   if (isShowMinimap && graphInstance) {
  //     const plugins = [pluginConfig.minimap()]
  //     console.log(graphInstance, plugins, 'aaaaaaaaaaaaaaa 是否显示小地图')
  //     graphInstance.set('plugins', plugins)
  //     graphInstance.paint()
  //     graphInstance.render()
  //     graphInstance.refresh()
  //   }
  // }, [isShowMinimap])

  // 是否为框选模式改变
  useEffect(() => {

    // 处理小地图显示
    if (graphInstance) {
      if (isMultiSelect) {
        graphInstance.setMode('brushSelect')
      } else {
        graphInstance.setMode('default')
      }
    }
    
  }, [isMultiSelect])

  // 处理自定义样式
  const newClassName = className ? `ya-graph-wrap ${className}` : 'ya-graph-wrap'

  // console.log(graphOptions, 'aaaaaaaaaaaaaaaaaaaa 图配置')
  return (
    <YaG6 
      className={newClassName}
      options={graphOptions}
      data={graphData}
      onGraphInstanceChange={handleGraphChange}
      {...restProps}
    ></YaG6>
  )
}

// 参数类型验证
YaGraph.propTypes = {
  className: PropTypes.string, // 自定义样式
  graph: PropTypes.object, // 图实例
  options: PropTypes.object, // graph的配置
  data: PropTypes.object, // graph的数据
  layoutType: PropTypes.string, // 布局类型
  isShowMinimap: PropTypes.bool, // 是否显示小地图导航
  isMultiSelect: PropTypes.bool, // 是否为框选模式
  onGraphInstanceChange: PropTypes.func, // 图实例变化回调函数
}

export default YaGraph