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
var swapPairs = function(head) {
    if(head == null || head.next == null) return head;

    var p1 = null;
    var p = head;
    var newHead = p.next;
    var lastNode = p;

    while(p != null && p.next != null){
        p1 = p.next;
        lastNode.next = p1;
        p.next = p.next.next;
        p1.next = p;
        lastNode = p;

        p = p.next;
    }
    return newHead;
};

function ListNode(val) {
   this.val = val;
   this.next = null;
}

function initList (arr) {
    for(i = 0;i < arr.length;i++){

        node = new ListNode(arr[i]);
        if(i != 0){
            lastNode.next = node;
        }else{
            head = node;
        }
        lastNode = node;

    }
    return head;
}
a = [0,1,2,3,4];
b = [0,1,3,5,7,9,10,11,12];
l1 = initList(a);
// l2 = initList(b);

l3 = swapPairs(l1);

do{
    console.log(l3.val);
    l3 = l3.next;
}while(l3 != null);
