import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(formDataInput, 500));
form.addEventListener('submit', formSubmit);

const keyValue = 'feedback-form-state';
const savedItems = JSON.parse(localStorage.getItem(keyValue)) || {};

function formDataInput(event) {
  savedItems[event.target.name] = event.target.value;
  localStorage.setItem(keyValue, JSON.stringify(savedItems));
}

function formSubmit(event) {
  event.preventDefault();
  if (form.email.value === '' || form.message.value === '') {
    return alert('All items must be completed');
  }
  const saveData = localStorage.getItem(keyValue);
  console.log(JSON.parse(saveData));

  event.currentTarget.reset();
  localStorage.removeItem(keyValue);
}

function readyUserData() {
  form.email.value = savedItems.email || '';
  form.message.value = savedItems.message || '';
}
readyUserData();
