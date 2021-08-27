"use strict";
// function toggle(){

//     // let element = document.getElementById('demo');

//     // if(element.style.display == 'none'){
//     //     element.style.display = 'block';
//     // }
//     // else{
//     //     element.style.display = 'none';
//     // }
//     let d = new Date();
//     document.getElementById('demo').innerHTML = d;

// }

// function myfun(){
//     alert("input has been changed");
// }

// function calcTip(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill* 0.2;
// }

// const bills = [125,555,44];
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
// console.log(tips);
// const total =[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(total);

// const obj1 = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         return this.mass/(this.height*this.height);
//     }
// };

// const obj2 = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         return this.mass/(this.height*this.height);
//     }
// };

// const  res = obj1.calcBMI() > obj2.calcBMI() ? `Mark's BMI (${obj1.calcBMI()}) is higher than John's BMI (${obj2.calcBMI()}).` : `John's BMI (${obj2.calcBMI()}) is higher than Marks's BMI (${obj1.calcBMI()}).`
// console.log(res);

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];
// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   total.push(tips[i] + bills[i]);
// }

// console.log(tips, total);

// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(calcAverage(total));
// console.log(calcAverage(tips));

// console.log('Live huh');
// console.log('go');

// function createPhoneNumber(numbers){
//     let str = '(';
//     for(let i=0;i<3;i++){
//       str += numbers[i];
//     }
//     str += ') ';
//     for(let j=3;j<6;j++){
//       str += numbers[j];
//     }
//     str += '-';
//     for(let k=6;k<numbers.length;k++){
//       str += numbers[k];
//     }
//     return str;
// }

// const a = [1,2,3,4,5];
// const b = [6,7,8,9,0];
// const c = [];
// for(let i=0;i<a.length;i++){
//     c.push(a[i]);
// }
// for(let j=a.length;j<a.length+b.length;j++){
//   c.push(b[j]);
// }
// console.log(a.concat(b));



const printForecast = function(arr){
  let result = '';
  for(let i=0;i<arr.length;i++){
    result += `...${arr[i]}C in ${i+1} days`;
  }
  return result;
}

const fun = printForecast([17,21,23]);
const fun1 = printForecast([12,5,-5,0,4]);
console.log(fun);
console.log(fun1);
