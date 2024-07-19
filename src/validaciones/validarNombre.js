// Se obtiene el formulario y se almacena en una variable
const formulario = document.getElementById('formulario');

const validarNombre = () => {
    // expresión regular para validar el nombre
    const expRegNomb = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

    // Se obtiene el input de nombre
    const inputNombre = formulario['nombre-receptor'];

    // Se verifica el valor del input con la expresión regular
    if(expRegNomb.test(inputNombre.value)) {
        // Si no tiene errores se quita la clase de error
        inputNombre.classList.remove('formulario__input--error');
        return true;
    } else {
        // Si tiene errores se agrega la clase de errores
        inputNombre.classList.add('formulario__input--error');
        return false;
    }
}

export default validarNombre;