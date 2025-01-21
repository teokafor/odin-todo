// import "./styles.css";
import { createProject } from "./project.js";
import { createTodo } from "./todo.js";
import { json } from './jsonController.js';

createProject('My test project 1');
createProject('2nd test');

createTodo('My test project 1', 'Todo title!', 'testin', '2001', 6);
createTodo('2nd test', 'test 2', 'sweet', '2222', 1);

console.log(JSON.stringify(json));



