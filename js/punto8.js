/**
 * Práctica Nº 4 - Modelo de objetos del documento / Funciones
 *
 * @link   https://github.com/1rives/isft177-ayed3/tree/exercise4
 * @file   Utilizado en el punto 8
 * @author 1rives
 */

document.addEventListener('DOMContentLoaded', () => {

    // Variables
    const CELSIUS_LIST = [24.5, 11.2, 5.6, 7.8, 3.4, 2.4, 10.8, 11.4, 9.8, 25.0, 22.3];
    const FAHRENHEIT_LIST = generateFahrenheitArray(CELSIUS_LIST);

    // Obtengo las celdas de cada tabla
    let tableCells = document.querySelectorAll('#temperature tbody tr td');
    let newTableCells = document.querySelectorAll('#new-temperature tbody tr td');

    // Agrego las temperaturas correspondientes
    addElementsToCells(CELSIUS_LIST, tableCells);
    addElementsToCells(FAHRENHEIT_LIST, newTableCells);
});


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

/**
 * Genera un nuevo arreglo, convirtiendo todos los valores
 * del arreglo ingresado a Fahrenheit.
 * 
 * @param   {array} array     Arreglo con temperaturas en Celsius a utilizar
 * @returns {array}           Nuevo arreglo con temperaturas en Fahrenheit                   
 */
function generateFahrenheitArray(array) {
    let newArray = [];

    array.forEach(function (element, i) {
        // Obtengo el formato correcto
        temperature = celsiusToFahrenheit(element);
        newArray.push(temperature)[i];
    });

    return newArray;
}

/**
 * Convierte la temperatura de Celsius a Fahrenheit
 * 
 * @param   {string} temperature    Temperatura en Celsius     
 * @returns {string}                Valor equivalente en Fahrenheit
 */
function celsiusToFahrenheit(temperature) {
    return (temperature * 9/5) + 32;
}