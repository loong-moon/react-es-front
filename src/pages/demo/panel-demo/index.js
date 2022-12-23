/****
 * 描述:页面-面板demo页面
 * 创建者:李克振
 * 日期:2021/05/10
****/
import React from 'react'
import { Button, Tree, Descriptions } from 'antd'
import {
  YaPage, 
  YaPanel,
} from '@/components'
import './index.scss'

const { PanelSide, PanelSection } = YaPanel

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      // {
      //   title: 'parent 1-1',
      //   key: '0-0-1',
      //   children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
      // },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: 'sss', key: '0-0-1-0' }],
      },
    ],
  },
]

function App () {
  return (
    <YaPage>
      <YaPanel
        className="panel-demo-page"
        panelTitle="横向盒子面板示例"
        flexRow={true}
        headerRight={<Button type="primary">按钮</Button>}>

        <PanelSide>
          <Tree
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            treeData={treeData}
          />
        </PanelSide>

        <div className="ya-panel-con">
          <PanelSection title="资源详情">
            <Descriptions bordered size="middle">
              <Descriptions.Item label="资源名称" span={3}>Running</Descriptions.Item>
              <Descriptions.Item label="资源标识" span={3}>&nbsp;</Descriptions.Item>
              <Descriptions.Item label="资源图标" span={3}>&nbsp;</Descriptions.Item>
              <Descriptions.Item label="序号" span={3}>&nbsp;</Descriptions.Item>
              <Descriptions.Item label="外部链接地址" span={3}>&nbsp;</Descriptions.Item>
            </Descriptions>
          </PanelSection>
        </div>

      </YaPanel>
    </YaPage>
  )
}

export default App
