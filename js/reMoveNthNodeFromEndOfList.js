/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(n <= 0) return head;

    var head2 = head;//指向被删除节点之前的节点
    var p = head;
    for(var i = -n ; p.next !== null;i++ ){
        if(i >= 0){
            head2 = head2.next;
        }
        p = p.next;
    }
    console.log(i);
    if(i < -1){
        return head;
    }else if(i === -1){
        return head.next;
    }else{
        head2.next = head2.next.next;
        return head;
    }
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

a = [1,2,3,4,5];
l1 = initList(a);
l2 = removeNthFromEnd(l1,1);
do{
    console.log(l2.val);
    l2 = l2.next;
}while(l2 != null);
