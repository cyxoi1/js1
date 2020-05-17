const {add, mult} = require('../helpers');
const chai = require('chai');
const expect = chai.expect;


it('should function add 2 5', () => {
 expect(add(2,5)).equal(7)
});

it('should function add -2 -5', () => {
 expect(add(-2,-5)).equal(-7)
});

it('should function mult 2 5', () => {
 expect(mult(2,5)).equal(10)
});