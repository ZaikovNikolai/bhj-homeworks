const tabBtn = Array.from(document.getElementsByClassName('tab'));
const tabText = Array.from(document.getElementsByClassName('tab__content'));

for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', function() {
        tabBtn.forEach(elem => elem.classList.remove('tab_active'));
        tabText.forEach(elem => elem.classList.remove('tab__content_active'));
        this.classList.add('tab_active');
        tabText[i].classList.add('tab__content_active');
    })
    
}
