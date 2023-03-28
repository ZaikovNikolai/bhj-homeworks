const chat = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
let time = new Date();
const response = [
    'Кто тут?',
    'Где ваша совесть?',
    'К сожалению  все операторы сейчас заняты! Не пишите нам больше!',
    'Вы не купили не одного товара, что б так с нами разговаривать!',
    'Добрый день! До свидания!',
    'Мы нечего не будем вам продавать!',
]

chat.addEventListener('click', (e) => {
    chat.classList.add('chat-widget_active');
})

input.addEventListener('keydown', (e) => {

    if (input.value == "" && e.key === 'Enter') {
        return false;
    }

    if (e.key === 'Enter') {
        messages.innerHTML += `<div class="message message_client">
        <div class="message__time">${time.toLocaleTimeString()}</div>
        <div class="message__text">
          ${input.value}
        </div>
      </div>`
      input.value = '';
      robotsResponse();
    }
})

function robotsResponse() {
    messages.innerHTML += `<div class="message">
    <div class="message__time">${time.toLocaleTimeString()}</div>
    <div class="message__text">
      ${response[Math.floor(Math.random() * response.length)]}
    </div>
  </div>`
}


