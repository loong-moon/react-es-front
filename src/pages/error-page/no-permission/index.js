/****
 * 描述:页面-无权限页面
 * 创建者:李克振
 * 日期:2021/03/24
****/

import React from 'react'

import { Result, Button } from 'antd'

function Page () {
  const handleGoback = () => {
    location.href = '/login'
  }

  return (
    <Result
      status="403"
      title="无权限"
      subTitle="对不起，您没有权限访问该页面！"
      extra={
        <Button 
          type="primary" 
          onClick={handleGoback}>返回登录页</Button>
      }
    />
  )
}

export default Page