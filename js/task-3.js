// Напиши скрипт, який під час набору тексту в інпуті
// input#name-input (подія input) підставляє його
// поточне значення в span#name-output як імя для привітання.
// Обовязково очищай значення в інпуті по краях від пробілів
// методом trim(). Якщо інпут порожній або містить лише пробіли,
// то замість імені у спан має підставлятися рядок "Anonymous".

const input = document.querySelector('#name-input');
const changeName = document.querySelector('#name-output');

input.addEventListener('input', event => {
  const outputName = event.target.value.trim('');
  if (outputName !== '') {
    changeName.textContent = outputName;
  } else {
    changeName.textContent = 'Anonymous';
  }
});
