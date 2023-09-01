/**
 * Práctica Nº 4 - Modelo de objetos del documento / Funciones
 *
 * @link   https://github.com/1rives/isft177-ayed3/tree/exercise4
 * @file   Utilizado en el punto 4
 * @author 1rives
 */

document.addEventListener('DOMContentLoaded', () => {

    // Variables
    const PERSONAS = ["Pepe", "Luis", "Homero", "Marge", "Bart", "Lisa", "Maggie"];
    const PROFESIONES = ["Zapatero", "Hornero", "Inspector nuclear", "Ama de casa", "Vándalo", "Estudiante", "Desocupada"];
    const ARRAY_LENGTH = PERSONAS.length;

    let personasContainer = document.querySelector('.personas');

    for (let i = 0; i < ARRAY_LENGTH; i++) {
        // Creo el párrafo con su texto
        let paragraph = document.createElement('p');
        let paragraphText = document.createTextNode(`${PERSONAS[i]} - ${PROFESIONES[i]}`);
        paragraph.appendChild(paragraphText);

        personasContainer.appendChild(paragraph);
    }

});
