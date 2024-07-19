// Se obtiene el formulario y se almacena en una variable
const formulario = document.getElementById('formulario');

const validarCorreo = () => {
    // expresión regular para validar el correo
    const expRegCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    // Se obtiene el input de nombre
    const inputCorreo = formulario['correo-receptor'];

    // Se verifica el valor del input con la expresión regular
    if(expRegCorreo.test(inputCorreo.value)) {
        // Si no tiene errores se quita la clase de error
        inputCorreo.classList.remove('formulario__input--error');
        return true;
    } else {
        // Si tiene errores se agrega la clase de errores
        inputCorreo.classList.add('formulario__input--error');
        return false;
    }
}

export default validarCorreo;