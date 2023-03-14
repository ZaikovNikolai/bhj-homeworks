const modal = document.getElementById('modal_main');
const modals = document.querySelectorAll('.modal');
const modalClose = Array.from(document.getElementsByClassName('modal__close'));
const showSuccess = document.querySelector('.show-success');

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function() {
       const active = modalClose[i].closest('.modal');
       active.classList.remove('modal_active');
    }
}

showSuccess.onclick = () => {
    modals[0].classList.remove('modal_active');
    modals[1].classList.add('modal_active');
}

modal.classList.add('modal_active');