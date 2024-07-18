'use strict';

// Se obtiene el formulario y se almacena en una variable
const formulario$1 = document.getElementById('formulario');

const validarCantidad = () => {
    // expresión regular para validar la cantidad de (0-9) con decimales
    const expRegCant = /^\d+(\.\d+)?$/;

    // Se obtiene el input de cantidad
    const inputCantidad = formulario$1.cantidad;

    // Se verifica el valor del input con la expresión regular
    if(expRegCant.test(inputCantidad.value)) {
        // Si no tiene errores se quita la clase de error
        inputCantidad.classList.remove('formulario__input--error');
        return true;
    } else {
        // Si tiene errores se agrega la clase de errores
        inputCantidad.classList.add('formulario__input--error');
        return false;
    }
};

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
//# sourceMappingURL=bundle.js.map
