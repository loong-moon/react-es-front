/****
 * 描述: 公共组件-搜索
 * 创建者:李克振
 * 日期:2021/05/10
****/
import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import PropTypes from 'prop-types'
import './index.scss'

function YaSearch (props) {
  const {
    className,
    actionElements, 
    children,
    placeholder,
    searchValueChange = () => {},
    handleSearch,
    ...restProps 
  } = props

  const [searchValue, setSearchValue] = useState(null)

  const hangleSearchValueChange = e => {
    const val = e.target.value
    setSearchValue(val)

    searchValueChange(val)
  }
  
  // 处理类
  const wrapClassName = className ? ' ' + className : ''

  // 默认form那内容
  const defaultFormItems = (
    <React.Fragment>
      <Form.Item>
        <Input
          className="search-input"
          placeholder={placeholder || '请输入关键字'}
          onChange={hangleSearchValueChange} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={() => handleSearch(searchValue)}>
            搜索
        </Button>
      </Form.Item>
    </React.Fragment>
  )

  return (
    <section {...restProps} 
      className={'ya-search-wrap' + wrapClassName}>

      <Form className="ya-search-form" layout="inline">
        { children || defaultFormItems }
      </Form>
                
      {/* 插槽的形式注入 */}
      <div className="ya-search-action">
        {actionElements}
      </div>    
                       
    </section>           
  )
}

// 参数类型验证
YaSearch.propTypes = {
  className: PropTypes.string, // 样式类名
  actionElements: PropTypes.node, // 搜索操作按钮区域
  children: PropTypes.node, // form条目，用于自定义form内容
  placeholder: PropTypes.string, // 搜索框中的占位字
  searchValueChange: PropTypes.func, // 搜索的值改变
  handleSearch: PropTypes.func, // 搜索框中的占位字
}
export default YaSearch