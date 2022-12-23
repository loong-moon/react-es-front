/****
 * 描述:页面-表格及表格搜索区域demo页面
 * 创建者:李克振
 * 日期:2021/05/10
****/

import React, {
  useState,
} from 'react'
import { 
  Button,
  Form,
  Modal,
} from 'antd'
import { 
  YaPage,
  YaPanel,
  YaEditableTable,
} from '@/components'
import { 
  columns,
} from './table-data'

const initTableData = [
  {
    fieldName: '字段名',
    fieldLength: 10,
    emptyFlag: null,
    fieldDes: '',
    text: '测试文字，不是编辑表单',
    disabled: true,
  }
]



function App () {
  // form对象
  const [form] = Form.useForm()
  // 用于表格显示
  const [tableData, setTableData] = useState(initTableData)

  // 处理表单验证
  const handleVerify = () => {
    form.validateFields().then(values => {
      console.log(values, 'aaaaaaaaaaaaaaaaaaaaa 处理表单验证')
    })
  }

  // 处理添加字段
  const handleAddField = () => {
    const field = {
      fieldName: null,
      fieldLength: null,
      emptyFlag: null,
      fieldDes: null,
      text: null,
    }

    const fields = form.getFieldValue('fields')
    const newTableData = [...fields, field]
    // console.log(fields, 'aaaaaaaaaaaaaaaaaaaaa 处理添加字段')

    setTableData(newTableData)
  }

  // 处理表格操作
  const handleActionClick = (key, row, index) => {
    console.log(key, row, index, 'aaaaaaaaaaaaaaaaaaaaa handleActionClick')
    switch (key) {
    case 'delete':
      handleDeleteField(index)
      break
    
    default:
      break
    }
  }

  // 处理删除字段
  const handleDeleteField = (index) => {
    Modal.confirm({
      title: '请确认是否删除?',
      onOk () {
        const newTableData = [...tableData]
        newTableData.splice(index, 1)
        
        setTableData(newTableData)
      },
      // onCancel () {
      //   console.log('Cancel')
      // },
    })
    
  }

  return (
    <YaPage>
      <YaPanel
        panelTitle="表格demo"
        full={true}>

      
        <div className="mb10">
          <Button 
            onClick={handleAddField}>
            添加字段
          </Button>
          <Button 
            type="primary" 
            onClick={handleVerify}>
            验证
          </Button>
        </div>

        <YaEditableTable
          columns={columns}
          dataSource={tableData}
          form={form}
          actionClick={handleActionClick}>
        </YaEditableTable>

      </YaPanel>
    </YaPage>
  )
}

export default App
