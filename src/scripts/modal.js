(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtnHeaader: document.querySelector('[data-modal-open-header]'),
    openModalBtnFooter: document.querySelector('[data-modal-open-footer]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
      form: document.querySelector('[data-form]'),
      submitBtn: document.querySelector('[data-btn-submit]'),
      notify: document.querySelector('[data-notify]'),
      notifyCloseBtn: document.querySelector('[data-notify-close]')
    
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

    refs.submitBtn.addEventListener('click', () => {
        refs.form.classList.toggle('is-hidden')
        refs.notify.classList.toggle('is-hidden')
    })

    refs.notifyCloseBtn.addEventListener('click', () => {
        refs.modal.classList.toggle('is-hidden')
        refs.notify.classList.toggle('is-hidden')
        setTimeout(() => { refs.form.classList.toggle('is-hidden') }, 2000)
    })
  
})();