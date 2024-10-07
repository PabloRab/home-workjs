//№1

const user = {
    names: "Mango",
    age: 20,
    hobby: "html",
    premium: true,
};

// user.mood = 'happy';


// user.hobby = 'skydiving';


// user.premium = false;

// for (const key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`)
// }


let { names, age, hobby, premium, mood = 'happy' } = user;
hobby = "skydiving";
premium = false;


console.log(names, age, hobby, premium, mood)

console.log(" ");

//№2

const countProps = function (obj) {
    return Object.keys(obj).length
};


console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3



console.log(" ");

//№3

const findBestEmployee = function (employees) {
    let bestEmployee = '';
    let maxTask = 0;

    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTask) {
            maxTask = tasks;

            bestEmployee = name;
        }
    }
    return `${bestEmployee}: ${maxTask}`;
};


console.log(
findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
}),
); // lorence

console.log(
findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
}),
); // mango

console.log(
findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
}),
); // lux


console.log(" ");

//№4

const countTotalSalary = function (employees) {
    let totalSalary = 0;
    for (const salary of Object.values(employees)) {
        totalSalary += salary;
    }
    return totalSalary;
};


console.log(countTotalSalary({})); // 0

console.log(
countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
}),
); // 330

console.log(
countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
}),
); // 400

console.log(" ");

// №5

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
];


    const [productOne, productTwo, productThree, productFour] = products;

    const { name: name1, price: price1, quantity: quantity1 } = productOne;
    const { name: name2, price: price2, quantity: quantity2 } = productTwo;
    const { name: name3, price: price3, quantity: quantity3 } = productThree;
    const { name: name4, price: price4, quantity: quantity4 } = productFour;

console.log(name1, price1, quantity1);
console.log(name2, price2, quantity2);
console.log(name3, price3, quantity3);
console.log(name4, price4, quantity4);
    





// №6


// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроїд', price: 400, quantity: 7 },
//     { name: 'Захоплення', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//     let totalPrise = 0;
    
//     for (let i = 0; i < allProdcuts.length; i++){
//         if (allProdcuts[i].name === productName) {
//             totalPrise += allProdcuts[i].price * allProdcuts[i].quantity
//         }
//     }
//     return totalPrise;
// };

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроїд')); // 2800



// №7





const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};



const account = {

    balance: 0,


    transactions: [],


    createTransaction(amount, type) {
        return {
            id: this.transactions.length + 1,
            type,
            amount,
        };
    },


    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        this.balance += amount;
    },


    withdraw(amount) {
        if (amount > this.balance) {
            alert('Недостатньо коштів на рахунку');
            return;
        } 
        
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);
        this.balance -= amount;
    },


    getBalance() {
        return this.balance;
    },


    getTransactionDetails(id) {return this.transactions.find((transaction) => transaction.id === id)},


    getTransactionTotal(type) {
        return this.transactions
            .filter((transaction) => transaction.type === type)
            .reduce((total, transaction) => total + transaction.amount, 0)
    },
};

account.deposit(1000);
account.withdraw(150);
account.deposit(250);
console.log(account.getBalance());
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));