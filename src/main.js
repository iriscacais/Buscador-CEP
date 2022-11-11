// const cep = '30130-010'; 
// fetch(`https://viacep.com.br/ws/${cep}/json/`)
//   .then(response => response.json())
//   .then(data => console.log(data));

//utilizando o async await com o tratamento de erro try/catch

import Swal from 'sweetalert2';

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');

buttonEl.addEventListener('click', handleClick);

async function handleClick() {
  const cep = inputEl.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();

    preEl.innerHTML = JSON.stringify(data);
    return data;
  } catch (error) {
    Swal.fire('Ops', error.message, 'error');
  }
}
