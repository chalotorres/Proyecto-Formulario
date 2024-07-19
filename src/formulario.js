import validarCantidad from "./validaciones/validarCantidad";
import validarNombre from "./validaciones/validarNombre";
import validarCorreo from "./validaciones/validarCorreo";
import marcarPaso from "./marcarPaso";
import siguientePaso from "./siguientePaso";

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
        else if(e.target.id === 'nombre-receptor') {
            // Se busca validar el nombre
            validarNombre();
        } else if (e.target.id === 'correo-receptor') {
            // Se busca validar el correo
            validarCorreo();
        }
    }
});

// Se obtiene el botón de enviar formulario
const btnFormulario = document.getElementById('formulario__btn');

// Se agrega el evento de click al botón}
btnFormulario.addEventListener('click', (e) => {
    // Previene que no se mande el formulario en automático al dar click
    e.preventDefault();

    // Se obtiene con el elemento visual de los pasos en cuál paso se encuentra
    const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso').dataset.paso;
    // Si el paso actual es cantidad
    if(pasoActual === 'cantidad') {
        // Se busca validar el input
        if( validarCantidad() ) {
            // Se marca ese paso como completado
            marcarPaso('cantidad');
            // Se mueve al siguiente paso
            siguientePaso();
        }
    } else if (pasoActual === 'datos') { // Si el paso actual es datos
        if ( validarNombre() && validarCorreo()) { // Se valida el nombre correcto
            // Se marca ese paso como completado
            marcarPaso('datos');
            // Se mueve al siguiente paso
            siguientePaso();
        }
    } else if (pasoActual === 'metodo' ) {
        // Se marca ese paso como completado
        marcarPaso('metodo');

        // Formato de moneda
        const opciones = {
            style : 'currency',
            currency : 'MXN',
        };
        // Objeto de formato para moneda
        const formatoMoneda = new Intl.NumberFormat('es-MX', opciones);
        // Se setea la etiqueta con el valor de la cantidad
        document.querySelector('[data-valor="cantidad"] span').innerText = formatoMoneda.format(formulario.cantidad.value);
        // Se setea la etiqueta con el valor del nombre
        document.querySelector('[data-valor="nombre-receptor"] span').innerText = formulario['nombre-receptor'].value;
        // Se setea la etiqueta con el valor del correo
        document.querySelector('[data-valor="correo-receptor"] span').innerText = formulario['correo-receptor'].value;
        // Se setea la etiqueta con el valor del método
        document.querySelector('[data-valor="metodo"] span').innerText = formulario['metodo'].value;

        // Cambiar el botón de siguiente a transferir
        btnFormulario.querySelector('span').innerHTML = 'Transferir';

        // Inhabilitar el botón
        btnFormulario.classList.add('formulario__btn--disabled');

        // Cambiar icono del botón para transferencia
        btnFormulario.querySelector('[data-icono="siguiente"]').classList.remove('formulario__btn-contenedor-icono--active');
        btnFormulario.querySelector('[data-icono="banco"]').classList.add('formulario__btn-contenedor-icono--active');

        // Se vuelve a habilitar el botón después de 4 segundos
        setTimeout(() => {
            btnFormulario.classList.remove('formulario__btn--disabled');
        }, 4000);

        // se mueve al siguiente paso
        siguientePaso();
    }
});