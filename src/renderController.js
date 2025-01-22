import { json } from './jsonController.js';
import { getTodos, removeTodo } from './todo.js';
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

        let yesButton = document.createElement('button');
        let noButton  = document.createElement('button');

        yesButton.addEventListener('click', () => removeTodo(projectName, json[projectName][todo].title));
        yesButton.addEventListener('click', () => drawEmpty(projectName));
        noButton.addEventListener('click', () => removeTodo(projectName, json[projectName][todo].title));
        noButton.addEventListener('click', () => drawEmpty(projectName));

        yesButton.textContent="✓"
        noButton.textContent="✕"
        
        todoItem.innerHTML = 
        `<div class="todo-shell">
            <div class="todo-left">
                <div>${json[projectName][todo].title}</div>
                <div>${json[projectName][todo].desc}</div>
            </div>

            <div class="todo-right">
                <div>Created: 2022-10-07</div>
                <div class="todo-buttons">
                    
                </div>
            </div>
        </div>`;

        let buttonsGroup = todoItem.querySelector('.todo-buttons');
        buttonsGroup.appendChild(yesButton);
        buttonsGroup.appendChild(noButton);

        drawer.appendChild(todoItem);
        document.body.appendChild(drawer);
    }
}


// projectName only neds to be used when redrawing the drawer.
function drawEmpty(projectName) {
    while(content.lastChild) {
        content.removeChild(content.firstChild);
    }
    drawProjects();

    // clear drawer if it exists
    let drawer = document.querySelector('.project-drawer');
    if(drawer) {
        while(drawer.lastChild) {
            drawer.removeChild(drawer.firstChild);
        }
        drawer.parentElement.removeChild(drawer);
        drawProject(projectName);
    }
}

export { drawProjects, drawEmpty };