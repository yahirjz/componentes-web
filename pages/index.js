


//  ---- Lógica Principal de la Página ----

// Esta es una función autoejecutable (IIFE).
// El código dentro de ella se ejecuta tan pronto como el navegador carga este archivo.
// Se usa para no contaminar el "scope" global y para ejecutar código de inicialización.
(function main(){
    // --- Selección de Elementos del DOM ---

    // Busca en el HTML un elemento con el id="header".
    // Este será el contenedor donde se inyectará el header dinámicamente.
    const container = document.querySelector("#header");

    // Busca un elemento con la clase "header". Se usa como alternativa si el id="header" no existe,
    // pero se necesita inicializar la lógica del menú hamburguesa.
    const claseHeader = document.querySelector(".header");

    // Busca en el HTML un elemento con el id="footer".
    // Este será el contenedor para el footer.
    const containerFooter = document.querySelector('#footer');

    // --- Lógica Condicional para Renderizar Componentes ---

    // Comprueba si existen tanto el contenedor del header como el del footer.
    // Esto es útil para páginas como 'porfolio.html' que cargan ambos componentes dinámicamente.
    if(container && containerFooter){
        header(container); // Llama a la función de 'header.js' para crear el header.
        hamMenu();         // Llama a la función de 'header.js' para activar el menú hamburguesa.
        addFooter(containerFooter); // Llama a la función de 'footer.js' para crear el footer. 
    } else if(claseHeader){ // Si la condición anterior no se cumple, comprueba si al menos existe un header con la clase '.header'.
        // Esto es para páginas que ya tienen el HTML del header, pero necesitan que el menú hamburguesa funcione.
        hamMenu(); // Llama solo a la función para activar el menú hamburguesa.
    }
})()
