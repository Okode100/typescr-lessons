class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    describe(): void {
        console.log(`This animal is a ${this.species} named ${this.name}`);
    }
}

// 👉 Now create a Dog class that extends Animal
// It should have an additional method called `bark()` that logs "Woof! Woof!"
class Dog extends Animal {
    bark(): void {
        console.log("Woof! Woof!");
    }
}
// Create an instance of Dog and call its methods
const dog = new Dog("Buddy", "Dog");
dog.describe(); // This animal is a Dog named Buddy
dog.bark(); // This animal is a Dog named Buddy