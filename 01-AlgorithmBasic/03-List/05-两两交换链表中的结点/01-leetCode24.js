/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    // my solution  只是单纯交换结点内部值，不太符合题意
    // if(!head || !head.next) return head;
    // let pre = head;
    // let cur = head.next;
    // while(pre && cur) {
    //     let t = pre.val;
    //     pre.val = cur.val;
    //     cur.val = t;
    //     pre = cur != null ? cur.next : null;
    //     cur = pre != null ? pre.next : pre;
    // }
    // return head;
    // Carl的解法  进行结点交换  时间复杂度：O(n)  空间复杂度：O(1)
    let ret = new ListNode(0, head);
    let temp = ret;
    while(temp.next && temp.next.next) {
        let cur = temp.next.next;
        let pre = temp.next;
        pre.next = cur.next;
        cur.next = pre;
        temp.next = cur;
        temp = pre;
    }
    return ret.next;
};