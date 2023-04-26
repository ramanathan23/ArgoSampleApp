const assert = require('assert')
const Store = require('../../Persistence/InMemory');

var store = new Store();

describe( "Store Unit Tests", () => {
	
    it("Store should return zero objects when initialized", () => {
        assert.equal(store.getAll().length == 0, true);
    });

    it("Store should push objects when requested", () => {
        store.push({});
        assert.equal(store.getAll().length > 0, true);
    });

    it("Store should retun objects by key", () => {
        store.push({});
        assert.equal(store.getByKey(0) != null, true);
    });
});