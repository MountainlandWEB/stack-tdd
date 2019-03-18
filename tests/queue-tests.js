const expect = require("expect");
const Queue = require('../src/queue').Queue;

describe('Queue', function () {
    let queue;
  
    beforeEach(function () {
      queue = new Queue();
    })
  
    describe('push', function () {
      it('should have the data pushed at the end of the queue', function () {
        let data = { id: 34234 };
        queue.push(data);
        expect(queue.peek()).toEqual(data);
      })
      it('should push the data even if it already exists', function () {
        let data = { id: 34234 };
        queue.push(data);
        queue.push(data);
        expect(queue.size()).toEqual(2);
      })
      it('should have a size of 1 after data is pushed', function () {
        let data = { id: 34234 };
        queue.push(data);
        expect(queue.size()).toEqual(1);
      })
    })
    describe('peek', function () {
      it('should return the data at the front of the queue', function () {
        let data = { id: 34234 };
        let otherData = { id: 43434 };
        queue.push(data);
        queue.push(otherData);
        expect(queue.peek()).toEqual(data);
      })
      it('should return undefined if queue is empty', function () {
        expect(queue.size()).toEqual(0);
        expect(queue.peek()).toEqual(undefined);
      })
  
    })
    describe('pop', function () {
      it('should pop the data from the front of the queue', function () {
        let data = { id: 34234 };
        let otherData = { id: 43434 };
        queue.push(data);
        queue.push(otherData);
        queue.pop();
        expect(queue.peek(data)).toEqual(otherData);
      })
      it('should return undefined if queue is empty', function () {
        expect(queue.size()).toEqual(0);
        expect(queue.pop()).toEqual(undefined);
      })
      it('should have a size of 0 after popping the data from the queue', function () {
        let data = { id: 34234 };
        queue.push(data);
        expect(queue.size()).toEqual(1);
        queue.pop();
        expect(queue.size()).toEqual(0);
      })
  
    })
    describe('size', function () {
      it('should return 3 after pushing three things into queue', function () {
        let data = { id: 34234 };
        let otherData = { id: 54554 };
        let oneMoreData = { id: 23432 };
        queue.push(data);
        queue.push(otherData);
        queue.push(oneMoreData);
        expect(queue.size()).toEqual(3);
      })
      it('should return 0 if no items in the queue', function () {
        expect(queue.size()).toEqual(0);
      })
  
    })
  })
