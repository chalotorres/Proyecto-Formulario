import validarCantidad from "./validarCantidad";

// Se obtiene el formulario y se almacena en una variable
const formulario = document.getElementById('formulario');

// Evento para detectar la tecla en la cantidad
formulario.addEventListener('keyup', (e) => {
    // Si se detectó el evento en un input   
    if(e.target.tagName === 'INPUT') {
        // Si se detectó en el input cantidad
        if(e.target.id === 'cantidad') {
            // Se busca validar la cantidad
            validarCantidad();
        }
    }
});

const btnFormulario = document.getElementById('formulario__btn');
btnFormulario.addEventListener('click', (e) => {
    e.preventDefault();
});