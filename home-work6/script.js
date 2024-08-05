// 1
let number = 1;
while (number < 11) {
    console.log(number);
    number += 1;
}


// 2
for(let i = 2; i <= 20; i += 1){
    if(i % 2 !== 0) {
        continue;
    }
    console.log(i);
}


// 3
for(let i = 1; i <= 10; i++){
    console.log(`7 * ${i} = ${7 * i}`);
}


// 6
const n = 4;
for(let i = 0; i < n; i++){
    if(i >= n) {
        break;
    }
    console.log(n);
}


// 7
let a = 1;
while( a <= 20) {
    if (a % 3 === 0) {
        a += 1;
        continue;
    }
    console.log(a);
    a++;
}
