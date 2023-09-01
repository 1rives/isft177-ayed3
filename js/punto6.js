/**
 * Práctica Nº 4 - Modelo de objetos del documento / Funciones
 *
 * @link   https://github.com/1rives/isft177-ayed3/tree/exercise4
 * @file   Utilizado en el punto 6
 * @author 1rives
 */

document.addEventListener('DOMContentLoaded', () => {

    // Variables
    const COLORS = ["red", "green", "cyan", "fuchsia", "gray", "crimson"];

    let winnerTitle = document.querySelector('h4');

    let lastElement; // Utilizado para remover estilos previos

    let listItems = document.getElementsByTagName('li');
    let submitButton = document.querySelector('button');
    
    submitButton.addEventListener('click', () => { 
        // Remuevo los estilos del item anterior
        removeAllStyles(lastElement);

        let colorPosition = Math.floor(Math.random() * 6); 
        let elementPosition = Math.floor(Math.random() * 10);

        // Obtengo los elementos 
        let randomElement = lastElement = listItems[elementPosition];
        let randomColor = COLORS[colorPosition];

        // Asigno el color random
        randomElement.style.color = randomColor;
        randomElement.style.fontWeight = 'bold';

        // Encabezado con los datos del ganador
        winnerTitle.innerHTML = `El ganador es la posición ${elementPosition + 1} con el color ${randomColor}`;
    });
    

});

/**
 * Remueve todos los estilos del elemento en cuestión
 * si se encuentra definido.
 * 
 * @param {HTMLElement} element     Elemento HTML 
 */
function removeAllStyles(element) {
    if(element) {
        element.removeAttribute("style");
    }
}