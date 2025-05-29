var Myarray = /** @class */ (function () {
    // Constructor to initialize the items array
    function Myarray(items) {
        this.items = [];
        this.items = items;
    }
    // Method to add an item to the array
    Myarray.prototype.wrapInArray = function (item) {
        this.items.push(item);
    };
    return Myarray;
}());
var number = new Myarray([99]);
console.log(number.items); // [Function: array]
