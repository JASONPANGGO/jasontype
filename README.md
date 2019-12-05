# 极简类型检测函数type

## usage
1. `npm i jasontype`
2. 引用type函数返回其类型
```javascript
const type = require('jasontype')

console.log(type([])) // Array
console.log(type({})) // Object
console.log(type(1)) // number
console.log(type(false)) // boolean
console.log(type(null)) // null
console.log(type(undefined)) // undefined
console.log(type(Symbol(0))) // symbol
console.log(type('jason')) // string
console.log(type(type)) // function
```