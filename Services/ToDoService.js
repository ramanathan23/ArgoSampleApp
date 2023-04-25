class ToDoService {

    constructor(store){
        this.store = store;
    }

    ListToDo = () => this.store.getAll();
    CreateToDo = (todo) => {
        todo.id = this.store.lastId();
        this.store.push(todo)
    };
    CompleteToDo = (id) => {
        this.store.getByKey(id).state = "complete"
    };
}

module.exports = ToDoService;