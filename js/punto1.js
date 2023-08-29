/**
 * Práctica Nº 4 - Modelo de objetos del documento / Funciones
 *
 * @link   https://github.com/1rives/isft177-ayed3/tree/exercise4
 * @file   Utilizado en el punto 1
 * @author 1rives
 */

document.addEventListener('DOMContentLoaded', () => {

    // Variables
    let title = document.querySelector('h1');
    let titleInput = document.getElementById('headerInput');
    let inputButton = document.querySelector('button'); 

    inputButton.addEventListener('click', (e) => {
        e.preventDefault();

        if(!titleInput.value) {
            // No realiza nada
        } else {
            title.textContent = titleInput.value;
            titleInput.value = "";
        }

    });
});