// 1 backup way...
// function add(num1, num2){
//     if(num2 == undefined){
//         num2 = 0;
//     }
//     return num1 + num2;
// }
// const total = add(10);
// console.log(total);

// 2 backup way...
// function add(num1, num2){
//     num2 = num2 || 0;
//     return num1 + num2;
// }
// const total = add(10, 30);
// console.log(total);

// ES6 backup  way ...as a default parameter.
function add(num1, num2 = 0){
    return num1 + num2;
}
const total = add(10, 50);
console.log(total);
