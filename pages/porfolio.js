

// URL de la API de Contentful para obtener las entradas del tipo de contenido "porfolio".
// Esta URL incluye el Space ID, Environment, Access Token y el content_type específico.
const apiUrlPorfolio = "https://cdn.contentful.com/spaces/1on48ozhnyj8/environments/master/entries?access_token=gJNAnYs4Mgp6EK6G53HGL7IIbGnkBCUP2djWFE7oQHQ&content_type=porfolio"

// ---- Lógica del Portafolio ----

// Esta función crea una "tarjeta" de trabajo/proyecto y la agrega al DOM.
// Reutiliza un <template> HTML para mayor eficiencia.
  function addWorkCard(params = {}){
    // Selecciona el template que define la estructura de una tarjeta.
    const template = document.querySelector('#porfolio__card-template');
    // Selecciona el contenedor donde se insertarán las nuevas tarjetas.
    const container = document.querySelector('.porfolio__conten');
    
    // Clona el contenido del template para crear un nuevo fragmento de DOM.
    const clone = document.importNode(template.content, true);  

    // Rellena los datos del clon con la información pasada en 'params'.
    // Se buscan los elementos DENTRO DEL CLON para modificarlos.
    clone.querySelector(".porfolio__card-title").textContent = params.title;
    clone.querySelector(".porfolio__card-description").textContent = params.description;
    clone.querySelector(".porfolio__img").src = params.img;

    // Añade la tarjeta clonada y rellenada al contenedor en el DOM.
    container.appendChild(clone);
}

// Esta función se encarga de hacer la petición a la API de Contentful y procesar la respuesta.
 function getWorks(apiUrl){
    // Realiza la petición fetch a la URL de la API proporcionada.
    return fetch(apiUrl)
    // Convierte la respuesta a formato JSON.
    .then(res => res.json())
    // Una vez que tenemos los datos en JSON, los procesamos.
    .then(data => {
       
        // Mapeamos (transformamos) cada 'item' de la respuesta.
        const fieldsCollection = data.items.map(item => {
            // --- Procesamiento de la Imagen ---
            // 1. Sacamos el ID de la imagen del campo 'imagen'.
            const imagenId = item.fields.imagen.sys.id;
            // 2. Buscamos el 'asset' (el archivo de la imagen) correspondiente a ese ID dentro de 'includes.Asset'.
            const asset = data.includes.Asset.find(a => a.sys.id === imagenId);
            // 3. Construimos la URL completa de la imagen.
            const imagenUrl = "https:" + asset.fields.file.url
            
            // Devolvemos un objeto con los campos que nos interesan para cada tarjeta.
            // Las propiedades (titulo, decripcin) deben coincidir con los nombres de los campos en Contentful.
            return{
                title: item.fields.titulo,
                description: item.fields.decripcin,
                img: imagenUrl
            }
        });
        // La función retorna la colección de objetos ya formateados.
        return fieldsCollection;
        
    })
}

// Esta es una función autoejecutable (IIFE). El código dentro de ella se ejecuta tan pronto como se carga el script.
(function apiPortfolio() {
    // Llama a la función getWorks con la URL del porfolio.
    getWorks(apiUrlPorfolio).then(function (works) { 
        // Una vez que la promesa se resuelve y tenemos los trabajos (works), los recorremos.
        for(let w of works){
            // Por cada trabajo, llamamos a addWorkCard para crear y mostrar su tarjeta en la página.
            addWorkCard(w);
        }
    });

    // --- Lógica para añadir el Footer ---
    // Se busca el elemento contenedor del footer en el HTML.
    const containerFooter = document.querySelector('#footer');
    // Si el contenedor existe...
    if (containerFooter) {
        // ...se llama a la función addFooter (definida en componentes/footer.js) 
        // para inyectar el HTML del footer dentro de este contenedor.
        addFooter(containerFooter);
    }
})()