var foo = require("./buildBinarySearchTree.js");
// var headNode = foo.buildTree([0, 3, 2, 1, 6, 5, 4, 10, 8]);
// result = [];
// inorderTraveralBST(headNode, result);
// console.log(result);

module.exports = {

    /**
    中序遍历二叉搜索树。
     * @param  {node} head
     * @param  {array} arr
     */
    inorderTraveralBST : function (head, arr) {
        if (head == null) return;
        this.inorderTraveralBST(head.left, arr);
        arr.push(head.val);
        this.inorderTraveralBST(head.right, arr);
    }
}
