// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries1 = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const myHtml = document.querySelector('html');
const listUlCountries1 = document.createElement('ul');
countries1.forEach((country) => {
    const listLi = document.createElement('li');
    listLi.innerText = country;
    listUlCountries1.appendChild(listLi);
});
myHtml.appendChild(listUlCountries1);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementsToRemove = document.querySelectorAll('.fn-remove-me');
elementsToRemove.forEach((elementToRemove) => {
    elementToRemove.remove();
});

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divCars = document.querySelector('[data-function]');
const listUlCars = document.createElement('ul');
cars.forEach((car) => {
    const listLiCar = document.createElement('li');
    listLiCar.innerText = car;
    var attr = document.createAttribute('data-function');
    attr.value = 'printHere';
    listLiCar.setAttributeNode(attr);
    listUlCars.appendChild(listLiCar);
});
divCars.appendChild(listUlCars);
/** COMENTARIO: según el enunciado, puedo entender dos cosas:
 * 1. Que haga la lista dinámica dentro del div con el atributo data-function="printHere";
 * 2. Que cada li de la lista dinámica tenga el atributo data-function="printHere";
 */

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];
for (const key in countries2) {
    if (Object.hasOwnProperty.call(countries2, key)) {
        const country = countries2[key];
        const divContainer = document.createElement('div');
        divContainer.classList.add('image');
        divContainer.innerHTML = `
            <h4>${country.title}</h4>
            <img src="${country.imgUrl}"></img>
        `;
        document.body.appendChild(divContainer);
    }
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const divsImage = document.querySelectorAll('.image');
const buttonDeleteLast = document.createElement('button');
buttonDeleteLast.innerHTML = 'Elimina el último';
document.body.appendChild(buttonDeleteLast);
buttonDeleteLast.onclick = () => {
    const lastImage = divsImage[divsImage.length - 1];
    if (lastImage) {
        lastImage.remove();
    } else {
        console.log('No hay imágenes para eliminar.');
    }
};

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
divsImage.forEach((image) => {
    const buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = 'Eliminar';
    image.appendChild(buttonDelete);
    buttonDelete.onclick = () => {
        image.remove();
    };
});

console.log(myHtml);
