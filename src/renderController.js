import { json } from './jsonController.js';

const content = document.querySelector('#content');

function drawProjects() {
    for(let project in json) {
        let addition = document.createElement('div');
        addition.textContent = project;
        content.appendChild(addition);   
    }
}


function drawEmpty() {
    while(content.lastChild) {
        content.removeChild(content.firstChild);
    }
}

export { drawProjects, drawEmpty };