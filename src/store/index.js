/****
 * 将所有的reducer合并到统一的状态中心store中
****/
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunkMiddleware from 'redux-thunk' // 允许 dispatch() 函数的中间件
import { createLogger } from 'redux-logger'

import userReducer from './user'

// 合并不同模块的reducer
const reducers = combineReducers({
  userInfo: userReducer,
})

const loggerMiddleware = createLogger() // 打印 action 日志的中间件
const middlewares = [thunkMiddleware, loggerMiddleware]
const middleware = applyMiddleware(...middlewares)

export default createStore(reducers, middleware)
