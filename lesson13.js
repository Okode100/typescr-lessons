var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, species) {
        this.name = name;
        this.species = species;
    }
    Animal.prototype.describe = function () {
        console.log("This animal is a ".concat(this.species, " named ").concat(this.name));
    };
    return Animal;
}());
// 👉 Now create a Dog class that extends Animal
// It should have an additional method called `bark()` that logs "Woof! Woof!"
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
// Create an instance of Dog and call its methods
var dog = new Dog("Buddy", "Dog");
dog.describe(); // This animal is a Dog named Buddy
dog.bark(); // This animal is a Dog named Buddy
