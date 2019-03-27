"use strict"



//min max  seid yazan

// let numbers = [];
// let min = 0;
// let max = 0;
// let arrayLength = parseInt(prompt("arrayin uzunluqunu geyd edin"));
// while (isNaN(arrayLength)) {
//   arrayLength = parseInt(prompt("arrayin duzgun uzunluqunu geyd edin"));
// }

// for (let i = 0; i < arrayLength; i++) {
//   let number = parseInt(prompt(`${i + 1} ededi daxil edin`));
//   while (isNaN(number)) {
//     number = parseInt(prompt(`${i + 1} ededi duzgun daxil edin`));
//   }
//   numbers.push(number)
//   let thisValue = numbers[i];
//   min == 0 ? min = thisValue : '';
//   max < thisValue ? max = thisValue : null;
//   min > thisValue ? min = thisValue : null;

// }





// first task

// let array=[];
// let min=0;
// let max=0;
// let middle=0;
// let middle1=0;
// let arrayLength=parseInt(prompt("eded daxil edin"))
// while(isNaN(arrayLength)){
//   arrayLength=parseInt(prompt(" duzgun eded daxil edin"))
// }

// for (let i = 0; i < arrayLength; i++) {
//       let number=parseInt(prompt(`${i+1} ci ededi daxil edin`))
//       while(isNaN(number)){
//         number=parseInt(prompt(`${i+1} ci ededi  duzgun daxil edin`))
//       }
//       array.push(number)
//   }
// for (let i = 0; i < arrayLength; i++) {
//   min == 0 ? min = array[i] : '';
//   max < array[i]  ? max = array[i]  : null;
//   min >array[i]  ?  min  = array[i]  : null;
//   middle1 += array[i];
//   middle = middle1 / array.length;
  
// }
//  console.log(max)
//  console.log(min)
//  console.log(middle)

 
// second task

//  let array = [];
// let counterEven=0;
// let counterSingle=0;
// let arrayLength=parseInt(prompt("eded daxil edin"))
// while(isNaN(arrayLength)){
//   arrayLength=parseInt(prompt(" duzgun eded daxil edin"))
// }

// for (let i = 0; i < arrayLength; i++) {
//       let number=parseInt(prompt(`${i+1} ci ededi daxil edin`))
//       while(isNaN(number)){
//         number=parseInt(prompt(`${i+1} ci ededi  duzgun daxil edin`))
//       }
//       array.push(number)
//   }
//   console.log(array)
// for(let i = 0 ; i < arrayLength; i++){
//        if(array[i]%2==0){
//         counterEven++;
//        }
//        if(array[i]%2==1){
//         counterSingle++;
//        }
// }
// console.log(counterEven)
// console.log(counterSingle)



// third task

// let array = [];
// let counterSum=0;
// let counterEvenSum=0;
// let counterSingleSum=0;
// let arrayLength=parseInt(prompt("eded daxil edin"))
// while(isNaN(arrayLength)){
//   arrayLength=parseInt(prompt(" duzgun eded daxil edin"))
// }

// for (let i = 0; i < arrayLength; i++) {
//       let number=parseInt(prompt(`${i+1} ci ededi daxil edin`))
//       while(isNaN(number)){
//         number=parseInt(prompt(`${i+1} ci ededi  duzgun daxil edin`))
//       }
//       array.push(number)
//   }
//   console.log(array)


// for(let i = 0 ; i < arrayLength; i++){
//   counterSum=counterSum+array[i];
//         if(array[i]%2===0){
//           counterEvenSum=counterEvenSum+array[i];
//          }
//          if (array[i]%2===1){
//           counterSingleSum=counterSingleSum+array[i];
//          }
//   }
//  console.log(counterSum);
//  console.log(counterEvenSum);
//  console.log(counterSingleSum)

// fourth task     sehv var
let array = [];
let longestWord=array[0];
let smallestWord=array[0]
let arrayLength=parseInt(prompt("say daxil edin"));
while(isNaN(arrayLength)){
  arrayLength=parseInt(prompt("sayi duzgun daxil edin"));
}

for (let i = 0; i < arrayLength; i++) {
      let number=prompt(`${i+1} ci sozu daxil edin`)
   
      array.push(number)
  }
  console.log(array)

  for (let i = 0; i < arrayLength; i++) {
   array[i].length > longestWord ? longestWord=array[i] : null;
   
    
  }
  console.log(longestWord)