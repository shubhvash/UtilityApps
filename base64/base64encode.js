const input = document.querySelector('.input');
const output = document.querySelector('.output');
const encode = document.querySelector('.encode');
const reset = document.querySelector('.reset');

encode.addEventListener('click', () => {
    output.value = btoa(input.value);
});

reset.addEventListener('click', () => {
    output.value = '';
    input.value = '';
});