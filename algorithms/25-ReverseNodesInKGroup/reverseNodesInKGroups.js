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
 * compexity O(n) actually O(2n);
 */
var reverseKGroup = function(head, k) {
    var endNode = head;
    var startNode = head;
    var nodeList = [];
    var i = 0;
    while(endNode != null){
        while (i < k && endNode != null){
            nodeList.push(endNode.val);
            endNode = endNode.next;
            i++;
        }
        if (i == k){
            while(nodeList.length > 0){
                var value = nodeList.pop();
                startNode.val = value;
                startNode = startNode.next;
            }
            i = 0;
        }else {
            break;
        }
    }

    return head;
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
l3 = reverseKGroup(l1,200000);

do {
    console.log(l3.val);
    l3 = l3.next;
} while (l3 != null);
