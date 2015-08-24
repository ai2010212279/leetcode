/**
No.2 Add Two Numbers
    You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

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
var addTwoNumbers = function(l1, l2) {
    carryOver = 0;
    lastNode = null;
    headNode = null;
    do{
        l1Value = (l1 === null) ? 0 : l1.val;
        l2Value = (l2 === null) ? 0 : l2.val;
        resultValue = l1Value + l2Value + carryOver;
        currentNode = new ListNode(resultValue % 10);
        // console.log("val1:"+l1Value+"  val2:"+l2Value+" carryOver:"+carryOver+"  result:"+ (resultValue%10));
        carryOver = parseInt(resultValue/10);
        if(headNode === null){
            headNode = currentNode;
        }else{
            lastNode.next = currentNode;

        }
        lastNode = currentNode;
        l1 = (l1 === null) ? null : l1.next;
        l2 = (l2 === null) ? null : l2.next;
    }while(l1 !== null || l2 !== null || carryOver !== 0);
    return headNode;
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
a = [0];
b = [0];
l1 = initList(a);
l2 = initList(b);
result = addTwoNumbers(l1,l2);
do{

    if(result !== null){
        console.log(result.val);
        console.log(result.next);
    }
    result = result.next;;
}while(result !== null);

