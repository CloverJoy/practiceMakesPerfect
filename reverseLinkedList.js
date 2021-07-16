class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  // Write your code here.
	let currentNode = head;
	let previousNode = null;
	while (currentNode !== null) {
		const nextNode = currentNode.next;
		currentNode.next = previousNode;
		previousNode = currentNode;
		currentNode = nextNode;
	}
	return previousNode
}
