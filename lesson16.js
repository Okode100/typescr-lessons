var Car = /** @class */ (function () {
    function Car(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    Car.prototype.drive = function () {
        console.log("This ".concat(this.brand, " is driving at ").concat(this.speed, " km/h"));
    };
    return Car;
}());
// create a new car	
var myCar = new Car("Toyota", 120);
myCar.drive();
