module.exports = {
    /**
     * 构建二叉搜索树
     * @param  {array} nums
     * @return {node}
     */
    buildTree: function(nums) {
        var head = new node(nums[0]);
        // console.log('head'+head.val);
        for (var i = 1; i < nums.length; i++) {
            insertNode(nums[i], head, head);
        }
        return head;
    }
};

/**
 * @param  {number} num
 * @param  {node} parent
 * @param  {node} currentNode
 * @return {node}
 */
var insertNode = function(num, parent, currentNode) {
    if (currentNode == null) {
        newNode = new node(num);
        if (parent != null) {
            if (num > parent.val) {
                // console.log(parent.val+'rightChild'+newNode.val);
                parent.right = newNode;
            } else if (num < parent.val) {
                // console.log(parent.val+'leftChild'+newNode.val);
                parent.left = newNode;
            }
        }
        return newNode;
    } else if (num > currentNode.val) {
        return insertNode(num, currentNode, currentNode.right);
    } else if (num < currentNode.val) {
        return insertNode(num, currentNode, currentNode.left);
    }
};

/**
 * 树的节点
 * @param  {number} num
 */
var node = function(num) {
    this.val = num;
    this.left = null;
    this.right = null;
}



// buildTree([2, 3, 5, 1]);
