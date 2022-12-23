/****
 * 描述:页面-首页
 * 创建者:李克振
 * 日期:2021/04/30
****/
import React, { 
// useState, useEffect 
} from 'react'
import { YaPage, YaPanel } from '@/components'

import './index.scss'

function App () {
  
  return (
    <YaPage className="home-page">
      <YaPanel panelTitle="首页home"></YaPanel>
    </YaPage>
  )
}

export default App
