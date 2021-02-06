const { fn } = require("jquery")

const services = document.querySelector('#services')
const commentInput = document.querySelector('#comment')
const modal = document.querySelector('[data-modal]')

function addServices(service) {
    commentInput.value = `Хочу получить консультацию по "${service}"`
}

function openModal() {
    modal.classList.toggle('is-hidden')
}

services.addEventListener('click', e => {
    addServices(e.target.getAttribute('alt'))
    openModal()
})