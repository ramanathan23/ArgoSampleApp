const express = require("express");
const bodyParser = require("body-parser");
const ToDoRoute =  require ("./Routes/ToDo.Route");
const Store = require ("./Persistence/InMemory");
const ToDoService = require ("./Services/ToDoService");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

new ToDoRoute(app, new ToDoService(new Store()));

app.get('*', (req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, () => {  console.log('We are live on ' + port);});


