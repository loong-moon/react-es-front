/****
 * 描述:页面-组件demo页面
 * 创建者:李克振
 * 日期:2021/05/10
****/
import React, { useState } from 'react'
import { Button } from 'antd'
import { 
  YaPage,
  YaPanel, 
  YaIcon,
  YaTag,
  YaText,
  YaModal,
} from '@/components'
import './index.scss'

function App () {
  // 设置对话框标题
  const [demoModalVisible, setDemoModalVisible] = useState(false)

  // 打开示例对话框
  const openDemoModal = () => {
    setDemoModalVisible(true)
  }

  // 处理点击对话框确定按钮
  const handleModalOk = () => {
    setDemoModalVisible(false)
  }

  // 处理对话框取消事件，点击取消按钮、点击遮罩层、点击关闭按钮
  const handleModalCancel = () => {
    setDemoModalVisible(false)
  }

  return (
    <YaPage className="components-demo-page">
      <YaPanel
        panelTitle="YaIcon">
        <div className="demo-wrap">
          <div className="demo-desc">
              YaIcon主要是解决新版本antd4.x Icon不能配置的问题，目前主要用于菜单，传递的参数：<br/>
              type: string类型，可以传递antd Icon的组件名，目前没有添加所有的组件支持；也可以传递iconfont的类名
          </div>
          <div className="icon-list">
            {/* 传递Icon的组件名 */}
            <YaIcon type="BarChartOutlined" />
            <YaIcon type="BarsOutlined" />
            <YaIcon type="CalendarOutlined" />
            <YaIcon type="ContainerOutlined" />
            <YaIcon type="CloudServerOutlined" />

            {/* 传递自定义icon 具体可以在assets-iconfont文件夹查看 */}
            <YaIcon type="xiazai" />
            <YaIcon type="shanchu" />
            <YaIcon type="jisuan" />
            <YaIcon type="chakan" />
            <YaIcon type="CloudServerOutlined" />
          </div>
        </div>
      </YaPanel>

      <YaPanel
        className="mt16"
        panelTitle="YaTag">
        <div className="demo-wrap">
          <div className="demo-desc">
              YaIcon是为了统一表格中状态样式，可传递的参数：<br/>
              className:string类型， 自定义样式 <br/>
              color:string类型， 包含五种状态 success-成功, processing-进行中, error-失败, warning-警告, default-默认；也可以像antd Tag一样传递其他颜色值 <br/>
              label:string类型， 标签的文字 <br/>
          </div>
          <div>
            <YaTag color="success" label="成功" />
            <YaTag color="processing" label="进行中" />
            <YaTag color="error" label="失败" />
            <YaTag color="warning" label="警告" />
            <YaTag color="default" label="默认" />
          </div>
        </div>
      </YaPanel>

      <YaPanel
        className="mt16"
        panelTitle="YaText">
        <div className="demo-wrap">
          <div className="demo-desc">
              YaIcon是为了统一页面中的可点击文字，可传递的参数：<br/>
              className:string类型， 自定义样式 <br/>
              type:string类型， 可点击类型 btn-文字按钮 link-文字链接 <br/>
              onClick:func类型， 点击事件 <br/>
          </div>
          <p><YaText type="link">这是一行可点击文字，这是一行可点击文字</YaText></p>
          <p><YaText type="btn">编辑</YaText></p>
        </div>
      </YaPanel>

      <YaPanel
        className="mt16"
        panelTitle="YaModal">
        <div className="demo-wrap">
          <div className="demo-desc">
              YaModal是为了统一对话框样式，可传递的参数：<br/>
              className:string类型， 自定义样式 <br/>
              其他所有antd Modal的参数都可以正常传递
          </div>

          <Button type="primary" onClick={openDemoModal}>打开对话框</Button>
          
          <YaModal
            className="edit-life-cycle-modal"
            visible={demoModalVisible}
            title="标题"
            onOk={handleModalOk}
            onCancel={handleModalCancel}>
              YaModal是为了统一对话框样式，其他所有antd Modal的参数都可以正常传递，
              YaModal是为了统一对话框样式，其他所有antd Modal的参数都可以正常传递，
              YaModal是为了统一对话框样式，其他所有antd Modal的参数都可以正常传递
          </YaModal>
        </div>
      </YaPanel>
    </YaPage>
  )
}

export default App
