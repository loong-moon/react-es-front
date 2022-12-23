/****
 * 描述:页面-登录页面组件
 * 创建者:李克振
 * 日期:2021/04/30
****/
import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { 
  Form,
  Input,
  Button,
  Checkbox,
} from 'antd'
import { useMount } from 'ahooks'
import { 
  UserOutlined,
  LockOutlined,
} from '@ant-design/icons'

import { login } from '@/api/user'
import './index.scss'


function Login (props) {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  // 初始化表单
  useMount(() => {
    let loginInfo = localStorage.getItem('loginInfo')
    console.log(loginInfo, 'aaaaaaaaaaaaaaaaaaaaa 登录信息1')
      
    if (loginInfo) {
      loginInfo = JSON.parse(window.atob(loginInfo))
      console.log(loginInfo, 'aaaaaaaaaaaaaaaaaaaaa 登录信息')
        
      form.setFieldsValue(
        loginInfo
      )
    }
  })

  // 处理登录点击
  const handleClick = () => {
    form.validateFields().then(values => {
      // console.log(values, 'aaaaaaaaaaaa')
      if (values.remember) {
        localStorage.setItem('loginInfo', window.btoa(JSON.stringify(values)))
      } else {
        localStorage.removeItem('loginInfo')
      }

      handleLogin(values)
    })
  }

  // 处理登录
  const handleLogin = () => {
    login().then(res => {
      console.log(res, 'aaaaaaaaaaaaaaaaaaa 处理登录')
      // navigate('/main')
    })
    navigate('/main')
  }

  
  return (
    <div className="login-page">

      <header className="login-header">
        {/* <img className='logo' src={logoImg} alt="logo"></img> */}
      </header>

      {/* 登录框 */}
      <section className="login-box">
        <div className="login-box-head clearfix">
          {/* <img className='login-logo' src={logoImg} alt="logo"></img> */}
          <div className='login-title'>管理平台</div>
        </div>

        <Form
          name="normal_login"
          className="login-form"
          form={form}
          initialValues={{ remember: false }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名！' }]}
          >
            <Input 
              prefix={<UserOutlined className="text-sub" />} 
              placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码！' }]}
          >
            <Input
              prefix={<LockOutlined className="text-sub" />}
              type="password"
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>              
          </Form.Item>
        </Form>
        
        <Button 
          className="w100" 
          type="primary"
          onClick={handleClick}>
          登 录
        </Button>
      </section>
    </div>
  )
  
  
}

// 参数类型验证
Login.propTypes = {
  fetchUser: PropTypes.func,
  userInfo: PropTypes.object
}

export default Login
