function getEmailDomain(email) {
  const result = email.match(/@\w+.+/g);
  return result[0].replace(/@/, '');
}

module.exports = getEmailDomain;
