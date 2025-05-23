interface vehicle {
  brand:string;
  speed:number;
  drive();
	
}

car implements vehicle {
	constructor(brand:string, speed:number){
		this.brand = brand;
		this.speed = speed;
	}
	drive(){
          return `The ${brand} is driving at a ${speed}`;
	}
}
 
const car0 = new car("Toyota", 120);
car0.drive();

