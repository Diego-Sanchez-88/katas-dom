// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor'];

const divPlaces = document.querySelector('[data-function]');
const listUlPlaces = document.createElement('ul');
places.forEach((place) => {
    const listLiPlace = document.createElement('li');
    listLiPlace.innerText = place;
    var attr = document.createAttribute('data-function');
    attr.value = 'printHere';
    listLiPlace.setAttributeNode(attr);
    listUlPlaces.appendChild(listLiPlace);
});
divPlaces.appendChild(listUlPlaces);

/** COMENTARIO: según el enunciado, puedo entender dos cosas:
 * 1. Que haga la lista dinámica dentro del div con el atributo data-function="printHere";
 * 2. Que cada li de la lista dinámica tenga el atributo data-function="printHere";
 */
