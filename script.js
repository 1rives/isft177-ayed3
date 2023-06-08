/**
 * Práctica Nº 2 - Lista de tareas
 *
 * @link   https://github.com/1rives/isft177-ayed3/tree/exercise2
 * @file   Script responsable de generar y agregar el titulo y formulario de la página
 * @author 1rives
 */

// Constantes
const selectOptions = ['Seleccione una opción', 'Libertad', 'Parque San Martín', 'Merlo Centro'];
const nameID = 'nameInput';
const ageID = 'ageInput';
const cityID = 'cityInput';

document.addEventListener('submit', (event) =>  {
    event.preventDefault();
    
    let successMessage = document.createElement('p');
    successMessage.append('👌');

    document.body.append(successMessage);    
});

document.addEventListener('DOMContentLoaded', () => {

    // TODO: Mostrar todo el contenido antes del script

    // Titulo
    let title = document.createElement('h1');
    title.append('Formulario de alta de personas');

    // Formulario
    let form = document.createElement('form');

    // Labels
    let nameLabel = document.createElement('label');
    let ageLabel = document.createElement('label');
    let cityLabel = document.createElement('label');
    addLabelAttributes(nameLabel, ageLabel, cityLabel);
    
    // Inputs
    let nameInput = document.createElement('input');
    let ageInput = document.createElement('input');
    let cityInput = document.createElement('select');
    addInputAttributes(nameInput, ageInput, cityInput);
    
    // Botón "submit"
    let submitButton = document.createElement('input');
    submitButton.append('Ingresar');
    submitButton.setAttribute('id', 'submit');
    submitButton.setAttribute('type', 'submit');
    
    // Agrego la base
    document.body.append(title, form);

    // Incluyo todos los elementos dentro del formulario
    form.append(nameLabel, nameInput, ageLabel, ageInput, cityLabel, cityInput, submitButton);

});

/**
 * Agrega opciones al select de "city"
 *
 * Crea opciones con sus respectivos atributos y las adjunta una por una 
 * dentro del elemento "form".
 * 
 * La primera opción siempre es el placeholder.
 *
 * @param {array} options               Lista de ciudades
 * @param {HTMLSelectElement} input     Elemento HTML de select "cityInput"
 */
function addCityOptions(options, input) {
    for (let index = 0; index < options.length; index++) {
        // Creo nueva option
        let option = document.createElement('option');
        let optionText = document.createTextNode(options[index]);
        
        // Agrego el texto de la option
        option.appendChild(optionText);
        
        // Defino atributos de la option
        if(!index) {
            option.setAttribute('value', '');
            option.setAttribute('selected', 'selected');
            option.setAttribute('hidden', true);
            option.setAttribute('disabled', true);
        }
        else {
            option.setAttribute('value', `city${index+1}`);
        }
        
        input.append(option);
    }
}

/**
 * Asigna atributos a todos los inputs disponibles
 *
 * @param {HTMLSelectElement} nameInput    Elemento HTML de nombre/apellido
 * @param {HTMLSelectElement} ageInput     Elemento HTML de edad
 * @param {HTMLSelectElement} cityInput    Elemento HTML del select de ciudades
 */
function addInputAttributes(nameInput, ageInput, cityInput) {

    nameInput.setAttribute('id', nameID);
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Ingrese nombre y apellido');
    nameInput.setAttribute('minlength', '3');
    nameInput.setAttribute('maxlength', '50');
    nameInput.setAttribute('required', true);

    ageInput.setAttribute('id', ageID);
    ageInput.setAttribute('type', 'number');
    ageInput.setAttribute('placeholder', 'Ej.: 55');
    ageInput.setAttribute('min', '18');
    ageInput.setAttribute('max', '150');
    ageInput.setAttribute('required', true);

    cityInput.setAttribute('id', cityID);
    cityInput.setAttribute('required', true);
    addCityOptions(selectOptions, cityInput);
}

/**
 * Asigna atributos a todos los labels disponibles
 *
 * @param {HTMLSelectElement} nameLabel    Elemento HTML del label para nombre/apellido
 * @param {HTMLSelectElement} ageLabel     Elemento HTML del label para edad
 * @param {HTMLSelectElement} cityLabel    Elemento HTML del label para el select de ciudades
 */
function addLabelAttributes(nameLabel, ageLabel, cityLabel) {
    nameLabel.append('Nombre y Apellido');
    nameLabel.setAttribute('for', nameID);

    ageLabel.append('Edad');
    ageLabel.setAttribute('for', ageID);

    cityLabel.append('Ciudad');
    cityLabel.setAttribute('for', cityID);
}