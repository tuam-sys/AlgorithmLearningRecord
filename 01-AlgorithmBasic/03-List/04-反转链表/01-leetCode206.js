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
 var reverseList = function(head) {
    // my solution
    // let res = [];
    // if(!head) return null;
    // const node = new ListNode(0, head);
    // let cur = node.next;
    // while(cur) {
    //     res.push(cur.val);
    //     cur = cur.next;
    // }
    // cur = node.next;
    // res = res.reverse();
    // for(let item of res) {
    //     cur.val = item;
    //     cur = cur.next;
    // }
    // return head;
    // 双指针
    // if(!head || !head.next) return head;
    // let temp = null;
    // let pre = null;
    // let cur = head;
    // while(cur) {
    //     temp = cur.next;
    //     cur.next = pre;
    //     pre = cur;
    //     cur = temp;
    // }
    // return pre;
    // 递归：从前往后反转链表
    // var reverse = function(pre, head) {
    //     if(!head) return pre;
    //     const temp = head.next;
    //     head.next = pre;
    //     pre = head;
    //     return reverse(pre, temp);
    // }
    // return reverse(null, head);
    // 递归：从后往前反转链表
    var reverse = function(head) {
        if(!head || !head.next) return head;
        // 从后往前翻
        const pre = reverse(head.next);
        head.next = pre.next;
        pre.next = head;
        return head;
    }
    let cur = head;
    while(cur && cur.next) {
        cur = cur.next;
    }
    reverse(head);
    return cur;
};
let res = [1, 2, 3, 4];
// console.log(res.reverse());
for(let item of res) {
    console.log(item);
}