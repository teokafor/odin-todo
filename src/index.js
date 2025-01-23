// import "./styles.css";
import { createProject, removeProject, getProjects } from "./project.js";
import { createTodo, getTodo, getTodos, removeTodo } from "./todo.js";
import { json } from './jsonController.js';
import { drawProjects, drawEmpty } from "./renderController.js";
import "./styles.css";
// Should be the one to call either renderConsole for prompts or renderPage for GUI.


createProject('Default');
createProject('test');
createProject('test62');
createProject('test5');
createProject('test3');
createProject('test32');
createProject('test2');

// createProject('2nd test');
createTodo('Default', 'Finish this project', 'I think the bones are done(ish)', '2025-01-29', 3);
createTodo('Default', 'weqw', 'I think the bones are done(ish)', '2025-01-29', 3);
createTodo('Default', 'dasda', 'I think the bones are done(ish)', '2025-01-29', 3);
createTodo('test', 'dasdasda', 'I think the bones are done(ish)', '2025-01-29', 3);
createTodo('Default', 'qthewunjl', 'I think the bones are done(ish)', '2025-01-29', 3);
createTodo('test', 'weqw', 'I think the bones are done(ish)', '2025-01-29', 3);

drawProjects();

// drawEmpty();

// console.log(JSON.stringify(json));



