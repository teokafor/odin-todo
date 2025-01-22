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
    let drawer = document.createElement('div');
    drawer.classList.add('project-drawer');

    for (let todo in json[projectName]) {
        let todoItem = document.createElement('div');

        todoItem.innerHTML = 
        `<div class="todo-shell">
            <div class="todo-left">
                <div>${json[projectName][todo].title}</div>
                <div>${json[projectName][todo].desc}</div>
            </div>

            <div class="todo-right">
                <div>Created: 2022-10-07</div>
                <div class="todo-buttons">
                    <div>YeaButton</div>
                    <div>NayButton</div>
                </div>
            </div>
        </div>`;
        drawer.appendChild(todoItem);
        document.body.appendChild(drawer);
    }
}


function drawEmpty() {
    while(content.lastChild) {
        content.removeChild(content.firstChild);
    }
}

export { drawProjects, drawEmpty };