const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const list = document.getElementById('tasks__list');
let removeButton;

button.addEventListener('click', (event) => {
  event.preventDefault();
  if (input.value == '') {
    return false;
  } else {
    list.insertAdjacentHTML("beforeEnd",
      `<div class="task">
      <div class="task__title">
        ${input.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`
    )
   input.value = '';
   removeButton = document.getElementsByClassName(`task__remove`);
  }
})

list.addEventListener('click', (event) => {
  let remove = event.target;
  if (remove.classList.contains('task__remove') ) {
    remove.closest('.task').remove();
}
})


 


  
  



