class Stack { 

      // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 
  
    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length === 0) {
            return undefined;
        }
        return this.items.pop();
    }

    size() {
        return this.items.length;
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    solvePostfix(postfixStr) {
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }

        this.items = [];
        const postfix = postfixStr.split(" ");
        for (var i = 0; i < postfix.length; i++) {
            if (isNumeric(postfix[i])) {
                this.push(postfix[i]);
            } else { // for operators (non-numeric)
                if (this.size() < 2) {
                    return undefined;
                }
                const a = this.pop();
                const b = this.pop();
                if (postfix[i] === "+") {
                    this.push(parseInt(a) + parseInt(b));
                } else if (postfix[i] === "-") {
                    this.push(parseInt(b) - parseInt(a));
                } else if (postfix[i] === "*") {
                    this.push(parseInt(a) * parseInt(b));
                } else if (postfix[i] === "/") {
                    this.push(parseInt(b) / parseInt(a));
                } else if (postfix[i] === "^") {
                    this.push(Math.pow(parseInt(b), parseInt(a)));
                }
            }
        }
        // there should only be one number on the stack for our solution
        if (this.size() > 1) {
            return undefined;
        } else {
            return this.pop();
        }
    }

}

module.exports.Stack = Stack;
