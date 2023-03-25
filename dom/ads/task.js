const rotatorItems = Array.from(document.querySelectorAll('.rotator__case'));

function rotate() {
    let rotatorItemActive = document.querySelector('.rotator__case_active');
    
    if (rotatorItemActive === rotatorItems[rotatorItems.length - 1]) {
        rotatorItems[0].classList.add('rotator__case_active');
    } else {
        rotatorItemActive.nextElementSibling.classList.add('rotator__case_active');
    }
    rotatorItemActive.classList.remove('rotator__case_active');
    
}

const timer = setInterval(rotate, 1000);