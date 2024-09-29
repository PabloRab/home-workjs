const bankAccount = {
    ownerName: 'Alex',
    accountNumber: 1,
    balance: 550,
    deposit() {
        this.balance = this.balance + 50;
    },
    withdraw() {
        this.balance = this.balance - 50;
    }
}
bankAccount.deposit();

console.log(`на рахунку ${bankAccount.balance}`)



const weather = {
    temperature: prompt('введіть температуру повітря'),
    humidity: 21,
    windSpeed: '5 KM/H',

    temp() {
        if (this.temperature > 0) {
            console.log(false)
        } else {
            console.log(true)
        }
    },
}
weather.temp()

const user = {
    name: 'Billi',
    email: 'billi@gmail.com',
    password: 12345678,

    logIn() {
        if (this.email === prompt("enter you'r email") && this.password === prompt('введіть пароль')) {
            alert('ваша електронна пошта або пароль введені неправильно');
        } else {alert("Ви успішно ввійшли");}
    }
}

user.logIn();



const movie = {
    title: 'джури козака швайки',
    director: 'Володимир Рутківський',
    year: 2007,
    rating: 10,

    rang() {
        if (this.rating > 8) {
            console.log(true);
        } else {
            console.log(false)
        }
    }
}
movie.rang()