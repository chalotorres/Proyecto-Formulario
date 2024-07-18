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

const marcarPaso = (paso) => {
	document.querySelector(`.linea-pasos [data-paso="${paso}"] .linea-pasos__paso-check`).classList.add('linea-pasos__paso-check--checked');
};

const siguientePaso = () => {
    // Se crea un arreglo de los pasos.
    const pasos = [...document.querySelectorAll('.linea-pasos__paso')];

    // Se obtiene cuál es el paso activo
    const pasoActivo = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso');

    // Se obtiene el índice del paso activo
    const indexPasoActivo = pasos.indexOf(pasoActivo);

    // Si no se ha llegado el límite de pasos (al último paso)
    if(indexPasoActivo < pasos.length - 1) {
        // Se le quita al paso activo el icono del paso activo
        pasoActivo.querySelector('span').classList.remove('linea-pasos__paso-check--active');

        // Se le agrega el icono del paso activo al siguiente paso
        pasos[indexPasoActivo + 1].querySelector('span').classList.add('linea-pasos__paso-check--active');

        // Se obtiene el id del paso siguiente
        const id = pasos[indexPasoActivo + 1].dataset.paso;
        
        // Se agrega el scroll al siguiente formulario
        document.querySelector(`.formulario__body [data-paso="${id}"]`).scrollIntoView({
            inline: 'start',
            behavior: 'smooth',
        });
    }
};

// Se obtiene el formulario y se almacena en una variable
const formulario = document.getElementById('formulario');

// Hace que la posición inicial de la página sea el formulario 0 o sea el de cantidad
formulario.querySelector('.formulario__body').scrollLeft = 0;

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

// Se obtiene el botón de enviar formulario
const btnFormulario = document.getElementById('formulario__btn');

// Se agrega el evento de click al botón}
btnFormulario.addEventListener('click', (e) => {
    e.preventDefault();

    // Se obtiene con el elemento visual de los pasos en cuál paso se encuentra
    const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso').dataset.paso;
    // Si el paso actual es cantidad
    if(pasoActual === 'cantidad') {
        // Se busca validar el input
        if( validarCantidad() ) {
            marcarPaso('cantidad');
            siguientePaso();
        }
    }
});
//# sourceMappingURL=bundle.js.map
