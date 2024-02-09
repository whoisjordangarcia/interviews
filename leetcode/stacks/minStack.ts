// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.



// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2


class MinStack {
    arr = []
    length = 0

    constructor() {
    }

    push(val: number): void {
        let min = this.arr[this.length].min
        this.length++
        this.arr[this.length] = { val: val, min: val < min ? val : min }
    }

    pop(): void {
        this.arr[this.length] = null
        this.length--
    }

    top(): number {
        return this.arr[this.length]
    }

    getMin(): number {
        return this.arr[this.length].min
    }
}

var obj = new MinStack()
obj.push(1)
obj.push(0)
obj.push(3)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()
