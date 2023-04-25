class Store {
    internalStore = []

    constructor(){

    }
    
    getAll(){
        return this.internalStore;
    } 
    getByKey(id) {
        return this.internalStore[id];
    }
    push(obj) {
        this.internalStore.push(obj);
    }
    lastId(){
        return this.internalStore.length
    }
}

module.exports = Store;