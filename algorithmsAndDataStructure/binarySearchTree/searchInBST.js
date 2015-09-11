module.exports = {
    /**
     * @param  {node} head
     * @param  {number} target
     * @return {bool}
     */
    searchInBST: function(head, target) {
        if (head == null) {
            return false;
        }
        if (head.val === target) {
            return true;
        }
        if (target > head.val) {
            return this.searchInBST(head.right, target);
        } else {
            return this.searchInBST(head.left, target);
        }
    }
}
