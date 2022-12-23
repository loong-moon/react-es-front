/****
 * 描述:配置-表格及表格搜索区域demo页面-表格数据
 * 创建者:李克振
 * 日期:2021/04/30
****/
import React from 'react'
import { KeyOutlined } from '@ant-design/icons'
import { 
  YaTag,
} from '@/components'

// 状态配置
const statusConf = {
  1: {
    label: '正常',
    color: 'default',
  },
  2: {
    label: '进行中',
    color: 'processing',
  },
  3: {
    label: '成功',
    color: 'success',
  },
  4: {
    label: '报错',
    color: 'error',
  },
}

// 表格列数据
export const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    width: 50,
    render: (val, record, index) => {
      return index + 1
    }
  },
  {
    title: '质量规则',
    ellipsis: true,
    dataIndex: 'ruleName',
  },
  {
    title: '规则需求方',
    ellipsis: true,
    dataIndex: 'ruleOwn',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 100,
  },
  {
    title: '规则编号',
    dataIndex: 'roleNo',
  },
  {
    title: '维度大类',
    dataIndex: 'dimClass1',
  },
  {
    title: '维度小类',
    dataIndex: 'dimClass2',
  },
  {
    title: '执行周期',
    dataIndex: 'execCycle',
    render: value => {
      return value === 0 ? '每天' : value === 1 ? '每周' : '手工'
    }
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: '10',
    align: 'center',
    render: (val, item, index) => <YaTag color={statusConf[val].color} label={statusConf[val].label}></YaTag>
  },
]

// 表格列操作数据
export const actionData = {
  width: 360,
  actions: [
    {
      title: '编辑',
      key: 'edit',
    },
    {
      title: '删除',
      key: 'delete',
    },
    {
      title: '上传',
      key: 'upload',
    },
    {
      title: '下载',
      key: 'download',
    },
    {
      title: '查看',
      key: 'view',
      // isClick: false,
    },
    {
      title: '关联',
      key: 'relate',
    },
    {
      title: '执行',
      key: 'play',
    },
    {
      title: '测试',
      key: 'test',
      // isHide: true,
    },
    {
      title: '钥匙',
      key: 'keyout',
      icon: <KeyOutlined />
    },
  ]
}

// 表格数据
export const tableData = [
  {
    ruleName: '测试一',
    ruleOwn: '管理员',
    createTime: '2020-02-02',
    roleNo: '001',
    dimClass1: 'int',
    dimClass2: 'string1',
    execCycle: '2',
    status: 1,
    id: 1
  },
  {
    ruleName: '测试一',
    ruleOwn: '管理员',
    createTime: '2020-02-02',
    roleNo: '001',
    dimClass1: 'int',
    dimClass2: 'string1',
    execCycle: '2',
    status: 1,
    id: 2
  },
  {
    ruleName: '测试一',
    ruleOwn: '管理员',
    createTime: '2020-02-02',
    roleNo: '001',
    dimClass1: 'int',
    dimClass2: 'string1',
    execCycle: '2',
    status: 2,
    id: 3
  },
  {
    ruleName: '测试一',
    ruleOwn: '管理员',
    createTime: '2020-02-02',
    roleNo: '001',
    dimClass1: 'int',
    dimClass2: 'string1',
    execCycle: '2',
    status: 3,
    id: 4
  },
  {
    ruleName: '测试一',
    ruleOwn: '管理员',
    createTime: '2020-02-02',
    roleNo: '001',
    dimClass1: 'int',
    dimClass2: 'string1',
    execCycle: '2',
    status: 4,
    id: 5
  },
  {
    ruleName: '测试一',
    ruleOwn: '管理员',
    createTime: '2020-02-02',
    roleNo: '001',
    dimClass1: 'int',
    dimClass2: 'string1',
    execCycle: '2',
    status: 1,
    id: 6
  },
  {
    ruleName: '测试一',
    ruleOwn: '管理员',
    createTime: '2020-02-02',
    roleNo: '001',
    dimClass1: 'int',
    dimClass2: 'string1',
    execCycle: '2',
    status: 1,
    id: 61
  },
  {
    ruleName: '测试一',
    ruleOwn: '管理员',
    createTime: '2020-02-02',
    roleNo: '001',
    dimClass1: 'int',
    dimClass2: 'string1',
    execCycle: '2',
    status: 1,
    id: 7
  },
  {
    ruleName: '测试一',
    ruleOwn: '管理员',
    createTime: '2020-02-02',
    roleNo: '001',
    dimClass1: 'int',
    dimClass2: 'string1',
    execCycle: '2',
    status: 1,
    id: 8
  },
  {
    ruleName: '测试一',
    ruleOwn: '管理员',
    createTime: '2020-02-02',
    roleNo: '001',
    dimClass1: 'int',
    dimClass2: 'string1',
    execCycle: '2',
    status: 3,
    id: 9
  },
  {
    ruleName: '测试一',
    ruleOwn: '管理员',
    createTime: '2020-02-02',
    roleNo: '001',
    dimClass1: 'int',
    dimClass2: 'string1',
    execCycle: '2',
    status: 1,
    id: 10
  },
  {
    ruleName: '测试一',
    ruleOwn: '管理员',
    createTime: '2020-02-02',
    roleNo: '001',
    dimClass1: 'int',
    dimClass2: 'string1',
    execCycle: '2',
    status: 1,
    id: 11
  },
  {
    ruleName: '测试一',
    ruleOwn: '管理员',
    createTime: '2020-02-02',
    roleNo: '001',
    dimClass1: 'int',
    dimClass2: 'string1',
    execCycle: '2',
    status: 2,
    id: 12
  },
]