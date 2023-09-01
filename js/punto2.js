/**
 * Práctica Nº 4 - Modelo de objetos del documento / Funciones
 *
 * @link   https://github.com/1rives/isft177-ayed3/tree/exercise4
 * @file   Utilizado en el punto 2
 * @author 1rives
 */

document.addEventListener('DOMContentLoaded', () => {

    // Variables
    let ingredientCount = 0;
    let ingredientElement = document.querySelector('span');

    let list = document.querySelector('ol');
    let listInput = document.getElementById('listInput');
    let inputButton = document.querySelector('button'); 

    inputButton.addEventListener('click', (e) => {
        e.preventDefault();

        if(listInput.value) {
            // Creo el item a agregar
            let listItem = document.createElement('li');
            listItem.append(listInput.value);

            // Inserto el item
            list.append(listItem);

            // Aumenta el número de ingrediente
            ingredientCount++;
            ingredientElement.textContent = ingredientCount+1;
        }

        if(ingredientCount == 3) {
            disableInputs(listInput, inputButton);
        }

    });
});

/**
 * Deshabilita los inputs utilizados para agregar ingredientes
 *
 * @param {HTMLElement} input      Input de ingrediente
 * @param {HTMLElement} button     Botón para ingresar ingrediente
 */
function disableInputs(input, button) {
    input.setAttribute('disabled', true);
    button.setAttribute('disabled', true);
}