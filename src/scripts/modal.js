(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtnHeaader: document.querySelector('[data-modal-open-header]'),
    openModalBtnFooter: document.querySelector('[data-modal-open-footer]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]')
  };

    refs.openModalBtnHeaader.addEventListener('click', e => {
        refs.modal.classList.toggle('is-hidden')
    } 
    )

    refs.openModalBtn.addEventListener('click', e => {
        refs.modal.classList.toggle('is-hidden')
    } 
    )
    
    refs.closeModalBtn.addEventListener('click', e => {
        refs.modal.classList.toggle('is-hidden')
    })
  
    refs.openModalBtnFooter.addEventListener('click', e => {
        refs.modal.classList.toggle('is-hidden')
    })
  
})();