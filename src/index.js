// import "./styles.css";
import { createProject } from "./project.js";
import { json } from './jsonController.js';

createProject('My test project 1');
createProject('2nd test');

console.log(JSON.stringify(json));



