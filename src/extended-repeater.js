const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.hasOwnProperty("repeatTimes")
    ? options.repeatTimes
    : 1;
  const separator = options.hasOwnProperty("separator")
    ? options.separator
    : "+";
  let addition = options.hasOwnProperty("addition")
    ? String(options.addition)
    : "";
  const additionRepeatTimes = options.hasOwnProperty("additionRepeatTimes")
    ? options.additionRepeatTimes
    : 1;
  const additionSeparator = options.hasOwnProperty("additionSeparator")
    ? options.additionSeparator
    : "|";

  let result = "";
  for (let i = 0; i < repeatTimes; i++) {
    result += String(str);
    for (let j = 0; j < additionRepeatTimes; j++) {
      result += addition;
      if (j !== additionRepeatTimes - 1) {
        result += additionSeparator;
      }
    }
    if (i !== repeatTimes - 1) {
      result += separator;
    }
  }

  return result;
}

module.exports = {
  repeater,
};

// console.log(repeater('STRING', { repeatTimes: 3, separator: '', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })); // 'STRINGPLUS00PLUS00PLUSSTRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
// console.log(repeater('Hello', { repeatTimes: 5 })); // 'HelloHelloHelloHelloHello'
// console.log(repeater('hey', { repeatTimes: 3, separator: '-', addition: 'yo', additionRepeatTimes: 2 })); // 'heyoyo-yoyo-heyoyo-yoyo-heyoyo-yoyo-'