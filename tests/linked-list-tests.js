const expect = require("expect");
const LinkedList = require('../src/linked-list').LinkedList;

describe('LinkedList', function () {
    let list;
  
    beforeEach(function () {
      list = new LinkedList();
    });
  
    describe('insert', function () {
      it('should have no items after no insert', function() {
        expect(list.size()).toEqual(0);
      });
      it('should have one item after insert', function () {
        const data = "Aiden";
        list.insert(data);
        expect(list.size()).toEqual(1);
        expect(list.contains(data)).toEqual(true);

        const data2 = "Luke";
        list.insert(data2);
        expect(list.size()).toEqual(2);
        expect(list.contains(data2)).toEqual(true);
      });
    });

    describe('remove', function () {
      it('should something', function () {
        // add stuff
        // expect list size to decrement
        // expect list to NOT contain data
      });
    });

    describe('contains', function () {
      it('should something', function () {
        // add stuff
        // expect list to contain data added
        // expect list to NOT contain data NOT added
      });
    });

    describe('size', function () {
      it('should something', function () {
        // add stuff
        // expect size to be accurate
      });
    });

    describe('toString', function () {
      it('should something', function () {
        // add stuff
        // expect toString to concat data ["a","b","c"] to string "a,b,c (3)"
      });
    });

  })
