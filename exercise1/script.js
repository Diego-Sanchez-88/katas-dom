// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const pt1 = document.querySelector('.showme');
console.log(pt1);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const pt2 = document.querySelector('#pillado');
console.log(pt2);

// 1.3 Usa querySelector para mostrar por consola todos los p
const pt3 = document.querySelectorAll('p');
console.log(pt3);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pt4 = document.querySelectorAll('.pokemon');
console.log(pt4);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const pt5 = document.querySelectorAll('[data-function]');
console.log(pt5);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const pt6 = document.querySelectorAll('[data-function]')[2];
console.log(pt6);
