
class ListNode {
    constructor(value) {
        return {
            nextNode: undefined,
            value: value
        }
    }
}

class LinkedList {

    // Array is used to implement stack 
    constructor() 
    { 
        this.head = undefined;
        this.count = 0; // keep track of count
    } 
  
    // Functions to be implemented 

    insert(value) {
        // insert at beginning of list
        var newNode = new ListNode(value);
        newNode.nextNode = this.head; // point our new node at the current head
        this.head = newNode; // update head to point at our new node

        // increment count
        this.count++;
    }

    remove(value) {
        // find value and remove
        // decrement count
    }

    contains() {
        // find value and return true or false
    }

    size() {
        return this.count;
    }

    toString() {
        // return list as a comma-delimited string of all values
    }
}

module.exports.LinkedList = LinkedList;
