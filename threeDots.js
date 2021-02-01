// add multiple array in a just 1 array..1 way..
// const ages = [10, 20, 13, 24];
// const ages2 = [54, 12, 44, 36, 14, 40];
// const ages3 = [9];
// const ages4 = [ 43, 22, 54, 24, 33, 69];
// const allAges = ages.concat(ages2).concat(ages3).concat(ages4);
// console.log(allAges);

// ES6.. three dots...
// const ages = [10, 20, 13, 24];
// const ages2 = [54, 12, 44, 36, 14, 40];
// const ages3 = [9];
// const ages4 = [ 43, 22, 54, 24, 33, 69];
// const allAges = ages.concat(ages2).concat(ages3).concat(ages4);
// const allAges2 = [...ages, ...ages2, 9, ...ages4];
// console.log(allAges2);

//...........
const business = 650;
const minister = 450;
const sochib = 250;
// const maximum = Math.max(business, minister, sochib);
const money = [650, 450, 250];
const maximum = Math.max(...money);
console.log(maximum);
