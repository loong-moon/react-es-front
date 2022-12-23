### 根目录

build：打包后的代码

doc：文档文件

public： 静态文件

server：模拟服务，可以直接用json文件模拟返回数据

src：前端代码目录

.eslintignore：eslint忽略检查配置

.eslintrc.js：eslint配置

.gitignore：git提交忽略配置

.stylelintignore：stylelint忽略检查配置

.stylelintrc.js：stylelint配置

config-overrides.js：babel编译配置

nodemon.json：nodemon配置，主要用于热更新重启koa服务

README.md：项目的说明文档，介绍了技术栈，可用脚本；提供了规范文档的链接和目录介绍链接



### 代码目录

server：json文件模拟接口

　data：配置的json文件目录

　index.js：server-json服务入口文件

　rewriter-config.js：重写路径配置

src：前端源码目录，包含所有前端的资源和代码

　api：接口目录，项目中用到的所有接口需按模块在此处编写，以便于不同模块调用和统一修改

　assets：全局公共资源目录

　　iconfont：项目中用到的自定义图标

　　img：公共图片

　　sass: 公共sass及sass变量

　components：全局公共组件，模块组件应放在模块文件夹中

　hooks：公共hooks，模块hook应放在模块文件夹中

　pages：页面模块目录，所有页面和模块应集中放在这里，模块资源应放在模块相关文件夹中

　routes：路由配置目录

　store：公共状态目录

　utils：工具方法文件夹，全局方法应放在这里

　　enums： 配置公共枚举js

　index.js：项目入口js

　serviceWorker.js：开发环境服务配置文件

　setupProxy.js：开发环境代理请求接口配置文件

　setupTests.js：开发环境代理测试配置文件

