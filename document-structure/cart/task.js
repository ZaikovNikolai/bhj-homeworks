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
    const carts = Array.from(document.getElementsByClassName('cart__product'));
    const productInCard = carts.find(function(item) {
     return item.dataset.id == addButton[i].closest('.product').dataset.id;
    });
    if(productInCard) {
      productInCard.querySelector('.cart__product-count').textContent = Number(productInCard.querySelector('.cart__product-count').textContent) + Number(value[i].textContent);
    } else {
      cardProducts.insertAdjacentHTML('beforeend', 
        `<div class="cart__product" data-id="${addButton[i].closest('.product').getAttribute('data-id')}">
          <img class="cart__product-image" src="${images[i].getAttribute('src')}" alt="">
          <div class="cart__product-count">${value[i].textContent}</div>
        </div>
      `)

    }
  })
}


