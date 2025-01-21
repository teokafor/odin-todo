// import "./styles.css";
import { createProject, removeProject } from "./project.js";
import { createTodo, removeTodo } from "./todo.js";
import { json } from './jsonController.js';

import { menuOptions } from "./renderConsole.js";
// Should be the one to call either renderConsole for prompts or renderPage for GUI.



createProject('My test project 1');
createProject('2nd test');

createTodo('My test project 1', 'Todo title!', 'testin', '2001', 6);
createTodo('2nd test', 'test 40', 'here!', '2222', 1);
createTodo('2nd test', 'test 2', 'delete me!', '2222', 1);
createTodo('2nd test', 'test 420', 'im still here!', '2222', 1);

removeTodo('2nd test', 'test 2');
removeProject('My test project 1');

console.log(JSON.stringify(json));



