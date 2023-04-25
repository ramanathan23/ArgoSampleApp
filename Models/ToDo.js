class ToDo {
    constructor(id, title){
        this.id =  id;
        this.title = title;
        this.state =  "new"; 
    }
    markComplete = () => this.state = "complete";
}

module.exports = ToDo;   
