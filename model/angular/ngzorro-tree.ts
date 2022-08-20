class Tree {
	/** 点选子节点 */
	checkNodeChildren(treeNode: NzTreeNode) {
		const children = treeNode.children;
		if (children && children.length) {
			children.forEach(child => {
				child.isChecked = treeNode.isChecked;
				this.checkNodeChildren(child);
			});
		}
	}

	/** 点选父节点 */
	checkParent(treeNode: NzTreeNode) {
		const parent = treeNode.parentNode;
		if (parent) {
			parent.isChecked = this.isAllNodesChecked(parent.children);
			parent.isHalfChecked = this.isIndeterminate(parent.children);
			this.checkParent(parent);
		}
	}

	private isAllNodesChecked(nodes: NzTreeNode[]) {
		return nodes.every((node: NzTreeNode) => node.isChecked);
	}

	private isIndeterminate(nodes: NzTreeNode[]) {
		return nodes.some((child: NzTreeNode) => child.isChecked) && !this.isAllNodesChecked(nodes);
	}
}