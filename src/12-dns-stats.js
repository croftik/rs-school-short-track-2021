function getDNSStats(domains) {
  if (domains.length === 0) return {};
  const result = {};
  const temp = domains[0].split('.');
  const topLevelDomain = temp[temp.length - 1];
  let countTopLevelDomain = 0;
  const original = domains.slice();
  for (let i = 0; i < domains.length; i++) {
    let count = 0;
    for (let j = 0; j < original.length; j++) {
      if (original[j].includes(domains[i])) count++;
    }
    if (domains[i].includes(topLevelDomain)) countTopLevelDomain++;
    result[`.${domains[i].split('.').reverse().join('.')}`] = count;
  }
  result[`.${topLevelDomain}`] = countTopLevelDomain;
  return result;
}

module.exports = getDNSStats;
