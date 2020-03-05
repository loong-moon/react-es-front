/****
 * stylelint配置
****/
module.exports = {
  // 使用的扩展库
  extends: [
    'stylelint-config-standard', // 标准的规则配置
    'stylelint-config-recess-order', //
  ],
  // 第三方插件
  plugins: [
    // 'stylelint-order', // 书写顺序
    'stylelint-scss', // 支持scss
  ],
  rules: {
    "selector-max-id": 0, // id选择器嵌套层数
    // "function-url-quotes": "double", // url为双引号
    // "max-empty-lines": 3, // 最多空行
    // "string-quotes": "double", // 字符串引号为双引号
  }
}
