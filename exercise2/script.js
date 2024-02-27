// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const myHtml = document.querySelector('html');
const newDiv = document.createElement('div');
myHtml.appendChild(newDiv);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const newDiv2 = document.createElement('div');
const newP = document.createElement('p');
newDiv2.appendChild(newP);
myHtml.appendChild(newDiv2);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let arr = 10;
const newDiv3 = document.createElement('div');
for (let i = 0; i < 6; i++) {
    const newP2 = document.createElement('p');
    newDiv3.appendChild(newP2);
}
myHtml.appendChild(newDiv3);

// 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const pWithText = document.createElement('p');
pWithText.innerText = 'Soy dinámico!';
myHtml.appendChild(pWithText);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
document.getElementsByClassName('fn-insert-here')[0].innerHTML = 'Wubba Lubba dub dub';

// 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const listUl = document.createElement('ul');
apps.forEach((app) => {
    const listLi = document.createElement('li');
    listLi.innerText = app;
    listUl.appendChild(listLi);
});
myHtml.appendChild(listUl);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll('.fn-remove-me');
elementsToRemove.forEach((elementToRemove) => {
    elementToRemove.remove();
});

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const parent = document.querySelector('body');
parent.insertAdjacentHTML('beforebegin', '<div><p>Voy en medio!</p></div>');

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divsParent = document.querySelectorAll('div.fn-insert-here');
const pMessage = document.createElement('p');
pMessage.innerText = 'Voy dentro!';
divsParent.forEach((divParent) => {
    divParent.appendChild(pMessage.cloneNode(true));
});

console.log(myHtml);
