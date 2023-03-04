const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let quantityDead = 0;
let quantityLost = 0;


function getHole( index ) {
  for (let i = 1; i <= index; i++) {
    let hole = document.getElementById(`hole${i}`);
    hole.onclick = () => {
        if (hole.classList.contains( 'hole_has-mole' )) {
            quantityDead++;
            rewrite();
            checkResult();
        } else {
            quantityLost++;
            rewrite();
            checkResult();
        }
    }
  } 
}

function rewrite() {
    dead.textContent = quantityDead;
    lost.textContent = quantityLost;
}

function result(text) {
    alert('Вы ' + text + '!');
    quantityDead = 0;
    quantityLost = 0;
    rewrite();
    return;
}


function checkResult() {
    if (quantityDead === 10) {
        text ='победили';
        result(text);
    } else if (quantityLost === 5) {
        text ='проиграли';
        result(text);
    }
}

getHole(9);
