/****
 * 描述:页面-表格及表格搜索区域demo页面
 * 创建者:李克振
 * 日期:2021/04/30
****/

import React from 'react'
import { 
  Button,
  Form,
  Input,
  DatePicker,
} from 'antd'
import {
  YaPage, 
  YaPanel,
  YaSearch,
  YaTable,
} from '@/components'
import { 
  columns,
  tableData,
  actionData,
} from './table-data'

const { RangePicker } = DatePicker

function App () {
  // 处理搜索值变化
  const handleSearchValueChange = (val) => {
    console.log(val, 'aaaaaaaaaaaaaaaaaaaaa')
  }

  // 处理搜索操作
  const handleSearch = () => {
    console.log('aaaaaaaaaaaaaaaaaaaaa handleSearchClick')
  }

  // 处理表格操作
  const handleActionClick = (key, row) => {
    console.log(key, row, 'aaaaaaaaaaaaaaaaaaaaa handleActionClick')
    switch (key) {
    case 'edit':
      console.log(key, row, 'aaaaaaaaaaaaaaaaaaaaa 编辑')
      break
    
    default:
      break
    }
  }

  return (
    <YaPage>
      <YaPanel
        panelTitle="表格demo"
        full={true}>

        <YaSearch 
          searchValueChange={handleSearchValueChange}
          handleSearch={handleSearch}
          actionElements={(
            <React.Fragment>
              <Button>按钮</Button>
              <Button type="primary">按钮</Button>
            </React.Fragment>
          )}
        >
          <Form.Item>
            <Input placeholder="请输入关键字测试" />
          </Form.Item>
          <Form.Item>
            <RangePicker />
          </Form.Item>
          <Form.Item>
            <Button type="primary">
            搜索
            </Button>
          </Form.Item>
        </YaSearch>

        <YaTable 
          columns={columns} 
          dataSource={tableData}
          actionData={actionData}
          actionClick={handleActionClick}
          scroll={{ y: 'calc(100vh - 320px)' }}
        >
        </YaTable>
      </YaPanel>
    </YaPage>
  )
}

export default App
