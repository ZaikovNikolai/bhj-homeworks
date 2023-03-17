const valueDropdown = document.querySelector('.dropdown__value');
const listDropdown = document.querySelector('.dropdown__list');

valueDropdown.onclick = function () {
    listDropdown.classList.toggle('dropdown__list_active');
}

const items = Array.from(document.getElementsByClassName('dropdown__item'));

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function(event) {
        valueDropdown.textContent = items[i].textContent;
        listDropdown.classList.remove('dropdown__list_active');
        event.preventDefault()
    })
    
}
