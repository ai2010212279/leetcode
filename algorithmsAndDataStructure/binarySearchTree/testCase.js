//测试searchInBST
// var foo = require("./buildBinarySearchTree.js");
// var foo1 = require("./searchInBST.js");
// head = foo.buildTree([9, 3, 1, 2, 5, 12, 19, 10, 32]);
// result = foo1.searchInBST(head, 5);
// console.log(result);


//测试deleteNodeInBST
var foo = require("./buildBinarySearchTree.js");
var l1 = require("./inorderTraveral.js");
var t = require("./deleteNodeFromBST.js");
head = foo.buildTree([9, 2, 3, 1,  5, 12, 11, 19, 10, 32,20,21]);
a = t.deleteNodeFromBST(head,null,1);
result = [];
l1.inorderTraveralBST(head,result);
console.log(a);
console.log(result);
