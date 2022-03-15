import './styles.css';

import {Todo, TodoList, crearTodoHtml} from './classes';


export const todoList= new TodoList();

todoList.todos.forEach(crearTodoHtml); // es lo mismo que  todoList.todos.forEach( todo =>  crearTodoHtml(todo )
 

