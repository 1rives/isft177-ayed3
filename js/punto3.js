/**
 * Práctica Nº 4 - Modelo de objetos del documento / Funciones
 *
 * @link   https://github.com/1rives/isft177-ayed3/tree/exercise4
 * @file   Utilizado en el punto 3
 * @author 1rives
 */

document.addEventListener('DOMContentLoaded', () => {

    // Variables
    const ANIMALS = ["Perro", "Gato", "Loro", "Zorro", "Zarigüeya"]

    let animalContainer = document.querySelector('.animals'); // Primero de la lista
    let animalList = createList(ANIMALS);

    animalContainer.appendChild(animalList);
});


/**
 * Crea y devuelve una lista no ordenada
 * 
 * @param   array                   Cadena con elementos
 * @returns {HTMLUListElement}      Lista no ordenada con items provenientes del parametro
 */
function createList(array) {
    let list = document.createElement('ul');

    array.forEach(element => {
        // Creo el item
        let item = document.createElement('li');
        let itemText = document.createTextNode(element);
        item.appendChild(itemText);

        list.append(item);
    })

    return list;
}