import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(saveItems, 500));
form.addEventListener('submit', funcOnSaveItems);

const objItem = {};

function saveItems(e) {
  objItem[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(objItem));
}

function funcOnSaveItems(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

(function dataLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();


