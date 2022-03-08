
export class Todo {


    constructor(tarea){

        this.tarea         = tarea;
        this.id            = new Date().getTime(); // crea los ids con fecha y hora
        this.completado    = false;
        this.creado        = new Date();
    }
}