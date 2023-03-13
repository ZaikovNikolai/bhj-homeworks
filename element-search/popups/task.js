const modal = document.getElementById('modal_main');
const modals = document.querySelectorAll('.modal');
const modalClose = document.getElementsByClassName('modal__close');
const showSuccess = document.querySelector('.show-success');

let firstElement = modalClose[0];

let secondElement = modalClose[2];

firstElement.onclick = () => {
	modals[0].classList.remove('modal_active');
}

secondElement.onclick = () => {
	modals[1].classList.remove('modal_active');
}

showSuccess.onclick = () => {
    modals[0].classList.remove('modal_active');
    modals[1].classList.add('modal_active');
}

modal.classList.add('modal_active');