function removeKFromList(l, k) {
  let list = l;
  let head = l;
  let previous = null;
  while (list) {
    if (list.value === k) {
      if (previous === null) head = list.next;
      else previous.next = list.next;
    }
    previous = list;
    list = list.next;
  }
  return head;
}

module.exports = removeKFromList;
