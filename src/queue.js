class Queue { 

    // Array is used to implement queue 
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
      return this.items.shift();
  }

  peek() {
      return this.items[0];
  }

  size() {
      return this.items.length;
  }
}

module.exports.Queue = Queue;
