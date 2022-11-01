class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Initialize your data structure here.
 * 单链表 储存头尾节点 和 节点数量
 */
var MyLinkedList = function() {
    this._size = 0;
    this._head = null;
    this._tail = null;
};

/** 
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function(index) {
    if(index < 0 || index >= this._size) return null;
    // 创建虚拟头结点
    let cur = new ListNode(0, this._head);
    // 0 --> head
    while(index-- >= 0) {
        cur = cur.next;
    }
    return cur;
}
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this._size) return -1;
    // 获取当前结点
    return this.getNode(index).val;
};

/** 
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new ListNode(val, this._head);
    this._head = node;
    this._size++;
    if(!this._tail) {
        this._tail = node;
    }
};

/** 
 * * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const node = new ListNode(val, null);
    this._size++;
    if(this._tail) {
        this._tail.next = node;
        this._tail = node;
        return;
    }
    this._head = node;
    this._tail = node;
};

/** 
 * * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this._size) return;
    if(index <= 0) {
        this.addAtHead(val);
        return;
    }
    if(index === this._size) {
        this.addAtTail(val);
        return;
    }
    // 获取目标的上一个结点
    const node = this.getNode(index - 1);
    node.next = new ListNode(val, node.next);
    this._size++;
};

/** 
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this._size) return;
    if(index === 0) {
        this._head = this._head.next;
        // 如果删除的这个结点同时是尾结点，要处理尾结点
        if(index === this._size - 1) {
            this._tail = this._head;
        }
        this._size--;
        return;
    }
    // 获取目标结点的上一个结点
    const node = this.getNode(index - 1);
    node.next = node.next.next;
    if(index === this._size - 1) {
        this._tail = node;
    }
    this._size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */