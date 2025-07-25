function menuToogle(){

    const menu = document.getElementById('menu')
    const menu_bar = document.querySelector('.menu-bar')

    menu.addEventListener("click", () =>{

        menu_bar.classList.toggle('active')

        if (menu_bar.classList.contains('active')) {
            menu.textContent = 'Salir';
        } else {
            menu.textContent = 'Menú';
        }

    })

}

menuToogle()