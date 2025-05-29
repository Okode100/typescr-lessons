var CustomStorage = /** @class */ (function () {
    //constructor to initialize the arrays 
    function CustomStorage(items) {
        //holds the array items 
        this.items = [];
        this.items = items;
    }
    //add method to add the arrays 
    CustomStorage.prototype.add = function (item) {
        this.items.push(item);
    };
    //method to remove items for the array 
    CustomStorage.prototype.remove = function (item) {
        this.items = this.items.filter(function (i) { return i !== item; });
    };
    // method that retuerns all the array items 
    CustomStorage.prototype.getAll = function () {
        return this.items;
    };
    return CustomStorage;
}());
var nameStore = new CustomStorage([]);
nameStore.add("Okode");
nameStore.add("TypeScript");
console.log(nameStore.getAll()); // ['Okode', 'TypeScript']
nameStore.remove("Okode");
console.log(nameStore.getAll()); // ['TypeScript']
var numberStore = new CustomStorage([]);
numberStore.add(1);
numberStore.add(2);
console.log(numberStore.getAll()); // [1, 2]
numberStore.remove(1);
console.log(numberStore.getAll()); // [2]
