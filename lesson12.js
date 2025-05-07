var Animal = /** @class */ (function () {
    function Animal(name, species) {
        this.name = name;
        this.species = species;
    }
    Animal.prototype.discribe = function () {
        console.log("THis animals is a ".concat(this.name, " and it name is ").concat(this.species));
    };
    return Animal;
}());
var dog = new Animal('Dog', 'Buddy');
dog.discribe();
