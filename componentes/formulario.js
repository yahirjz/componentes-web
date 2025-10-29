function addFormulario(element){
    element.innerHTML =`
    <h2 class="title__formulario">Escribeme</h2>
            <form action="" class="formulario" id="formulario">
                <div class="grup__input-formulario">
                    <div class="input__field">
                        <label for="" class="label__formulario">Nombre</label>
    
                        <input type="text" placeholder="Tu nombre" class="input__formulario formulario__input--big ">
                    </div>
                    <div class="input__field">
                        <label for="" class="label__formulario">Email</label>
                        <input type="email" placeholder="Ej: email@email.com" class="input__formulario formulario__input--big">
                    </div>
                </div>
                <div class="input__field">
                    <label for="" class="label__formulario">Mensaje</label>
                    <textarea name="" id="" class="input__areatext"></textarea>
                </div>
                <div class="content__button">
                    <button class="formulario__button">
                        Enviar
                        <img src="img/Vector.svg" alt="Enviar" width="20" height="20">
                    </button>
                </div>
            </form>
    
    `

}


const form = document.querySelector('#formulario');
form.addEventListener('submit', validacionForm);

function validacionForm(event){
    event.preventDefault() ;

    const nombre = document.querySelector('.input__formulario[type = "text"]').value;
    const email = document.querySelector('.input__formulario[type = "email"]').value;
    const mensaje = document.querySelector('.input__areatext').value;

    const data = {
        to:email,
        message: mensaje
    };

    fetch('https://apx.school/api/utils/email-to-student', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data) // Convertimos el objeto a JSON
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

}