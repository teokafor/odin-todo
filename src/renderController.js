import { json } from './jsonController.js';
import { getTodos } from './todo.js';
const content = document.querySelector('#content');

function drawProjects() {
    for(let project in json) {
        let addition = document.createElement('div');
        addition.textContent = project;

        for (let todo in json[project]) { 
            let eleTodo = document.createElement('div');
            eleTodo.textContent = json[project][todo].title;
            addition.appendChild(eleTodo);               
        }

        addition.addEventListener('click', () => {
            console.log(`${project} was clicked.`);
            drawProject(project);
        });

        content.appendChild(addition);   
    }
}

function drawProject(projectName) {
    // let drawer = document.createElement('div');
    // drawer.classList.add('project-drawer');
    // content.appendChild(drawer);
}


function drawEmpty() {
    while(content.lastChild) {
        content.removeChild(content.firstChild);
    }
}

export { drawProjects, drawEmpty };