function hamMenu(){
    const hamMenu = document.querySelector('.ham_menu');
    const offScreenMenu = document.querySelector('.nav-menu')

    hamMenu.addEventListener('click', () =>{
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle('active')
    })
}
 
function header(element){
    // Inyectamos el HTML directamente en el elemento <header>
    element.innerHTML = `
    <img src="./img/code-svgrepo-com.svg" alt="logo" width="75px"
        height= "50px">
        <nav class="nav-menu">
            <ul>
                
                <li><a href="/porfolio.html">Porfoli</a></li>
                <li><a href="/servicios.html">Servicios</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>
        <div>
            <div class="ham_menu">
                <span></span> 
                <span></span>
                <span></span>
            </div>
        </div>
    `;
}