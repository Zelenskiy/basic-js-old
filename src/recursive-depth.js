const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
// class DepthCalculator {
//   calculateDepth(arr) {
//     const s = JSON.stringify(arr)
//     console.log(s);
//     let stack = []
//     let max = 0
//     let depth = 0
//     for (let i=0; i<s.length; i++){
//       if (s[i]==='['){
//         stack.push('[')
//         depth++
//       } else if (s[i]===']'){
//         stack.pop(']')
//         depth--

//       }
//       if (depth>max) max=depth;

//     }

//     return max
//   }
// }

class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const subDepth = this.calculateDepth(arr[i]) + 1;
        if (subDepth > depth) {
          depth = subDepth;
        }
      }
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator,
};

const arr = [[], [[]]];
const obj = new DepthCalculator();
console.log(obj.calculateDepth(arr));

// const arr = [1, 2, 3, 4, 5, [1]]
// const s = JSON.stringify(arr)
// console.log(s);
// const str = JSON.stringify(arr).replace(/[^[]]+/g, '');
// console.log(arr);
// console.log(str);
