addEventListener('DOMContentLoaded', () => {
    const boton_nav = document.querySelector('.boton_nav')
    if (boton_nav) {
        boton_nav.addEventListener('click', () => {
            const nav_header = document.querySelector('.nav_header')
            nav_header.classList.toggle('show')
        })
    }
})