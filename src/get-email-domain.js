const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const parsed = email.split('@');
  const domain = parsed[parsed.length - 1];
  return domain[0] === '.' ? domain.slice(1) : domain;
}

module.exports = {
  getEmailDomain
};
