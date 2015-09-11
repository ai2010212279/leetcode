module.exports = {
    /**
     * @param  {node} head 当前节点
     * @param  {node} parent 当前节点的父节点
     * @param  {number} target 需要删除的值
     * @return {bool}
     */
    deleteNodeFromBST: function(head, parent, target) {

        if (head == null) {
            return false;
        }
        if (head.val === target) {
            //删除叶子节点
            if (head.left == null && head.right == null) {
                if(parent.left && parent.left.val == head.val){
                    parent.left = null;
                }else{
                    parent.right = null;
                }
            } else if (head.left == null) {//删除左孩子为空的节点
                parent.right = head.right;
            } else if (head.right == null) {//删除右孩子为空的节点
                parent.left = head.left;
            }else{//删除左右孩子均不为空的节点
                var replacer = head.right;
                var replacerParent = head;
                while(replacer.left != null){
                    replacerParent= replacer;
                    replacer = replacer.left;
                }
                var headVale = head.val;
                replacerParentVale = replacerParent.val;

                head.val = replacer.val;
                //由于需要删除的节点右节点的左几点为null(head.right.left==null),因此
                //没有进入while(replacr.left != null)循环，因此head == repacerParent
                //此时需要直接将需要删除节点的右节点直接替换需要删除的节点
                if(headVale == replacerParentVale){
                    replacerParent.right = replacer.right;
                }else{
                    replacerParent.left = replacer.right;
                }
                replacer.right = null;
                // if(replacerParent.left && replacerParent.left.val == replacer.val){
                //     console.log(123);
                //     replacerParent.left = replacer.right;
                // }else{
                //     console.log(456);
                //     replacerParent.right = replacer.right;
                // }
            }
            delete head;
            return true;

        }
        if (target > head.val) {
            return this.deleteNodeFromBST(head.right, head, target);
        } else {
            return this.deleteNodeFromBST(head.left, head, target);
        }
    }

}
