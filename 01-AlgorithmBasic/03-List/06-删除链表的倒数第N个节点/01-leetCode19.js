/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    // my solution  计算结点总数法
    // let len = 0;
    // let dummyHead = new ListNode(0, head);
    // let ret = dummyHead;
    // while(dummyHead.next) {
    //     len++;
    //     dummyHead = dummyHead.next;
    // }
    // let index = len - n + 1;
    // let cur = ret;
    // let i = 1;
    // while(cur.next) {
    //     if(i === index) {
    //         cur.next = cur.next.next;
    //         i++
    //         continue;
    //     }
    //     cur = cur.next;
    //     i++;
    // }
    // return ret.next;

    // Carl的解法  快慢指针法  时间复杂度：O(n)  空间复杂度：O(1)
    let ret = new ListNode(0, head);
    let fast = ret;
    let slow = ret;
    while(n--) {
        fast = fast.next;
    }
    while(fast.next !== null) {
        fast = fast.next;
        slow = slow.next
    }
    slow.next = slow.next.next;
    return ret.next;
};