const book = document.getElementById('book');
const fontSize = document.querySelectorAll('.font-size');

for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener('click', function(event) {
      fontSize.forEach(elem => elem.classList.remove('font-size_active') );
      fontSize[i].classList.add('font-size_active');
      event.preventDefault();
      if (fontSize[i].className.includes('font-size font-size_small')) {
        book.classList.remove("font-size_big");
        book.classList.add('font-size_small');
      } else if(fontSize[i].className.includes('font-size font-size_big')) {
        book.classList.remove("font-size_small");
        book.classList.add('font-size_big');
      } else {
        book.classList.remove("font-size_big");
        book.classList.remove('font-size_small');
      }
    })
    
}
