var ElectricCar = /** @class */ (function () {
    function ElectricCar(brand, speed, batteryLevel) {
        this.brand = brand;
        this.speed = speed;
        this.batteryLevel = batteryLevel;
    }
    ElectricCar.prototype.drive = function () {
        console.log("This ".concat(this.brand, " is driving at ").concat(this.speed, " km/h with battery at ").concat(this.batteryLevel, "%"));
    };
    ElectricCar.prototype.charge = function () {
        this.batteryLevel += 10;
        if (this.batteryLevel === 100) {
            this.batteryLevel = 100;
            console.log("Charging... Battery is now at ".concat(this.batteryLevel, "%"));
        }
    };
    return ElectricCar;
}());
var tesla = new ElectricCar("Tesla", 150, 80);
tesla.drive(); // This Tesla is driving at 150 km/h with battery at 80%
tesla.charge(); // Charging... Battery is now at 90%
tesla.drive();
