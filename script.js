/**
 * Práctica Nº 3 - Controles de formulario
 *
 * @link   https://github.com/1rives/isft177-ayed3/tree/exercise3
 * @file   Script responsable de crear controles de formulario
 * @author 1rives
 */

document.addEventListener('DOMContentLoaded', () => {

    // Constantes
    const formControl = document.getElementById('formControl');

    const controlType = document.getElementById('controlType');
    const controlName = document.getElementById('controlName');
    const controlId = document.getElementById('controlId');
    const controlLabel = document.getElementById('controlLabel');

    const newControl = document.getElementById('newControl');
    const errorMessage = document.getElementById('errorMessage');


    formControl.addEventListener('submit', (e) => {
        e.preventDefault();

        const newId = controlId.value;
        const newLabel = controlLabel.value;

        if(!newId && newLabel){
            // TODO: Function that shows error message, when there's 
            // an existing message, replace with the new one.
            errorMessage.append('Ingrese una ID');
            return;
        }

        createControlElements(newId, newLabel, newControl);
        
    });

    newControl.addEventListener('submit', (e) => {
        e.preventDefault();

        alert('...');
    });

});

/**
 * Crea nuevos elementos para nuevo formulario de control
 * 
 * @param {string} id                           Valor de ID ingresado
 * @param {string} label                        Valor de etiqueta ingresado
 * @param {string} controlDiv        Div donde se agregan los elementos 
 */
function createControlElements(id, label, controlDiv) {
    let newLabel = document.createElement('label');
    let newInput = document.createElement('input');
    let newSubmit = document.createElement('button');

    // TODO: FIX ALL

    // Input
    newInput.setAttribute('type', controlType.value);
    
    newInput.setAttribute('name', controlName.value);
    newInput.setAttribute('placeholder', 'Valor ' + controlType.value);

    // Boton
    newSubmit.setAttribute('id', 'newSubmit');
    newSubmit.append('Validar');

    // En el caso de que se haya ingresado un Label 
    // tambien crear su elemento
    if(label) {
        // Etiqueta
        newLabel.setAttribute('for', controlId.value);
        newLabel.append('Ingrese un nuevo valor');
    }

    // En el caso de que se haya ingresado un ID válido 
    // asignarlo como ID del nuevo Input
    if(id) {
        newInput.setAttribute('id', controlId.value);
    }

    // Agrego los nuevos elementos con controles
    addNewControlElements({newLabel, newInput, newSubmit}, controlDiv);
}


/**
 * Recibo un array con los elementos a agregar
 * 
 * @param {array} elements                     Lista de elementos a agregar
 * @param {HTMLSelectElement} controlDiv       Div donde se agregan los elementos 
 */
function addNewControlElements(elements, controlDiv) {

    for (let i = 0; i < elements.length; index++) {
        // Si esta vacio, no agregar
        if(elements[index] !== ''){
            controlDiv.appendChild(elements[index]);
        }
    }
}