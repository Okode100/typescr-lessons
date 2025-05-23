interface Vehicle {
  brand:string;
  speed:number;
  drive();
	
}

class Car implements Vehicle  {
  brand: string;
  speed: number;
  constructor(brand: string, speed: number) {
	this.brand = brand;
	this.speed = speed;
  }
  drive() {
	console.log(`This ${this.brand} is driving at ${this.speed} km/h`);

  }
}
// create a new car	
const myCar = new Car("Toyota", 120);
myCar.drive();

