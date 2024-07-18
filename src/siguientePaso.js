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

export default siguientePaso;