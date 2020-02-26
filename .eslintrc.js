/****
 * eslint配置
****/
module.exports = {
  // 以当前目录为根目录，不再向上查找
  root: true,
  // 运行环境
  env: {
    es6: true,
    node: true
  },
  // 使用的扩展库
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  // 配置全局变量，值为 false 表示这个全局变量不允许被重新赋值
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  // 解析器配置
  parserOptions: {
    // 使用的额外的语言特性
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,  // 支持es2018语法
    sourceType: 'module', // 指定来源的类型，"script" (默认) 或 "module"
  },
  // 第三方插件
  plugins: [
    'react'
  ],
  rules: {
    "eol-last": 0, // 关闭文件末尾强制换行
    "no-multiple-empty-lines": [1, {"max": 3}], // 空行最多不能超过3行
    "indent": [1, 2],
    "import/first": 1, // import必须在文件顶端
    "spaced-comment": 1, // 注释符号后必须有空格
    "no-trailing-spaces": 0, // 关闭尾随空白限制
    "space-before-blocks": [1, "always"], // 不以新行开始的块{前面要有空格
    "space-before-function-paren": [1, "always"], // 定义函数时括号前面要有空格
    "object-curly-spacing": [1, "always"], // 大括号内总是有空格
    "padded-blocks": 0, // 关闭块内上下空行限制
    "comma-dangle": [1, { // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号
        "arrays": "only-multiline",
        "objects": "only-multiline",
        "imports": "only-multiline",
        "exports": "only-multiline",
        "functions": "never"
    }],
  }
}
