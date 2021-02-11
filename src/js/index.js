import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');



const textarea = document.querySelector ('.textarea--js');     
const buttonSave = document.querySelector('.save--js');
const buttonLoad = document.querySelector('.load--js');

const currentValue = localStorage.getItem('entry');
if (currentValue)  {
document.querySelector(".info--js").innerHTML = "✏️";
 }

        
buttonSave.addEventListener('click', (e) => {
e.preventDefault();
localStorage.setItem('entry', textarea.value);
if (textarea.value) {
document.querySelector(".info--js").innerHTML = "✏️";
} else {
document.querySelector(".info--js").innerHTML = " ";

}
})

buttonLoad.addEventListener('click', (e) => {
    e.preventDefault();
    textarea.value = localStorage.getItem('entry');
});

