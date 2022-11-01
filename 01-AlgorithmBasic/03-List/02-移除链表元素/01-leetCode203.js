/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // 直接使用原来的链表来进行删除操作
    // 删除头部结点
    while(head != null && head.val === val) {
        head = head.next;
    }
    if(head === null) return head;
    let pre = head;
    let cur = head.next;
    // 删除非头部结点
    while(cur) {
        if(cur.val === val) {
            pre.next = cur.next;
        }
        else {
            pre = pre.next;
        }
        cur = cur.next;
    }
    return head;
    
    // 设置一个虚拟头结点在进行删除操作
    // let ret = new ListNode(0, head);
    // let cur = ret;
    // while(cur.next) {
    //     if(cur.next.val === val) {
    //         cur.next = cur.next.next;
    //         continue;
    //     }
    //     cur = cur.next;
    // }
    // return ret.next;
};
let arr = [1,2,6,3,4,5,6];
