

export class TodoList{

    constructor(){
        this.todos = [];
    }

    nuevoTodo (todo) {

        this.todos.push(todo);
    }

    eliminarTodo (id) {

      
        this.todos=    this.todos.filter (todo => todo.id != id ) // regresa um arreglo sin el todo

    }

    marcaCompletado (id) {

        for(const todo of this.todos){
            if(todo.id == id){
                todo.completado  = !todo.completado;
                break;

            }
        }

    }

    eliminartCompletados(){
        this.todos=    this.todos.filter (todo => ! todo.completado ) // regresa um arreglo sin el todo
    }

}