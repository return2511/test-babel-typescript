/*
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

import ListNode, { genListNodeFromArr } from '../lib/list-node';

const head: ListNode | null = genListNodeFromArr([1, 2, 3, 4, 5, null]);

console.log(JSON.stringify(head));

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head: ListNode | null): ListNode | null => {
  if (!head) {
    return head;
  }

  const arr: ListNode[] = [];
  while (head) {
    arr.push(head);
    const next: ListNode | null = head.next;
    head.next = null;
    head = next;
  }

  for (let i = arr.length - 1; i > 0; i--) {
    const j = i - 1;
    arr[i].next = arr[j];
  }

  return arr[arr.length - 1];
};

// head = null;
const newHead: ListNode | null = reverseList(head);
console.log(JSON.stringify(newHead));
