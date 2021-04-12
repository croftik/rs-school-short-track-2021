/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const original = names.slice();
  for (let i = 1; i < names.length; i++) {
    let k = 0;
    for (let j = 0; j < i; j++) {
      if (names[i] === original[j]) {
        k++;
        original[i] = `${names[i]}(${k})`;
        for (let m = 0; m < i; m++) {
          if (original[i] === original[m]) {
            k++;
            original[i] = `${names[i]}(${k})`;
          }
        }
      }
    }
  }
  return original;
}

module.exports = renameFiles;
