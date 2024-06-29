const _ = require('lodash')
const items = [2,[3,4,[5,[6,[7]]]]]
const nums = _.flattenDeep(items)
console.log(nums)