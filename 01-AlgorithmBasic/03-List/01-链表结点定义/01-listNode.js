class ListNode {
    val;
    next;
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

let head = new ListNode(5);
let tail = new ListNode(6);
head.next = tail;
console.log(head.next);