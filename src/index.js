import './styles.css';

import {Todo, TodoList, crearTodoHtml} from './classes';


export const todoList= new TodoList();

const tarea = new Todo('aprender JavaScript');



todoList.nuevoTodo( tarea);

crearTodoHtml( tarea );

localStorage.setItem('mi-key','abc123');

// setTimeout(()=> {
//     localStorage.removeItem('mi-key')
// },1500)


