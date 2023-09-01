/**
 * Práctica Nº 4 - Modelo de objetos del documento / Funciones
 *
 * @link   https://github.com/1rives/isft177-ayed3/tree/exercise4
 * @file   Utilizado en el punto 5
 * @author 1rives
 */

document.addEventListener('DOMContentLoaded', () => {

    // Variables
    let listForm = document.querySelector('form');
    let listItems = document.getElementsByTagName('li');

    listForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let itemPosition = document.querySelector('#inputItemPosition').value - 1; // Convertido a posición de array
        let color = document.querySelector('#inputItemColor').value;

        // Obtengo el elemento del item seleccionado
        let selectedItem = listItems[itemPosition];
        
        // Cambio el color de fondo
        selectedItem.style.backgroundColor = color;
        
        // Reemplazo el texto y agrego sombras para distinguir
        selectedItem.innerText = `Fondo ${color}`; 
        selectedItem.style.textShadow = '1px 1px 2px black, 1px 1px 2px black';

    })
});
