/**
 * Práctica Nº 1 - Lista de tareas
 *
 * @link   https://github.com/1rives/isft177-ayed3/tree/exercise1
 * @file   Incorpora funcionalidad para agregar tareas a una lista
 * @author 1rives
 */

document.addEventListener("DOMContentLoaded", function() {

    // Obtengo los elementos necesarios
    const taskInput = document.getElementById("taskInput");
    const taskButton = document.getElementById("taskButton");
    const taskList = document.getElementById("taskList");

    // Agrega un evento de click al boton Agregar
    taskButton.addEventListener("click", () => {

        // Texto de tarea ingresada
        var taskText = taskInput.value; 

        if (taskText) { 

            let listElement = document.createElement("li"); 
            listElement.textContent = taskText; 

            // Agrega el elemento a la lista
            taskList.appendChild(listElement); 

            // Limpio el input
            taskInput.value = ""; 
        }
    });
});


