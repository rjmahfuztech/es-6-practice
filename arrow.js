// Common way.....
function doubleIt(num){
    return num * 2;
}
const result = doubleIt(5);
console.log(result);

// Another way..variable name as a parameter name..
const doubleIt2 = function(num2){
    return num2 * 5;
}
const result2 = doubleIt2(5);
console.log(result2);

// ES6 especial way...In one line..single parameter.
const oneLine = num3 => num3 * 3;
const result3 = oneLine(3);
console.log(result3);

// ES6..using more then one parameter In one line..
const oneLine2 = (p, q) => p + q;
const result4 = oneLine2(15, 10);
console.log(result4);

// ES6..without any parameter...In one line..
const oneLine3 = () => 30 * 2;
const result5 = oneLine3();
console.log(result5);

// ES6..multiple line arrow function.. using arrow symbol..
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result6 = doMath(8, 6);
console.log(result6);    