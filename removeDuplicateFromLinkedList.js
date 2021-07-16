class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
	let currentNode = linkedList;
	while (currentNode !== null) {
		let nextNonRepeatNode = currentNode.next;
		while (nextNonRepeatNode !== null && nextNonRepeatNode.value === currentNode.value ) {
			nextNonRepeatNode = nextNonRepeatNode.next;
		}
		currentNode.next = nextNonRepeatNode;
		currentNode = nextNonRepeatNode
	}
  return linkedList;
}
