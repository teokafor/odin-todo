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

export { createTodo };