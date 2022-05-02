const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  let namber = l;
  const elem = addNext(namber, k);

  if (elem < 0) { return }

  if (elem === 0) {
    namber = namber.next;
    return removeKFromList(namber, k);
  } else {
    let indexs = null;
    let arr = namber;

    for (let i = 0; i < elem; i += 1) {
      indexs = arr;
      arr = arr.next;
    }
    indexs.next = arr.next;
   
    if (arr.next !== null && arr.next.value === k) {
      arr = arr.next;
      indexs.next = arr.next;
    }
  }

  return namber;
}

function addNext(l, k) {
  let namber = l;
  let elem = 0;

  while (namber.value) {
    if (namber.value === k) {
      return elem;
    } else {
      namber = namber.next;
    }
    elem += 1;
  }

  return -1;
}

module.exports = {
  removeKFromList
};
