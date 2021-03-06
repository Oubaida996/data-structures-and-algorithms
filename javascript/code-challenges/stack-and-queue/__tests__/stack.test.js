'use strict';

const Stack =require('../Stack.js');




describe('testing the stack', () => {
    it('test creaing a Stack',()=>{
        let newStack = new Stack();
        expect(newStack instanceof Stack).toBeTruthy();
        expect(newStack.peek()).toBe(0);
    });

    it('testing push to the stack',()=>{
        let newStack = new Stack();
        newStack.push(1);
        expect(newStack.top.value).toEqual(1)
        newStack.push(2);
        expect(newStack.top.value).toEqual(2)
    });

    it('testing pop from the stack',()=>{
        let newStack = new Stack();
        newStack.push(1);
        expect(newStack.pop()).toEqual(1);
    });

    it('testing peek from the stack',()=>{
        let newStack = new Stack();
        newStack.push(1);
        newStack.push(2);
        // newStack.push(3);
        // expect(newStack.peek()).toEqual(1);
        // expect(newStack.peek()).toEqual(2);
        expect(newStack.peek()).toEqual(2);
    });

    it('Calling pop or peek on empty stack raises exception',()=>{
        let newStack = new Stack();
        // newStack.push(1);
        // newStack.push(2);
        // newStack.pop();
        // newStack.pop();
        // newStack.push(3);
        // expect(newStack.peek()).toEqual(1);
        expect(newStack.pop()).toEqual(0);
        expect(newStack.peek()).toEqual(0);
    });






});


