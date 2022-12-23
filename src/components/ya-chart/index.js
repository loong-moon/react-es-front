/****
 * 描述:公共组件-echart封装
 * 创建者:李克振
 * 日期:2021/05/10
****/
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

import * as echarts from 'echarts'
import { bindEvent, removeEvent } from '@/utils'
import {
  chartColors,
  tooltipConf,
  legendConf,
  xAxisValue,
  xAxisLine,
  xAxisCategory,
  yAxisValue,
  yAxisCategory,
  polarConf,
} from './config'

function YaChart (props) {
  let {
    className,
    option,
    legend,
    xAxis,
    yAxis,
    polar,
    color,
  } = props

  const grapEl = useRef(null)
  const [chartInstance, setChartInstance] = useState(null)


  // 初始化图表
  useEffect(() => {

    // 添加默认颜色和提示框配置
    let colors = chartColors
    if (color === 'green') {
      colors = [chartColors[1]]
    } 
    let newOption = { color: colors, tooltip: tooltipConf }

    // 添加默认图例配置
    if (legend === true) {
      newOption = Object.assign(newOption, { legend: legendConf })
    }

    // 添加默认极坐标系配置
    if (polar === true) {
      newOption = Object.assign(newOption, polarConf)
    }

    // 处理x轴配置
    if (xAxis === 'value') {
      newOption = Object.assign(newOption, { xAxis: xAxisValue })
    }
    if (xAxis === 'line') {
      newOption = Object.assign(newOption, { xAxis: xAxisLine })
    }
    if (xAxis === 'category') {
      newOption = Object.assign(newOption, { xAxis: xAxisCategory })
    }

    // 处理y轴配置
    if (yAxis === 'value') { // 双数值y轴
      newOption = Object.assign(newOption, { yAxis: yAxisValue })
    }
    if (yAxis === '2-value') { // 双数值y轴
      newOption = Object.assign(newOption, { yAxis: [yAxisValue, yAxisValue] })
    }
    if (yAxis === 'category') { // 双数值y轴
      newOption = Object.assign(newOption, { yAxis: yAxisCategory })
    }

    newOption = Object.assign(newOption, option)
    
    // console.log(option, 'aaaaaaaaaaaaaaaaaa 初始化配置')
    const chart = echarts.init(grapEl.current)

    // 渲染图表
    chart.setOption(newOption)

    setChartInstance(chart)

    // 重置图表
    const resize = () => {
      chart.resize()
    }

    // 监听resize事件
    bindEvent(window, 'resize', resize)

    // 清除监听事件
    return () => removeEvent(window, 'resize', resize)
      
  }, [])

  // 处理配置变化
  useEffect(() => {
    
    if (chartInstance) {
      // console.log(option, 'aaaaaaaaaaaaaaaaaa 处理配置变化')
      chartInstance.setOption(option)
    }
      
  }, [option])

  

  // 处理自定义样式
  className = className ? `ya-echart-wrap ${className}` : 'ya-echart-wrap'

  
  return <div className={className} ref={grapEl}></div>
}

// 参数类型验证
YaChart.propTypes = {
  className: PropTypes.string, // 自定义样式
  option: PropTypes.object, // echarts的配置
  legend: PropTypes.bool, // 是否添加默认图例配置
  xAxis: PropTypes.string, // 添加x轴配置类型 value-数值轴 category-类目轴 lineArea-区域图标
  yAxis: PropTypes.string, // 添加y轴配置类型 value-数值轴 category-类目轴 2-value-双数值Y轴
  polar: PropTypes.bool, // 是否添加默认极坐标系配置
  color: PropTypes.string, // 单个系列时图标颜色 green-绿色
}

export default YaChart