/****
 * stylelint配置
****/
module.exports = {
  // 使用的扩展库
  extends: [
    'stylelint-config-standard', // 标准的规则配置
    'stylelint-config-recess-order', // css属性书写顺序规则
  ],

  // 第三方插件
  plugins: [
    'stylelint-scss', // 支持scss
  ],

  overrides: [
    {
      files: ["src/**/*.scss"],
      customSyntax: "postcss-scss"
    }
  ],

  rules: {
    'selector-max-id': 0, // id选择器最多嵌套层数
    'max-empty-lines': 3, // 最多空行
    'rule-empty-line-before': null, // 去掉规则块前空行的规则
    'selector-list-comma-newline-after': 'always-multi-line', // 选择器列表多行时，在逗号后面总是新行
    'at-rule-no-unknown': null, // 屏蔽原生未知规则检查
    'scss/at-rule-no-unknown': true, // 使用scss插件中未知规则检查
    'declaration-block-trailing-semicolon': null, // 代码块中最后一项声明的分号限制，在jsx语法style属性中和eslint冲突
    'no-descending-specificity': null, // 优先级更高的允许写在前面
    'font-family-no-missing-generic-family-keyword': null, // 允许font-family缺少泛型系列
    'value-keyword-case': null, // 会改变js中style属性的值，因此关闭
    'color-function-notation': null, // 关闭颜色函数检查
    'selector-class-pattern': null, // 关闭指定类名格式
    'font-family-name-quotes': null, // 关闭指定字体名引号规则
    'alpha-value-notation': null, // 关闭透明度值格式指定
    'value-no-vendor-prefix': null, // 关闭没有供应商前缀限制
    'import-notation': null, // 关闭导入格式检查
    'function-no-unknown': null, // 关闭css方法检查
  }
}
