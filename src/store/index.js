/****
 * 描述:统一的状态中心中
 * 创建者:李克振
 * 日期:2021/04/30
****/
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunkMiddleware from 'redux-thunk' // 允许 dispatch() 函数的中间件
// import { createLogger } from 'redux-logger'

import userInfoReducer from './user-info'
import menuReducer from './menu'


// 合并不同模块的reducer
const reducers = combineReducers({
  userInfo: userInfoReducer,
  menu: menuReducer,
})

// const loggerMiddleware = createLogger() // 打印 action 日志的中间件
const middlewares = [
  thunkMiddleware, 
  // loggerMiddleware
]
const middleware = applyMiddleware(...middlewares)

export default createStore(reducers, middleware)
