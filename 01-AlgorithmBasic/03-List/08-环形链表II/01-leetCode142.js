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
 var detectCycle = function(head) {
    // 方法一： 两个独立的while循环
    // if(!head || !head.next) return null;
    // let slow = head.next;
    // let fast = head.next.next;
    // while(fast && fast.next && slow !== fast) {  // 先判断是否是环形链表
    //     slow = slow.next;
    //     fast = fast.next.next;
    // }
    // if(!fast || !fast.next) return null;
    // slow = head;
    // while(slow !== fast) {
    //     slow = slow.next;
    //     fast = fast.next;
    // }
    // return slow;
    
    // 方法二： 两个嵌套的while循环
    if(!head || !head.next) return null;
    let slow = head.next;
    let fast = head.next.next;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {   // 先判断是否是环形链表
            slow = head;
            while(slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};