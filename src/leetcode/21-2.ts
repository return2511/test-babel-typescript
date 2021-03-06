/*
将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class ListNode {
  val: any;
  next: ListNode | null;

  constructor(val: any, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

const node3: ListNode = new ListNode(4);
const node2: ListNode = new ListNode(2, node3);
const node1: ListNode = new ListNode(1, node2);
const list1 = node1; // 1 -> 2 -> 4

const node6: ListNode = new ListNode(4);
const node5: ListNode = new ListNode(3, node6);
const node4: ListNode = new ListNode(1, node5);
const list2 = node4; // 1 -> 3 -> 4

/**
 * 【方案二：递归1】
 * 与方案三同样是递归，但这种写法得到的执行用时更短
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head = new ListNode(null);
  const getNext = (l1: ListNode | null, l2: ListNode | null, cur: ListNode) => {
    if (l1 && l2) {
      if (l1.val > l2.val) {
        cur.next = l2;
        getNext(l1, l2.next, cur.next);
      } else {
        cur.next = l1;
        getNext(l1.next, l2, cur.next);
      }
    } else if (l1 === null) {
      cur.next = l2;
    } else {
      cur.next = l1;
    }
  };
  getNext(l1, l2, head);
  return head.next;
};

console.log(JSON.stringify(mergeTwoLists(list1, list2)));

export default { mergeTwoLists };
