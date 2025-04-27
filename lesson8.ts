interface car {
    brand: string;
    model: string;
    year: number;
}
 const myCar: car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020

 }

 console.log((`My car is a ${myCar.brand} ${myCar.model} from ${myCar.year}`)); // Output: My car is a Toyota Corolla from 2020