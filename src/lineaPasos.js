import validarCantidad from "./validaciones/validarCantidad";
import validarNombre from "./validaciones/validarNombre";
import validarCorreo from "./validaciones/validarCorreo";

// Obtiene como elemento la linea que de los pasos
const linea = document.getElementById('linea-pasos');
linea.addEventListener('click', (e) => {
    // Si se oprime fuera de algún paso (la línea)
    if (!e.target.closest('.linea-pasos__paso')) return false;

    // Se obtiene el paso en el que se encuentra actualmente
    const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso').dataset.paso;

    // Si el paso actual es cantidad
    if(pasoActual === 'cantidad') {
        // Se busca que no este validado para no hacer ninguna acción
       if (!validarCantidad()) return;
    } else if (pasoActual === 'datos') { // si el paso actual son datos
        // Se busca que no este validado para no hacer ninguna acción
        if(!validarNombre() || !validarCorreo()) return;
    }

    // Se obtiene los paso al que se quiere regresar
    const pasoANavegar = e.target.closest('.linea-pasos__paso');
    // Solo se podrá navegar a los pasos terminados
    if(pasoANavegar.querySelector('.linea-pasos__paso-check--checked')) {
        // Se obtiene el paso actual con el icono de active
        const pasoActual = linea.querySelector('.linea-pasos__paso-check--active');
        // Se remueve el icono de ese paso
        pasoActual.classList.remove('linea-pasos__paso-check--active');
        
        // Se obtiene el identificador del paso al que se quiere navegar 
        const id = pasoANavegar.dataset.paso;

        // Se accede al paso que tiene ese id y se le da la clase active
        linea.querySelector(`[data-paso="${id}"] span`).classList.add('linea-pasos__paso-check--active');

        // Se actualiza la información del botón
        const btnFormulario = document.querySelector('#formulario__btn');
        btnFormulario.querySelector('span').innerText = 'Siguiente';
        // Se quita el icono de banco
        btnFormulario.querySelector('[data-icono="banco"]').classList.remove('formulario__btn-contenedor-icono--active');
        // Se pone el icono de siguiente
        btnFormulario.querySelector('[data-icono="siguiente"]').classList.add('formulario__btn-contenedor-icono--active');
        // Se quita el disabled
        btnFormulario.classList.remove('formulario__btn--disabled');

        // Se navega el paso
        document.querySelector(`.formulario__body [data-paso="${id}"]`).scrollIntoView({
            inline: 'start',
            behavior: "smooth",
        });

    }
})