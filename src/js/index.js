import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')


const entryInput = document.querySelector ('.header__textaera');
const button = document.querySelector ('.header__button-save');
const loadButton = document.querySelector ('.header__button-load');

button.addEventListener ('click', () => {
    localStorage.setItem ('entry', entryInput.value);
})

const myResult = localStorage.getItem('entry');

console.log(myResult);

loadButton.addEventListener ('click', () => {
    const loadButton = ('entry');
})
