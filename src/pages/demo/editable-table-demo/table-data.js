/****
 * 描述:配置-表格数据
 * 创建者:李克振
 * 日期:2021/05/10
****/
// import React from 'react'
// import { KeyOutlined } from '@ant-design/icons'

// 是否为空-select选择项
const emptyFlagOptions = [
  {
    label: '为空',
    value: true,
  }, {
    label: '不为空',
    value: false,
  }
]

// 表格列数据
export const columns = [
  {
    title: '序号',
    dataIndex: 'rowNum',
    width: 50,
  }, 
  {
    title: '字段名称',
    dataIndex: 'fieldName',
    required: true,
    type: 'input',
    disabled: row => row.disabled,
  }, 
  {
    title: '字段长度',
    dataIndex: 'fieldLength',
    required: true,
    type: 'inputNumber',
  }, 
  {
    title: '是否为空',
    dataIndex: 'emptyFlag',
    required: true,
    type: 'select',
    options: emptyFlagOptions,
  },
  {
    title: '字段注释',
    dataIndex: 'fieldDes',
    type: 'input',
  }, 
  {
    title: '字段注释',
    dataIndex: 'fieldDes',
    type: 'input',
  }, 
  {
    title: '文字',
    dataIndex: 'text',
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: 80,
    align: 'center',
    actions: [
      {
        title: '删除',
        key: 'delete',
      },
    ],
  }
]
