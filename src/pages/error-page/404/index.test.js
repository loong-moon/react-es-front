/****
 * 描述:页面-布局页面测试
 * 创建者:李克振
 * 日期:2021/04/30
****/
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './index'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/404/i)
  expect(linkElement).toBeInTheDocument()
})
