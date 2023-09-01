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

    let formColorPicker = document.querySelector('#inputColorExample');
    let formInputColor = document.querySelector('#inputItemColor');

    formColorPicker.addEventListener('input', (e) => {
        // Obtengo el valor de color
        let color = formColorPicker.value;

        // Inserto en input
        formInputColor.value = color;
    });

    listForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let itemPosition = document.querySelector('#inputItemPosition').value - 1; // Convertido a posición de array
        let color = formInputColor.value;

        // Obtengo el elemento del item seleccionado
        let selectedItem = listItems[itemPosition];
        
        // Cambio el color de fondo
        selectedItem.style.backgroundColor = color;
        
        // Reemplazo el texto y agrego sombras para distinguir
        selectedItem.innerText = `Fondo ${color}`; 
        selectedItem.style.textShadow = '1px 1px 2px black, 1px 1px 2px black';

    })

});
