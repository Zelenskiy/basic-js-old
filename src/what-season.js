const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

// function getSeason(date) {
//   if (!date) {
//     throw new Error('Unable to determine the time of year!');
//   }

//   if (!(date instanceof Date && !isNaN(date.valueOf()))) {
//     throw new Error('Invalid date!');
//     // return 'Invalid date!'
//   }

//   if (isNaN(date.getTime())) {
//     throw new Error('Invalid date!');
//   }

//   if (new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() < date.getDate()) {
//     throw new Error('Invalid date!');
//   }

//   const month = date.getMonth();

//   if (month === 11 || month <= 1) {
//     return 'winter';
//   } else if (month >= 2 && month <= 4) {
//     return 'spring';
//   } else if (month >= 5 && month <= 7) {
//     return 'summer';
//   } else {
//     return 'autumn';
//   }
// }
function getSeason(date="no-value") {
  if (date === "no-value") {
    return "Unable to determine the time of year!";
  }

  if (date instanceof Date) {
    if (Object.prototype.toString.call(date) != "[object Date]")
      throw new Error("Caught fake date!");

    const month = date.getMonth();
    switch (month) {
      case 0:
      case 1:
      case 11:
        return "winter";
      case 2:
      case 3:
      case 4:
        return "spring";
      case 5:
      case 6:
      case 7:
        return "summer";
      case 8:
      case 9:
      case 10:
        return "autumn";
    }
  }
  throw new Error("Wrong argument passed!");
}

module.exports = {
  getSeason,
};

console.log(getSeason(new Date(83, 9, 25, 16, 20, 23, 544)));
// console.log(getSeason(() => new Date()));
