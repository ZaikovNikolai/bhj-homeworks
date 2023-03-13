const link = document.getElementsByClassName('menu__link');
const menu = Array.from(document.getElementsByClassName('menu'));
const item = document.getElementsByClassName('menu__item');

for (let i = 0; i < link.length; i++) {
  link[i].onclick = () => {
    if (item[i].querySelector('.menu_sub') !== null) {
        
       link[i].parentElement.querySelector(".menu_sub").classList.toggle("menu_active");
       return false;
    }
  }
}