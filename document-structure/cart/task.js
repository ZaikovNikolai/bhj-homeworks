const cardProducts = document.querySelector('.cart__products');
const dec = document.getElementsByClassName('product__quantity-control_dec');
const inc = document.getElementsByClassName('product__quantity-control_inc');
const value = document.getElementsByClassName('product__quantity-value');
const addButton = document.getElementsByClassName('product__add');
const images = document.getElementsByClassName('product__image');

for (let i = 0; i < dec.length; i++) {
  dec[i].addEventListener('click', () => {
    if (value[i].textContent <= '1') {
      return false;
    } else {
      value[i].textContent--;
    }
  })
}

for (let i = 0; i < inc.length; i++) {
  inc[i].addEventListener('click', () => {
      value[i].textContent++;
  })
}

for (let i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener('click', () => {
    if (cardProducts.children.length === 0) {
      cardProducts.insertAdjacentHTML('beforeEnd', 
      `<div class="cart__product" data-id="${addButton[i].closest('.product').getAttribute('data-id')}">
      <img class="cart__product-image" src="${images[i].getAttribute('src')}" alt="">
      <div class="cart__product-count">${value[i].textContent}</div>
      </div>
      `)
      return false;
    }
    let card;
    for (let r = 0; r < cardProducts.children.length; r++) {
      if (cardProducts.children[r].dataset.id === addButton[i].closest('.product').dataset.id) {
        card = r;
        break;
      } else if (r === cardProducts.children.length) {
        card = undefined
        break
      } else {
        card = undefined
      }
    }
      
      if (card === undefined ) {
        cardProducts.insertAdjacentHTML('beforeEnd', 
        `<div class="cart__product" data-id="${addButton[i].closest('.product').getAttribute('data-id')}">
        <img class="cart__product-image" src="${images[i].getAttribute('src')}" alt="">
        <div class="cart__product-count">${value[i].textContent}</div>
        </div>
        `)
        return false;
      } else if (card >= 0) {
        cardProducts.children[card].querySelector('.cart__product-count').textContent = Number(cardProducts.children[card].querySelector('.cart__product-count').textContent) + Number(value[i].textContent);
        return false;
  }    
})
  
}