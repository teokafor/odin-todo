import { json } from './jsonController.js';

function createProject(projectName) {
    json[projectName] = [];
}


export { createProject };

/* 
// Create the JSON structure
const projectJson = {};    

// Add a project (named empty array)
projectJson[projectName] = [];

// Hyopthetically, in the note.js module...  
const testing = {
    title: "finish todo project",
    desc: "test!",
    endDate: "2025-02-28",
    priority: 10,
    startDate: "2024-10-28",
};

// Add new todo task to desired project
projectJson[projectName].push(testing);    
*/