class Animal {
    name:string;
    species:string;
    constructor(name:string, species:string) {
        this.name = name;
        this.species = species;
    }
     discribe():void {
        console.log(`THis animals is a ${this.name} and it name is ${this.species}`);
     }
}
const dog = new Animal('Dog','Buddy');
dog.discribe();
