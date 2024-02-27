// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const myHtml = document.querySelector('html');
const btnToClick = document.createElement('button');
btnToClick.setAttribute('id', 'btnToClick');
btnToClick.innerHTML = 'Clickéame';
myHtml.appendChild(btnToClick);

document.getElementById('btnToClick').addEventListener('click', showEvent);
function showEvent(event) {
    console.log(event);
}

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const firstInput = document.querySelectorAll('input')[0];
let showValueInput = (event) => {
    console.log(event.target.value);
};
firstInput.addEventListener('focus', showValueInput);

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const secondInput = document.querySelectorAll('input')[1];

secondInput.addEventListener('input', secondInputValue);
function secondInputValue(event) {
    console.log(event.target.value);
}
