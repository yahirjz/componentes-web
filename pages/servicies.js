
// ---- Mis servicios ----
//Api de servicios 
const apiUrlServicios ="https://cdn.contentful.com/spaces/1on48ozhnyj8/environments/master/entries?access_token=fkDOUAmyb0C5Ip3_RTh1gBbOx82If3px8NcWluQHRdA&content_type=servicios"

 function addWorkCard(params = {}){
    const template = document.querySelector('#porfolio__card-template');
    const container = document.querySelector('.porfolio__conten');
    
    //clonar un elemento
    const clone = document.importNode(template.content, true);  

    //Buscamos los elementos DENTRO DEL CLON para agregar los datos
    clone.querySelector(".porfolio__card-title").textContent = params.title;
    clone.querySelector(".porfolio__card-description").textContent = params.description;
    clone.querySelector(".porfolio__img").src = params.img;

    container.appendChild(clone);
}

 function getWorks(apiUrl){
    return fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
       
        const fieldsCollection = data.items.map(item =>{
            // --- IMG ---
            // Sacamos el ID de la imagen del campo
            const imagenId = item.fields.image.sys.id;
            //Buscamos el assent correspondiente a 'includes.Asset'
            const asset = data.includes.Asset.find(a => a.sys.id === imagenId);
            // Construimos la url
            const imagenUrl = "https:" + asset.fields.file.url
            
            //* las propiedades de abajo cambian al Contentful
            return{
                title: item.fields.title,
                description: item.fields.description,
                img: imagenUrl
            }
        });
        return fieldsCollection;
        
    })
}


(function apiServicios(){
    getWorks(apiUrlServicios).then(function (works){
        for(let w of works){
            addWorkCard(w)
        }
    })
})()