import { json } from './jsonController.js';
import { getTodos, removeTodo, createTodo } from './todo.js';
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

    // Build drawer controls & associated buttons:
    let drawerControls = document.createElement('div');
    drawerControls.classList.add('drawer-controls');

    let backButton = document.createElement('button');
    backButton.textContent = '⬅';
    backButton.addEventListener('click', () => drawer.parentElement.removeChild(drawer));
    drawerControls.appendChild(backButton);

    let newButton = document.createElement('button');
    newButton.textContent = '+';
    newButton.addEventListener('click', () => drawTodoDialog(projectName));
    drawerControls.appendChild(newButton);

    drawer.appendChild(drawerControls);


    // Populate drawer with todo elements:
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
    }
    document.body.appendChild(drawer);
}


function drawTodoDialog(projectName) {
    let dialog = document.createElement('div');
    dialog.classList.add('todo-dialog');

    dialog.innerHTML = `
        <div>Add new task...</div><div>Title:</div><input type="text" id="todo-input-title">
        <div>Description:</div><input type="text" id="todo-input-desc">
        `;
    
    
    // Buttons:
    let createButton = document.createElement('button');
    createButton.textContent = 'Create';

    let titleValue = dialog.querySelector('#todo-input-title');
    let descValue = dialog.querySelector('#todo-input-desc');

    createButton.addEventListener('click', () => createTodo(projectName, titleValue.value, descValue.value, 0, 0));
    dialog.appendChild(createButton);

    let cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => dialog.parentElement.removeChild(dialog));
    dialog.appendChild(cancelButton);
    
    document.body.appendChild(dialog);
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