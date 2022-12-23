/****
 * 描述:页面-echarts demo页面
 * 创建者:李克振
 * 日期:2021/05/10
****/
import React from 'react'
import { Row, Col } from 'antd'
import { YaPage, YaPanel, YaChart, YaViewCard } from '@/components'
import { PieChartOutlined, ProjectOutlined } from '@ant-design/icons'

import optionEchart1 from './option-config/option-echart1'
import optionEchart2 from './option-config/option-echart2'
import optionEchart3 from './option-config/option-echart3'
import optionEchart4 from './option-config/option-echart4'
import optionEchart5 from './option-config/option-echart5'
import optionEchart6 from './option-config/option-echart6'
import optionEchartLine from './option-config/option-echart-line'
import optionEchartGraph from './option-config/option-echart-graph'

function App () {
  return (
    <YaPage>
      <Row gutter={[16, 16]} className="mb20">
        <Col span={6}>
          <YaViewCard
            title="统计卡片"
            count={107}
            background="green">
          </YaViewCard>
        </Col>
        <Col span={6}>
          <YaViewCard
            title="首页">
          </YaViewCard>
        </Col>
        <Col span={6}>
          <YaViewCard
            title="采集数据源(个)"
            count={10}
            background="blue"
            icon={<PieChartOutlined />}>
          </YaViewCard>
        </Col>
        <Col span={6}>
          <YaViewCard
            title="实时数据总量(个)"
            background="green"
            count={1024}
            icon={<ProjectOutlined />}>
          </YaViewCard>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <YaPanel panelTitle="示例1">
            <YaChart 
              option={optionEchart1}
              legend={true}
              xAxis="category"
              yAxis="value">
            </YaChart>
          </YaPanel>
        </Col>
        <Col span={12}>
          <YaPanel panelTitle="示例2">
            <YaChart 
              option={optionEchart2}
              color="green"
              polar={true}>
            </YaChart>
          </YaPanel>
        </Col>
        <Col span={12}>
          <YaPanel panelTitle="示例3">
            <YaChart 
              option={optionEchart3}
              xAxis="value"
              yAxis="category">
            </YaChart>
          </YaPanel>
        </Col>
        <Col span={12}>
          <YaPanel panelTitle="示例4">
            <YaChart 
              option={optionEchart4}
              legend={true}
              xAxis="category"
              yAxis="2-value">
            </YaChart>
          </YaPanel>
        </Col>
        <Col span={12}>
          <YaPanel panelTitle="示例5">
            <YaChart 
              option={optionEchart5}
              xAxis="category"
              yAxis="value">
            </YaChart>
          </YaPanel>
        </Col>
        <Col span={12}>
          <YaPanel panelTitle="示例6">
            <YaChart 
              option={optionEchart6}
              color="green"
              xAxis="value"
              yAxis="category">
            </YaChart>
          </YaPanel>
        </Col>
        <Col span={12}>
          <YaPanel panelTitle="折线图">
            <YaChart 
              option={optionEchartLine}
              color="green"
              xAxis="line"
              yAxis="value">
            </YaChart>
          </YaPanel>
        </Col>
        <Col span={12}>
          <YaPanel panelTitle="关系图表">
            <YaChart 
              option={optionEchartGraph}
              legend={true}>
            </YaChart>
          </YaPanel>
        </Col>
      </Row>
    </YaPage>
  )
}

export default App
