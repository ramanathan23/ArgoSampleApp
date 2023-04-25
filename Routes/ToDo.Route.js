class ToDoRoute {
    constructor(app, toDoService) { 
        app.route('/todo')
        .get((req, res) => res.json(toDoService.ListToDo()))
        .post((req, res) => {
            toDoService.CreateToDo(req.body);
            res.end();
        })
        .patch((req, res) => {
            toDoService.CompleteToDo(req.body.id);
            res.end();
        });
    }
}

module.exports = ToDoRoute;