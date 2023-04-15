const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  if (disksNumber === 1){
    const sec = Math.ceil(1/turnsSpeed*3600);
    return { turns: 1, seconds: sec }
  } else {
    const m = calculateHanoi(disksNumber-1, turnsSpeed).turns*2 +1;
    const sec = Math.floor( m/turnsSpeed*3600)

    return { turns: m, seconds: sec }
  }


}

module.exports = {
  calculateHanoi
};

console.log(calculateHanoi(8, 4694));
console.log({turns: 255, seconds: 195});
