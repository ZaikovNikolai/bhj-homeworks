const reveals = Array.from(document.querySelectorAll('.reveal'));

document.addEventListener('scroll', function() {
    for (let i = 0; i < reveals.length; i++) {
        const  { top, bottom } = reveals[i].getBoundingClientRect();

        if (top < window.innerHeight  && bottom > window.innerHeight) {
            active(reveals[i]);
        }
    }     
})

function active(elem) {
    elem.classList.add('reveal_active');
}


