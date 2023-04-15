const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

//  function uniqueSortedChars(str) {
//   const set = new Set(str); // створюємо множину з унікальних символів рядка
//   const sortedChars = Array.from(set).sort(); // перетворюємо множину в масив, сортуємо його
//   return sortedChars.join(''); // з'єднуємо символи масиву у новий рядок і повертаємо його
// }

// function getCommonCharacterCount(s1, s2) {
//   s1 = uniqueSortedChars(s1);
//   // s2 = uniqueSortedChars(s2);
//   console.log(s1);
//   console.log(s2);
//   let ts = "";
//   let c = 0;
//   for (let i = 0; i < s1.length; i++) {
//     for (let j = 0; j < s2.length; j++) {
//       if (s1[i]===s2[j]) {
//         c++;
//       }
//     }
//   }

//   return c;
// }

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  for (let char of s1) {
    if (s2.includes(char)) {
      count++;
      s2 = s2.replace(char, ""); // remove the matched character from s2
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};

// console.log(getCommonCharacterCount("aabcc", "adcaa"));
