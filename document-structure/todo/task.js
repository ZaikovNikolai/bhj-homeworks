const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const list = document.getElementById('tasks__list');
let removeButton;

button.addEventListener('click', (event) => {
  event.preventDefault();
  const value = input.value;
  if (value.trim() == '') {
    return false;
  } 

  list.insertAdjacentHTML("beforeEnd",
    `<div class="task">
    <div class="task__title">
      ${value}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`
  )
  input.value = '';
  removeButton = document.getElementsByClassName(`task__remove`);
})

list.addEventListener('click', (event) => {
  let remove = event.target;
  if (remove.classList.contains('task__remove') ) {
    remove.closest('.task').remove();
}
})


 


  
  



