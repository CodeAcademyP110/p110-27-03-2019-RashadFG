
    
"use strict"

// 1-ci tapsiriq

let numbers = [];
let min = Infinity;
let max = -Infinity;
let cem = 0;
let edediOrta = 0;
let userInput = +prompt("Daxil edeceyiniz eded sayi ?");
while (!isNaN(userInput)) 
{
    userInput = +prompt("Duzgun eded daxil edin !");
}
for (let i = 0; i < userInput; i++) 
{
    let userNumbers = +prompt(`${i + 1}ci ededi daxil edin:`);
    while (isNaN(userNumbers) || !userNumbers) 
    {
    userNumbers = +prompt("Duzgun eded daxil edin !");
    }
    numbers.push(userNumbers);
    cem += numbers[i];
    edediOrta = cem / userInput;
    if(max < numbers[i])
    {
        max = numbers[i];
    }
    if(min > numbers[i])
    {
        min = numbers[i];
    }
}
console.log(`En boyuk eded: ${max}; En kicik eded: ${min}; Eded ortasi: ${edediOrta} `);

// 2-ci Tapsiriq

// let numbers = [];
// let cutEdedSayi = 0;
// let userInput = +prompt("Daxil edeceyiniz eded sayi ?");
// while (isNaN(userInput))
// {
//     userInput = +prompt("Duzgun eded daxil edin !");
// }
// for (let i = 0; i < userInput; i++) 
// {
//     let userNumbers = +prompt(`${i + 1}ci ededi daxil edin:`);
//     while (isNaN(userNumbers) || !userNumbers) 
//     {
//     userNumbers = +prompt("Duzgun eded daxil edin !");
//     }
//     numbers.push(userNumbers);
//    if(numbers[i] % 2 == 0)
//    {
//        cutEdedSayi++;
//    }
// }
// console.log(`Cut ededlaerin sayi: ${cutEdedSayi}`);

// 3-cu Tapsiriq

// let numbers = [];
// let cem = 0;
// let tekEdedCemi = 0;
// let cutEdedCemi = 0;
// let userInput = +prompt("Daxil edeceyiniz eded sayi ?");
// while (isNaN(userInput)) 
// {
//     userInput = +prompt("Duzgun eded daxil edin !");
// }
// for (let i = 0; i < userInput; i++) 
// {
//     let userNumbers = +prompt(`${i + 1}ci ededi daxil edin:`);
//     while (isNaN(userNumbers) || !userNumbers) 
//     {
//     userNumbers = +prompt("Duzgun eded daxil edin !");
//     }
//     numbers.push(userNumbers);
//     cem+=numbers[i];
//    if(numbers[i] % 2 == 1)
//    {
//        tekEdedCemi+=numbers[i];
//    }
//    else
//    {
//     cutEdedCemi+=numbers[i];
//    }
// }
// console.log(`Butun reqemlerin cemi: ${cem}; Tek ededlerin cemi: ${tekEdedCemi}; Cut ededlerin cemi: ${cutEdedCemi}`);

// 4-cu Tapsiriq

// let words = [];
// let wordsLengthMin = Infinity;
// let wordsLengthMax = -Infinity;
// let wordsMax = [];
// let wordsMin = [];

// for (let i = 0; i < 4; i++) 
// {
//     let userWords = prompt(`${i + 1}ci sozu daxil edin:`);
//     userWords = userWords.trim();
//     while (!isNaN(userWords) || !userWords) 
//     {
//     userWords = prompt("Duzgun soz daxil edin !");
//     }
//     words.push(userWords);
//    if(wordsLengthMax <= words[i].length)
//    {
//        wordsLengthMax = words[i].length;
//        wordsMax = words[i];
//    }
//    if(wordsLengthMin >= words[i].length)
//    {
//        wordsLengthMin = words[i].length;
//        wordsMin = words[i];
//    }
// }
// console.log(`En uzun soz:${wordsMax}; En qisa soz: ${wordsMin}`);

