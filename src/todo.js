import { json } from './jsonController.js';

function createTodo (projectName, title, desc, endDate, priority) {
    // add timestamp
    json[projectName].push({
        title, 
        desc, 
        endDate, 
        priority
    });    
}

const removeTodo = (projectName, todoTitle) => {
    json[projectName] = json[projectName].filter(todo => todo.title !== todoTitle);
        
};

function getTodos(projectName) {
    return json[projectName];
}

function getTodo(projectName, todoTitle) {
    return json[projectName].filter(todo => todo.title === todoTitle);
}

export { createTodo, removeTodo, getTodos, getTodo };