import './styles.css';

import {Todo, TodoList} from './classes';

const todoList= new TodoList();

const tarea = new Todo('aprender JavaScript');
const tarea2 = new Todo('Comprar unicornio');



todoList.nuevoTodo( tarea);
todoList.nuevoTodo( tarea2);

console.log(todoList);
