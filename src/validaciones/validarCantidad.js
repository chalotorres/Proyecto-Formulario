// Se obtiene el formulario y se almacena en una variable
const formulario = document.getElementById('formulario');

const validarCantidad = () => {
    // expresión regular para validar la cantidad de (0-9) con decimales
    const expRegCant = /^\d+(\.\d+)?$/;

    // Se obtiene el input de cantidad
    const inputCantidad = formulario.cantidad;

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
}

export default validarCantidad;