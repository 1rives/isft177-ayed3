/**
 * Práctica Nº 4 - Modelo de objetos del documento / Funciones
 *
 * @link   https://github.com/1rives/isft177-ayed3/tree/exercise4
 * @file   Utilizado en el punto 7
 * @author 1rives
 */

document.addEventListener('DOMContentLoaded', () => {

    // Variables
    const TEMPERATURES_LIST = [24.5, 11.2, 5.6, 7.8, 3.4, 2.4, 10.8, 11.4, 9.8, 25.0, 22.3];
    const NEW_TEMPERATURES_LIST = createNewArray(TEMPERATURES_LIST);

    // Asigno las nuevas tablas
    let tableCells = document.querySelectorAll('#temperature tbody tr td');
    let newTableCells = document.querySelectorAll('#new-temperature tbody tr td');

    addElementsToCells(TEMPERATURES_LIST, tableCells);
    addElementsToCells(NEW_TEMPERATURES_LIST, newTableCells);
});

/**
 * Genera un nuevo arreglo multiplicando los valores
 * del arreglo
 * 
 * @param   {HTMLElement} array     Arreglo a utilizar
 * @returns {array}                 Nuevo arreglo                    
 */
function createNewArray(array) {
    let newArray = [];

    array.forEach(function (element, i) {
        newArray.push(element * 4)[i];
    });

    return newArray;
}

/**
 * Reemplaza el texto actual de las celdas por los elementos del arreglo
 * 
 * @param   {array}                 array           Arreglo a utilizar     
 * @param   {HTMLTableCellElement}  tableCells      Elemento con celdas a reemplazar          
 */
function addElementsToCells(array, tableCells) {
    tableCells.forEach(function (cell, i) {
        cell.textContent = array[i];
    });
}