let array = ["apple", "banana", "cherry"];
let result = "";

for (let i = 0; i < array.length; i++) {
    result += array[i];
    if (i < array.length - 1) {
        result += ", ";
    }
}

console.log(result);
console.log(array.join(', '))




const card = [
    "card_0",
    "card_2",
    'card_3',
    'card_4',
    'card_5',
];

const cardToRemowe = card.splice(2, 1);
console.log(card);

const cardToInsert = card.splice(5, 0, 'card_6')
console.log(card)

const cardToUpdate = card.splice(0, 1, 'card_1')
console.log(card)


let cards = ["Card 1", "Card 2", "Card 3", "Card 4"];
let cardsToRemove = "Card 3";

let index = cards.indexOf(cardsToRemove);

if (index !== -1) {
    cards.splice(index, 1);
}

console.log(cards);