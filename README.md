技术栈：react + react-router + redux + axios + antd + sass + eslint + stylelint + koa + mockjs + http-proxy-middleware + react-app-rewired



## 可用脚本

在项目目录中，你可以运行:

### `yarn start`

以开发模式运行项目，<br />在浏览器中可以通过打开 [http://localhost:3000](http://localhost:3000) 查看。

编辑时支持热更新，<br />
还可以在控制台中看到所有lint错误。

### `yarn test`

在交互式监视模式下启动测试运行程序。<br />
有关更多信息请参阅 [running tests](https://facebook.github.io/create-react-app/docs/running-tests) 。

### `yarn build`

在 `build` 文件夹生成生产环境文件。<br />
在生产模式中正确的生成打包文件，并优化构建以获得最佳性能。

生成的文件已经压缩，文件名添加了哈希值。<br />
运行完成后就可以用于部署了。

更多相关信息请参考 [deployment](https://facebook.github.io/create-react-app/docs/deployment) 。

### `yarn eject`

**注意: 这是一个单向操作，一旦 `eject`, 就不能撤回了!**

这个操作用于生成本地的webpack配置，不推荐执行，项目中已经使用 `customize-cra` 覆盖webpack配置，请通过该方法配置自定义webpack配置！

### `yarn lint`

检测当前项目中js和jsx文件是否有不符合规范的。

### `yarn lint-fix`

修复js和jsx文件中不符合规范的代码。

慎用，不能确保修复所有不符合规范的代码。

### `yarn lintstyle`

检测当前项目中css和scss文件是否有不符合规范的。

### `yarn server`

运行一个server-json mock服务，可以用来模拟数据返回。

把请求地址代理到`http://localhost:3300`即可返回已经配置好的数据。



## 项目规范

在项目中提交的时候会进行代码检查，如果不符合规范将不能提交:

- [代码书写规范](./doc/code-standard.md)
- [git协作规范](./doc/git-standard.md)
- [接口规范](./doc/api-standard.md)



## 目录介绍

[目录介绍](./doc/directory.md)

