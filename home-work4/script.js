function checkFilds() {
    const fieldValueOne = document.getElementById("text-one").value;
    const fieldValuetwo = document.getElementById("text-two").value;
    if(fieldValueOne !== "" && fieldValuetwo !== ""){
        alert('Обидва поля заповнені');
    } else {
        alert('Не всі поля заповнені');
    }
}



function checkFieldsTwo(){
    const fieldnumberOne = parseFloat(document.getElementById("number-one").value);
    const fieldnumberTwo = parseFloat(document.getElementById("number-two").value);
    if (fieldnumberOne + fieldnumberTwo > 10) {
        alert('Сума більше 10');
    } else {
        alert('Сума менша або дорівнює 10');
    }
}



function checkFieldsJs(){
    const fieldValuetext = document.getElementById("text-check").value;
    if(fieldValuetext.includes("JavaScript")) {
        alert ("Текст містить слово javaScript");
    } else {
        alert ("Текс не містить слово JavaScript");
    }
}



function checkNumber() {
    const fieldValueNumber = document.getElementById("number-four").value;
    if(fieldValueNumber > 10 && fieldValueNumber <= 20) {
        alert("Число входить в діапозон від 10 до 20");
    } else {
        alert("Число не входить в діапозон від 10 до 20");
    }
}



function checkForm() {
    const name = document.getElementById("inputName").value;
    const mail = document.getElementById("inputMail").value;
    const password = document.getElementById("inputPass").value;

    if(name.lenght > 2 && mail.includes('@') && password.length > 5) {
        window.location.href = "https://www.youtube.com/watch?v=x-UuZ-FIrdE&t=3s&ab_channel=GoITeens";
        alert('Go to another page');
    } else {
        alert('Form is not value');
    }
}
