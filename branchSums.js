class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
	const sums = [];
	calculate(root, 0, sums);
	
	return sums;
	
}

function calculate(node, runningSums, sums) {
	if (!node) return;
	
	const newRunningSums = runningSums + node.value;
	if (!node.left && !node.right) {
		sums.push(newRunningSums);
		return;
	}
	
	calculate(node.left, newRunningSums, sums);
	calculate(node.right, newRunningSums, sums);
}
