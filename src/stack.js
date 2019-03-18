class Stack { 

      // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 
  
    // Functions to be implemented 
    push(item) {
        this.items.push(item);
    }

    pop() {
        // console.log(this.size());
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }
}

module.exports.Stack = Stack;
