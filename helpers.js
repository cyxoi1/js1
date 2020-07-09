function add(a, b){
    return a + b;
}

function mult(a, b){
    return a * b;
}

//const arr[];


//1

function season(month){
    let res;
    switch (month) {
        case 12:
        case 1:
        case 2: res = 'Winter';
            break;
        case 3:
        case 4:
        case 5: res = 'Spring';
            break;
        case 6:
        case 7:
        case 8: res = 'Summer';
            break;
        case 9:
        case 10:
        case 11: res = 'Autumn';
            break;
        default: res = 'Wrong month';
    }
    return res;
}

//2

function countOfDivisors(n){
    let count = 0;
    for (let i = 2; i < (n / 2) + 1; i++){
        if (n % i === 0){
            count++
        }
    }
    return count;
}

//3
function isPrime(num){
    return countOfDivisors(num) === 0;
}
//4

function primeNumbers(n){
    let res = [];
    for (let i = 2; i <= n; i++){
        if (isPrime(i)) res.push(i)
    }
    return res;
}

//5

function countOfPrimeNumbers(n, m){
    let count = 0;
    for (let i = n; i <= m; i++){
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}
 //6

function removeSpaces(str){
    let res = '';
    for (let i = 0; i < str.length; i++){
        if (str[i] !== ' '){
            res = res + str[i]
        }
    }
    return res;
}

//7

function removeSpacesR(str){
    return str.replace(/ /g, '')
}

//8

function isPalindrome(str){
    str = str.toLowerCase();
    str = removeSpaces(str)
    let reverseStr = '';
    for (let i = 0; i < str.length; i++){
        reverseStr = str[i] + reverseStr;
    }
    return str === reverseStr;
}

//9

function countPalindromes(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (isPalindrome(arr[i])){
            count++
        }
    }
    return count;
}

//10

function isVowel(c){
    c = c.toLowerCase();
    let vowels = 'aeuio';
    for (let i = 0; i < vowels.length; i++){
        if (c == vowels[i]) return true;
    }
    return false
}

//=============================================

function avg(arr = []) {
    // should return avg 0 for empty array
    if (!Array.isArray(arr)) return 0;
    // should return avg 0 for empty array
    if (arr.length === 0) return 0;
    // avg calculation
    //
    let sum = 0, el = 0; //3
    for (let i = 0; i < arr.length; i++) {//1, 2,3
        if (typeof arr[i] !== 'number') continue;
        el++; //1+1+1=3
        sum += arr[i];//1+2+3=6
    }
    // should return 0 for all non numbers
    if (el === 0) return 0;
    return sum / el;
    // return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}
//module.exports = { avg };ревью



module.exports = {add, mult, season, countOfDivisors,
    isPrime, primeNumbers,
    countOfPrimeNumbers, removeSpaces, removeSpacesR,
    isPalindrome, countPalindromes, isVowel, avg};

