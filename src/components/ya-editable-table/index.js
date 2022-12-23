/****
 * 描述:公共组件-可编辑表格
 * 创建者:李克振
 * 日期:2021/02/03
****/

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { 
  Form,
  Input,
  InputNumber,
  Select,
  Empty,
  Tooltip,
} from 'antd'
import EditableCell from './editable-cell'
import YaTableAction from '@/components/ya-table/action-colum'
import './index.scss'

const { Option } = Select

function YaEditableTable ({ 
  columns, 
  dataSource, 
  // rowKey,
  actionClick,
  form,
}) {
  // form对象

  useEffect(() => {
    form.setFieldsValue({ fields: dataSource })
  }, [form, dataSource])

  // 渲染编辑列表头部单元格
  function renderHeadCell () {
    const headCols = columns.map(item => {
      let { 
        key, 
        dataIndex,
        title,
        required,
      } = item
      key = key || dataIndex

      return (
        <EditableCell key={key} {...item}>
          {required && <span className="text-red">*</span>}
          {title}
        </EditableCell>
      )
    })

    return headCols
  }

  // 渲染编辑列表主体部分行
  function renderBodyRow (field, index) {
    const row = dataSource[index]
    // console.log(field, row, index, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa 渲染编辑列表主体部分行')
    return (
      <div 
        className="ya-editable-table-row"
        key={field.key}>
        {row && renderBodyCells(row, field, index)}
      </div>
    )

  }

  // 渲染编辑列表主体部分单元格
  function renderBodyCells (row, field, index) {
    // console.log(row, 'aaaaaaaaaaaaaaaaaaaa 渲染编辑列表主体部分单元格')
    const bodyCols = columns.map(item => {
      let {
        key,
        dataIndex,
        render,
        type,
        required,
        disabled,
        actions = [],
        options = []
      } = item

      let cellNode = null
      const cellValue = row[dataIndex]

      // console.log(item, 'aaaaaaaaaaaaaaaaaaaa 渲染body单元格')
      // 处理特殊字段类型
      if (dataIndex === 'rowNum') { // 序号内容
        cellNode = index + 1
      } else if (dataIndex === 'operation') { // 操作列
        cellNode = <YaTableAction 
          row={row} 
          actions={actions} 
          actionClick={(key, row) => actionClick(key, row, index)}>
        </YaTableAction>
      } else {
        
        cellNode = <Tooltip
          title={cellValue}
        >
          {cellValue || '-'}
        </Tooltip>

        const itemProps = {
          name: [field.name, dataIndex],
          fieldKey: [field.fieldKey, dataIndex],
        }

        if (required) {
          itemProps.rules = [{ required: true, message: '不能为空!' }]
        }

        // 是否禁用该编辑项
        if (typeof disabled === 'function') {
          disabled = disabled(row)
        }

        // console.log(itemProps, item, 'aaaaaaaaaaaaaaaaaaaa itemProps')

        // 编辑类型
        if (type === 'input') {
          cellNode = <Form.Item {...itemProps}>
            <Input placeholder="请输入" disabled={disabled}/>
          </Form.Item>
        } else if (type === 'inputNumber') {
          cellNode = <Form.Item {...itemProps}>
            <InputNumber placeholder="请输入" disabled={disabled}/>
          </Form.Item>
        } else if (type === 'select') {
          cellNode = <Form.Item {...itemProps}>
            <Select placeholder="请选择" disabled={disabled}>
              { options && options.map(option => 
                <Option 
                  key={option.value} 
                  value={option.value}>
                  {option.label}
                </Option>
              ) }
              
            </Select>
          </Form.Item>
        }

      }
      
      if (render) {
        cellNode = render(cellValue, row, index)
      }

      key = key || dataIndex

      return (
        <EditableCell key={key} {...item}>
          { cellNode }
        </EditableCell>
      )
    })

    return bodyCols
  }

  return (
    <div className="ya-editable-table-wrap">
      {/* 编辑表格主题头部 */}
      <div className="ya-editable-table-head">
        <div className="ya-editable-table-row">
          { renderHeadCell() }
        </div>
      </div>

      {/* 编辑表格主题部分 */}
      <div className="ya-editable-table-body">
        {
          dataSource && dataSource.length > 0 ? 
            <Form form={form}>
              <Form.List name="fields">
                { fields => fields.map(renderBodyRow) }
              </Form.List>
            </Form> : 
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        }
        
      </div>
        
    </div> 
  )
}

YaEditableTable.propTypes = {
  columns: PropTypes.array, // 列数据
  dataSource: PropTypes.array, // 表格数据
  // rowKey: PropTypes.string, // 用于每行表格的key字段名
  actionClick: PropTypes.func, // 操作回调函数
  form: PropTypes.object, // form实例对象
}

export default YaEditableTable