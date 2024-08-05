// 1
const numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);


// 2
const strings = ['one', 'two', 'three']
strings[3] = 'four';
console.log(strings);


// 3
const sum = [15, 31, 24, 12, 5, 17];
let total = 0;
for(let i = 0; i < sum.length; i++){
    total += sum[i]
}
comsole.log(total);


// 4
const arr = [13, 15, 2, 5, 52];
for(const num of arr) {
    console.log(num);
}


// 5
const newArr = ['hello', 'sun', 'goiteens', 'phantom', 'arr'];
for(let i = 0; i < newArr.length; i++){
    if(newArr[i].length < 5) {
        continue;
    }
    console.log(newArr[i]);
}


// 6
const newNumbers =[13, 52, 22, 66, 27, 5, 1, 33, 24, 68];
let max = newNumbers[0];
for(let i = 0; i<newNumbers.length; 1++){
    if(newNumbers[i] > max) {
        max = newNumbers[i];
    }
}
console.log(max);


// 7
const numbersNew =[13, 52, 22, 66, 27, 5, 1, 33, 24, 68];
for (let i = 0; i < numbersNew.length; i++){
    if(numbersNew[i] % 2 === 0) {
        console.log(numbersNew[i]);
    }
}