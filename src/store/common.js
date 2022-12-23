/****
 * 描述:redux公共方法封装
 * 创建者:李克振
 * 日期:2021/02/22
****/


// 根据配置生成actions
export const createActions = (config = {}) => (dispatch, ownProps) => {
  const actions = {}

  for (const [key, actionConfig] of Object.entries(config)) {
    actions[key] = (data) => {
      const action = {
        type: actionConfig.actionType,
        data,
      }

      dispatch(action)
    }
  }

  return actions
}