// 1

const fieldValue = document.querySelector('#textOne');
const buttonOne = document.querySelector('#changeButton');
buttonOne.onclick = () => {
    buttonOne.textContent = fieldValue.value;
}

// 2

const imgTwo = document.querySelector('#imgTwo');
// imgTwo.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6px__R2hjZi4EH9mrX1Q_t2DtaUoMRaIFLw&s'
imgTwo.style.width = '400px'

// 3

const imgThree = document.querySelector('#imgThree');
imgThree.alt = 'cat two';
imgThree.style.width = '400px';
const link = document.querySelector('#linkThree');
link.href = 'https://www.youtube.com/'

// 4
const list = document.querySelector('#list');
const firstChild = list.firstElementChild;
firstChild.textContent = 'new text'