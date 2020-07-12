// const {add, mult, season, countOfDivisors,
// isPrime, primeNumbers} = require('../helpers');
// const chai = require('chai');
// const expect = chai.expect;

describe('Function add & mult', () => {

 it('should function add 2 5', () => {
  expect(add(2, 5)).equal(7)
 });

 it('should function add -2 -5', () => {
  expect(add(-2, -5)).equal(-7)
 });

 it('should function mult 2 5', () => {
  expect(mult(2, 5)).equal(10)
 })
})





//===========================================================
//1
// it('should season ', function () {
//    expect(season(5)).equal('Spring')
// });
// //2
// it('should countOfDivisors ', function () {
//  expect(countOfDivisors(18)).equal(4)
// });
// //3
// it('should isPrime ', function () {
//  expect(isPrime(5)).equal(true)
// });
// //4
// it('should primeNumbers ', function () {
//  expect(primeNumbers(10)).deep.equal([2, 3, 5, 7])
// })
// //5
//
// it('should countOfPrimeNumbers ', function () {
//  expect(countOfPrimeNumbers(10, 90)).equal(20)
// })
//
// //6
//
// it('should removeSpaces ', function () {
//  expect(removeSpaces('a b c')).equal('abc')
// })
//
// //7
//
// it('should removeSpacesR ', function () {
//  expect(removeSpacesR('a b   c')).equal('abc')
// })
//
// //8
//
// it('should isPalindrome ', function () {
//  expect(isPalindrome("Dia d")).equal(false)
// })
//
// //9
//
// it('should countPalindromes ', function () {
//  expect(countPalindromes(["noon", "nice", "Bob", "Pull up if i pull up", "good"])).equal(3)
// })
//
// //10
//
// it('should isVowel ', function () {
//  expect(isVowel('o')).equal(true)
// })
//=========================================


//const { avg } = require('../helpers');
const expect = require('chai').expect;
describe('Function AVG', () => {
 it('should calculate avg for positive numbers', () => {
  expect(avg([1, 2, 3])).eq(2);
  expect(avg([10, 20, 30])).eq(20);
 });
 it('should return avg 0 for empty array', () => {
  expect(avg([])).eq(0);
 });
 it('should return avg 0 without arguments', () => {
  expect(avg()).eq(0);
 });
 it('should return avg 0 if arg is not an array', () => {
  expect(avg({})).eq(0);
  expect(avg(123)).eq(0);
  expect(avg('aaa')).eq(0);
  expect(avg(null)).eq(0);
 });
 it('should ignore non numbers in avg calculation', () => {
  expect(avg([1, 2, 'a', 3])).eq(2);
  expect(avg(['a', 3])).eq(3);
 });
 it('should return 0 for all non numbers', () => {
  expect(avg(['a', '3', 'qwe'])).eq(0);
 });
});


const {add, mult, season, countOfDivisors,
 isPrime, primeNumbers, countOfPrimeNumbers,
 removeSpaces, removeSpacesR, isPalindrome,
 countPalindromes, isVowel, avg} = require('../helpers');
