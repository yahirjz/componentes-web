

// --- Lógica de la Página de Contacto ---

// 1. Buscamos el elemento contenedor del formulario en el HTML usando su ID.
const  containerForm = document.querySelector('#contenerdor__formulario');

// 2. Si el contenedor existe en la página...
 if(containerForm){
    // ...llamamos a la función addFormulario (definida en componentes/formulario.js)
    // y le pasamos el contenedor para que inyecte el HTML del formulario dentro de él.
    addFormulario(containerForm); 
 }