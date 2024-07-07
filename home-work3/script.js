// 1
const result = 5 + 5 + '6';
console.log(result);

// 2
const a = "kirywa1708@gmail.com";
console.log(a.length); 
console.log(a.includes('@'));

// 3
const name = 'My';
const age = 'name';
const mood = 'is';


const fullName = ` ${name}, ${age} ${mood} Victor.`;
console.log(fullName);

// 4
const userName = 'Деректор Попи';
const payment = 300

alert(`Дякуємо,  ${userName},  До сплати ${payment} гривень`);
const dangerous = confirm('Ви підтверджуєте дію?');
if(dangerous){
    alert('Дякую за пітвердження!')
}
else{
    alert('Дію відміненно')
};