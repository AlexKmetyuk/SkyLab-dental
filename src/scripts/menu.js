const menuBtn = document.querySelector('[data-menu-btn]');
const menu = document.querySelector('[data-menu]');
const menuBtnClose = document.querySelector('[data-menu-btn-close]')

function menuOpen() {
    menu.classList.toggle('visualy-hidden')
    menuBtn.classList.toggle('is-hidden')
    menuBtnClose.classList.toggle('is-hidden')
}

function menuClose() {
    menu.classList.toggle('visualy-hidden');
    menuBtnClose.classList.toggle('is-hidden')
    menuBtn.classList.toggle('is-hidden')
}

menuBtn.addEventListener('click', () => {
    menuOpen()
})

menuBtnClose.addEventListener('click', () => {
    menuClose()
})