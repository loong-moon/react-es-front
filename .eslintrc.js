/** **
 * eslint配置
****/
module.exports = {
  // 以当前目录为根目录，不再向上查找
  root: true,
  // 运行环境
  env: {
    browser: true, // 支持浏览器全局变量
    es6: true, // 支持es6全局变量
    node: true, // 支持node环境全局变量
    jest: true, // 支持jest测试全局变量
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
  // 指定eslint解析器
  parser: '@babel/eslint-parser',
  // 解析器配置
  parserOptions: {
    // 使用的额外的语言特性
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018, // 支持es2018语法
    sourceType: 'module', // 指定来源的类型，"script" (默认) 或 "module"
    requireConfigFile: false, // 当parser: '@babel/eslint-parser'时需要关闭查找babel配置文件
    babelOptions: {
      parserOpts: {
        plugins: ['jsx']
      }
    }
  },
  // 第三方插件
  plugins: [
    'react', // react语法检查
    'react-hooks', // hooks语法检查
  ],
  // 共享设置
  settings: {
    react: {
      version: 'detect' // 自动检测当前安装的react版本
    }
  },
  rules: {
    'eol-last': 0, // 关闭文件末尾强制换行
    'no-multiple-empty-lines': [1, { 'max': 3 }], // 空行最多不能超过3行
    'indent': [1, 2], // 缩进2个空格
    'import/first': 1, // import必须在文件顶端
    'spaced-comment': 1, // 注释符号后必须有空格
    'no-trailing-spaces': 0, // 关闭尾随空白限制
    'space-before-blocks': [1, 'always'], // 不以新行开始的块{前面要有空格
    'space-before-function-paren': [1, 'always'], // 定义函数时括号前面要有空格
    'object-curly-spacing': [1, 'always'], // 大括号内总是有空格
    'padded-blocks': 0, // 关闭块内上下空行限制
    'comma-dangle': [1, { // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
      'imports': 'only-multiline',
      'exports': 'only-multiline',
      'functions': 'never'
    }],
    'operator-linebreak': [1, 'after'], // 语句太长时，运算符放在行位
    'react/display-name': 0, // 关闭组件名检查
    'no-unused-vars': 1, // 未使用变量设置为警告
    'quote-props': 0, // 关闭判断是否使用引号
  }
}
