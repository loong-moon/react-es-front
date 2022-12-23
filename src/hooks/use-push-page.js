/****
 * 描述: hooks-push跳转页面
 * 创建者:李克振
 * 日期:2021/05/10
****/
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

function usePushPage () {
  const navigate = useNavigate()

  const pushPage = useCallback((path) => {
    navigate(path)
  }, [navigate])

  return pushPage
}

export default usePushPage