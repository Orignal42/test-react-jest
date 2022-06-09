import React from 'react'

function sum(a, b){

    return a + b;
}

describe('sum', function () {
    
    expect(5).toEqual(sum(2,3));
});

function arrayify(input = []) {
    return Array.isArray(input) ? input : [input];
}

 
describe('arrayify', () => {
    it('returns an empty array when given nothing', () => {

        expect(arrayify()).toEqual([]);
    });

    it('returns the array-ed version of what it is given', () => {
        
        expect(arrayify('ballon')).toEqual(['ballon']);
    });

    it('returns the array if it is given an array', () => {
        expect(arrayify(['re'])).toEqual(['re']);
    });
});