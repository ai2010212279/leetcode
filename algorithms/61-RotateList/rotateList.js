/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head == null) return head;
    if (k == 0) return head;
    var tail = head;
    var nextHead = head,
        nextHeadPre = null;

    var length = 0;
    while (tail != null) {
        tail = tail.next;
        length ++;
    }

    k = (k % length);
    if (k == 0) return head;

    tail = head;
    while (k > 1){
        tail = tail.next;
        k--;
    }

    if (tail.next == null) return head;

    while (tail.next != null) {
        nextHeadPre = nextHead;
        nextHead = nextHead.next;
        tail = tail.next;
    }

    tail.next = head;
    nextHeadPre.next = null;
    return nextHead;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function initList(arr) {
    for (i = 0; i < arr.length; i++) {

        node = new ListNode(arr[i]);
        if (i != 0) {
            lastNode.next = node;
        } else {
            head = node;
        }
        lastNode = node;

    }
    return head;
}

a = [1, 2, 3, 4, 5];
l1 = initList(a);
l3 = rotateRight(l1, 2);

do {
    console.log(l3.val);
    l3 = l3.next;
} while (l3 != null);
