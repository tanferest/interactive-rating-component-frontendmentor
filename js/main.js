'use strict';

const rateOptions = document.querySelector('.option-list');
const ratingState = document.querySelector('.js-rating');
const thankYouState = document.querySelector('.rated');
const selectedRate = document.querySelector('.js-selected');
const btn = document.querySelector('.js-btn');
let rate = '';
const message = document.querySelector('.message');

function submit() {
  if (rate !== '') {
    ratingState.classList.add('hidden');
    thankYouState.classList.remove('hidden');
    message.classList.add('hidden');
    selectedRate.innerHTML = `<p class="selected"> You selected ${rate} out of 5</p>`;
  } else {
    message.classList.remove('hidden');
  }
}

function handleSubmit(event) {
  event.preventDefault();
  submit();
}

function handleRate(event) {
  rate = parseInt(event.target.parentElement.id);
  return rate;
}

btn.addEventListener('click', handleSubmit);
rateOptions.addEventListener('click', handleRate);
