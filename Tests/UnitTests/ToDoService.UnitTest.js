const sinon = require("sinon");
const expect = require("chai").expect;
const Store = require('../../Persistence/InMemory');
const ToDoService = require('../../Services/ToDoService');

describe( "ToDoService Unit Tests", () => {

    var store = sinon.mock(Store.prototype);
    var todoService = new ToDoService(store.object);
    it("ToDoService should list all todos", () => {
      store.expects("getAll").returns([{},{}])
       let list = todoService.ListToDo();
       store.verify();
       expect(list.length).equals(2);
	});

    it("ToDoService should complete todo", () => {
        store.expects("getByKey").returns({});
        todoService.CompleteToDo(0);
        store.verify();
    });

    it("ToDoService should create todo", () => {
        store.expects("lastId").returns(100);
        store.expects("push");
        todoService.CreateToDo({});
        store.verify();
    });
});