const clicker = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

cookie.onclick = () => {
    clicker.textContent++;
    if (clicker.textContent % 2 == 1) {
        cookie.width = '230';
        cookie.height = '150';
    } else {
        cookie.width = '200';
        cookie.height = '128';
    }
}



