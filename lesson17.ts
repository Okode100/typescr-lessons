interface Vehicle {
	brand:string;
	speed:number;
	drive(): void;
}
interface Electric {
	batteryLevel:number;
	charge():void;
}

class ElectricCar implements Vehicle, Electric {
    brand: string;
    speed: number;
    batteryLevel: number;

    constructor(brand: string, speed: number, batteryLevel: number) {
        this.brand = brand;
        this.speed = speed;
        this.batteryLevel = batteryLevel;
    }
	drive() {
		console.log(`This ${this.brand} is driving at ${this.speed} km/h with battery at ${this.batteryLevel}%`)
	}

	charge() {
		this.batteryLevel += 10;
		if (this.batteryLevel === 100) {
			this.batteryLevel = 100;
		console.log(`Charging... Battery is now at ${this.batteryLevel}%`);
	}
}

}
const tesla = new ElectricCar("Tesla", 150, 80);
tesla.drive();      // This Tesla is driving at 150 km/h with battery at 80%
tesla.charge();     // Charging... Battery is now at 90%
tesla.drive(); 
