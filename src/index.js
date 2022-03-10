import './styles.css';

import {Todo, TodoList, crearTodoHtml} from './classes';


export const todoList= new TodoList();

const tarea = new Todo('aprender JavaScript');



todoList.nuevoTodo( tarea);

crearTodoHtml( tarea );
console.log(todoList);


