

export class TodoList{

    constructor(){
        this.cargarLocalStorage();
    }

    nuevoTodo (todo) {

        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo (id) {

      
        this.todos=    this.todos.filter (todo => todo.id != id ) // regresa um arreglo sin el todo
        this.guardarLocalStorage();
    }

    marcaCompletado (id) {

        for(const todo of this.todos){
            if(todo.id == id){
                todo.completado  = !todo.completado;
                this.guardarLocalStorage();
                break;

            }
        }

    }

    eliminartCompletados(){
        this.todos=    this.todos.filter (todo => ! todo.completado ) // regresa um arreglo sin el todo
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify (this.todos));

    }

    cargarLocalStorage(){

        this.todos + (localStorage.getItem('todo')) 
                      ? this.todos = JSON.parse (localStorage.getItem('todo'))
                      : this.todos = [];
    }

}