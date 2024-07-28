let drinksName;
const drinks = 'Кава'

switch (drinks) {
    case "Кава":
        drinksName = "Кава";
        break;

    case "Чай":
        drinksName = "Чай";
        break;

    case "Сік":
        drinksName = "Сік";
        break;

    default:
        console.log('Ви не ввели назви напою!');
}

alert(drinksName);


export function checks() {
    const fielText = document.getElementById("text_one").value;
    let mounth;

    switch (fielText) {
    case "понеділок":
        mounth = "робочий";
        break;

    case "вівторок":
        mounth = "робочий";
        break;

    case "середа":
        mounth = "робочий";
        break;

    case "четвер":
        mounth = "робочий";
        break;

    case "п'ятниця" || "пятниця":
        mounth = "робочий";
        break;

    case "субота":
        mounth = "вихідний";
        break;

    case "неділя":
        mounth = "вихідний";
            break;
        
        default:
            alert("введіть день тижня");
    }
    alert(`${fielText} ${mounth} день`);
}


export function checkNum() {
    const fielNumOne = document.getElementById("number_one").value;
    let season;

    switch (fielNumOne) {
    case '12':
        season = "winter";
        break;

    case '1':
        season = "winter";
        break;

    case '2':
        season = "winter";
        break;

    case '3':
        season = "spring";
        break;

    case '4':
        season = "spring";
        break;

    case '5':
        season = "spring";
        break;

    case '6':
        season = "summer";
        break;

    case '7':
        season = "summer";
        break;

    case '8':
        season = "summer";
        break;

    case '3':
        season = "autumn";
        break;

    case '4':
        season = "autumn";
        break;

    case '5':
        season = "autumn";
            break;
        
        default:
            alert("введіть число від 1 до 12 і ми визначимо яка це пора року");
    }
    alert(season);
    
}

export function checkTextTwo() {
    const color = document.getElementById("textTwo").value;
    

    if (color === 'червоний') {
        alert('стій');
    } else if (color === 'жовтий') {
        alert('чекай');
    } else {
        alert('йди');
    }
}


export function calculate() {
    const numOne = parseFloat(document.getElementById("value_1").value);
    const numTwo = parseFloat(document.getElementById("value_2").value);
    const operation = document.getElementById("select").value;
    let result;

    if (isNaN(numOne) || isNaN(numTwo)) {
        alert('не всі поля заповнені')
    } else {
        switch (operation) {
            case "+":
                result = numOne + numTwo;
                break;
            
            case "-":
                result = numOne - numTwo;
                break;
            
            case "*":
                result = numOne * numTwo;
                break;
            
            case "/":
                if (numTwo === 0) {
                    alert('ділення на нуль не можливе');                  
                } else {
                    result = numOne / numTwo;                    
                }
                break
            
            default:
                alert('невідома операція');

        }

        alert(result);
    }
    
    
            
    
    
    }

    