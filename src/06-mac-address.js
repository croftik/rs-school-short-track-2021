function isMAC48Address(n) {
  return /^[A-F0-9]{2}(-)([A-F0-9]{2}\1){4}[A-F0-9]{2}$/g.test(n);
}

module.exports = isMAC48Address;
