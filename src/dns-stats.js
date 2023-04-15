const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const dns = {};
  for (const domain of domains) {
    const domainParts = domain.split('.').reverse();
    let subDomain = '';
    for (const part of domainParts) {
      subDomain = `${subDomain}.${part}`;
      dns[subDomain] = (dns[subDomain] || 0) + 1;
    }
  }
  return dns;
}



module.exports = {
  getDNSStats
};


console.log(getDNSStats(['epam.com', 'info.epam.com']));
console.log({ '.com': 2, '.com.epam': 2, '.com.epam.info': 1 });
// console.log(getDNSStats(['epam.com']));
// console.log({ '.com': 1, '.com.epam': 1 });


