/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 == null) return l2;
    if(l2 == null) return l1;
    result = mergeAsc(l1,l2);
    return result;
};

function mergeAsc(l1,l2){
    var lastNode = null;
    l3 = null;

    while(l1 != null && l2 != null){
        if(l1.val <= l2.val){
            newHead = l1;
            l1 = l1.next;
        }else{
            newHead = l2;
            l2 = l2.next;
        }
        if(l3 == null){
            l3 = newHead;
        }
        if(lastNode == null){
            lastNode = newHead
        }else{
            lastNode.next = newHead;
            lastNode = lastNode.next;
        }
    }
    if(l1 == null){
        lastNode.next = l2;
    }else{
        lastNode.next = l1;
    }


    return l3;
}

function mergerDes(l1,l2){

}

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
a = [];
b = [0,1,3,5,7,9,10,11,12];
// l1 = initList(a);
l2 = initList(b);

l3 = mergeTwoLists(null,l2);

do{
    console.log(l3.val);
    l3 = l3.next;
}while(l3 != null);
