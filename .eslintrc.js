// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "standard"
  ],
  // required to lint *.vue files
  plugins: [
    "vue"
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "jsx-a11y/anchor-is-valid": [0],
    "indent": [1, 2, { "SwitchCase": 1 }],
    "vue/script-indent": ["error", 2, {"baseIndent": 1}],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "new-cap": 2,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    "new-parens": 2,//new时必须加小括号
    "camelcase": 1,//强制驼峰法命名
    "callback-return": 1,//避免多次调用回调
    "no-undef": 2,//不能有未定义的变量,
    "no-shadow": 2,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    "no-proto": 2,//禁止使用__proto__属性
    "no-nested-ternary": 1,//禁止使用嵌套的三目运算
    "no-use-before-define": 2,//未定义前不能使用
    "no-unused-vars": [2, { "vars": "all", "args": "after-used" }],//不能有声明后未被使用的变量或参数
    "no-unused-expressions": 2,//禁止无用的表达式
    "no-unreachable": 2,//不能有无法执行的代码
    "no-unneeded-ternary": 2,//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    "no-eval": 2,//禁止使用eval
    "no-func-assign": 2,//禁止重复的函数声明
    "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-alert": 2,//禁止使用alert confirm prompt
    "no-console": 0,
    "quote-props": ["warn", "consistent-as-needed"],
    "no-return-assign": 0,
    "comma-dangle": [2, "never"]//对象字面量项尾不能有逗号
  },
  overrides:[
    {
      "files":["*.vue"],
      "rules":{
        "indent":"off"
      }
    }
  ]
};
