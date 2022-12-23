/****
 * 描述:页面-404页面
 * 创建者:李克振
 * 日期:2021/03/24
****/

import React from 'react'

import { Result, Button } from 'antd'

function Page () {
  const handleGoback = () => {
    location.href = '/main/home'
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起，找不到该页面！"
      extra={
        <Button 
          type="primary" 
          onClick={handleGoback}>返回首页</Button>
      }
    />
  )
}

export default Page