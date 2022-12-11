"use strict";

// HW 1

// let array = [5, 25, 89, 120, 36];

// array.push( 'javascript', 'python');
// console.log(array);

// array.unshift( 'html','css');
// console.log(array);

// console.log(array.length);

// array.shift();
// console.log(array);

// array.pop();
// console.log(array);

// array.splice(2,0, 'apple', 'peach', 99);
// console.log(array);


// HW 2

// let newArray = ['ფორთოხალი', 'ბანანი', 'მსხალი'];

// console.log(newArray.length);

// newArray.push( 'ვაშლი', 'ანანასი');
// console.log(newArray);

// newArray.unshift(' საზამთრო');
// console.log(newArray);

// console.log(newArray.length);

// newArray.splice(2, 0, 'მანგო');
// console.log(newArray);

// newArray.shift();
// console.log(newArray);

// newArray.pop();
// console.log(newArray);

// console.log(newArray.length);


// HW 3

// let array = [12, 25, 3, 6, 8, 14, 7, 23];

// let array2 = array.map(function(numbers) {
//     return numbers / 3;
    
// })
// console.log(array2);

// HW 4

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

// let arrayFilter = array.filter(function(x) {
//     return x >= 0;
// })
// console.log(arrayFilter);

// HW 5

// let languages = ['html', 'css', 'javascript', 'python', 'php'];

// let newLanguages = languages.filter(function(names) {
//     return names.length > 3;
    
// })
// console.log(newLanguages);


// HW 6

let item = [12, 'google', 32, null, 'yahoo', 25];

let array = item.map(item =>{
    if(typeof item == 'number'){
        return item * item
    }else if(typeof item == 'string'){
        return item.toUpperCase();
    }
    return item
})

console.log(array);






// HW 7

// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// let wordsFilter = words.filter(function(a) {
//         return a.includes('m') || a.includes('M');
//     })
// console.log(wordsFilter);

// HW 8

// let arr = [1, 2, 3, 4, 5];

// let sum = 0;
// arr.forEach(function(element) {
//     sum += element;
// })
// console.log(sum);


// HW 9

// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];

// let possitive = numbers.filter(d => d > 0);
// console.log(possitive);



// HW 10


// let array =[1, 2, 3, 4, 5];

// array.splice(3, 0, 'a', 'b', 'c');

// console.log(array);
