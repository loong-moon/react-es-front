/****
 * 跳转页面hooks
****/
import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

function usePushPage () {
  const history = useHistory()

  const pushPage = useCallback((path) => {
    history.push(path)
  }, [history])

  return pushPage
}

export default usePushPage