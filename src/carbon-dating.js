const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( sampleActivity ) {
  if (typeof(sampleActivity) !== 'string'){
    return false;
  } else {
    if (sampleActivity === '' || sampleActivity === ' ' || sampleActivity === '   ' ){
      return false;
    }
    let x = parseFloat(sampleActivity);
    if( x > MODERN_ACTIVITY || x <= 0 || x > 9000 || x === null || x === undefined || x == NaN ){
      return false;
    }
    let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.log(MODERN_ACTIVITY / x) / k;
    return Math.ceil(t);
}
}

module.exports = {
  dateSample
};

console.log(dateSample('WOOT!'));
