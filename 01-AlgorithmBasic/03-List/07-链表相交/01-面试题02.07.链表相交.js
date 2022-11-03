/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 // 时间复杂度：O(n + m)   空间复杂度：O(1)
 var getIntersectionNode = function(headA, headB) {
    function getListLen(head) {
        let cur = head;
        let len = 0;
        while(cur) {
            len++;
            cur = cur.next;
        }
        return len;
    }

    let curA = headA;
    let curB = headB;
    let lenA = getListLen(headA);
    let lenB = getListLen(headB);
    if(lenA < lenB) {
        // 下面交换变量注意加 “分号” ，两个数组交换变量在同一个作用域下时
        // 如果不加分号，下面两条代码等同于一条代码: [curA, curB] = [lenB, lenA]
        [curA, curB] = [curB, curA];
        [lenA, lenB] = [lenB, lenA];
    }
    let i =lenA - lenB;
    while(i--) {
        curA = curA.next;
    }
    while(curA && curA !== curB) {
        curA = curA.next;
        curB = curB.next;
    }
    return curA;
};