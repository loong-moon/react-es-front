## 代码书写规范

### `命名规范`

1. 所有文件夹，文件统一用pascal命名法，如pascal-case
2. 组件，页面，模块入口统一用index作为入口，如index.jsx，index.js
3. 代码内变量、属性、方法、ref用小驼峰，如xiaoTuoFeng
4. 代码内组件名、id（只用于js）用大驼峰，如DaTuoFeng
5. `actionType`用大写字母+下划线，如GET_INFO
6. 代码变量名、属性名须写完整语义，如添加任务的方法名要用addTask而不是add或task，导入数据用importXxxxData，而不是impData
7. 路由命名固定部分使用pascal命名方式，动态部分使用驼峰命名法，使用的单词应选择与产品模块业务紧密相连的，而不应使用脱离业务的单词，如react、front等；禁止连续动态参数的设置，如：`/book/:bookType/:id`（非法），`/book/type/:typeId/detail/:id`(正解)

### `js/jsx规范`

1. 每个文件超过300行考虑拆分，不超过500行
2. 每个文件必须有头部注释-包括描述、创建者、日期；每块代码必须有注释
3. 组件中各项`state`的含义必须注释清楚，不同功能模块的`state`属性用空行隔开
4. 工具类和接口类中各方法的使用必须注释清楚
5. 只在组件内部使用的`state`写在组件内部，禁止保存在`store`中；非用于更新页面的属性不要写在`state`中
6. 业务功能实现需要多层传递`props`时，必须抽取到`store`中
7. 数组，对象的每一项必须另起一行，禁止在单行内写很多属性
8. 可以写成函数组件的，禁止写成类组件

### `css/scss规范`

1. css中禁止使用id，只能使用class

2.  组件内采取单根形式，一个组件只有一个根class，其他class都写在根class内，根样式命名：功能或BEM思想，如： 

   ```
   .site-search{} /* 块 */
   
   .site-search__field{} /* 元素 */
   
   .site-search--full{} /* 修饰符 */ 
   ```

3. 非根样式采用pascal命名法，如block-title

4. 每行一个属性，添加必要的注释

5. 属性建议遵循先布局后描述，先自身后子元素的顺序书写，项目中用了`stylelint-config-recess-order`，不符合将无法提交代码