class CustomStorage <T>  {
    //holds the array items 
    items: T[] = [];

    //constructor to initialize the arrays 
    constructor(items: T[]) {
        this.items = items;
    }
    //add method to add the arrays 
    add(item:T): void { 
        this.items.push(item);
}
 //method to remove items for the array 
 remove(item: T): void {
   this.items = this.items.filter((i) => i !== item);  
}
// method that retuerns all the array items 
getAll(): T[]{
    return this.items;
}
}


const nameStore = new  CustomStorage<string>([]);
nameStore.add("Okode");
nameStore.add("TypeScript");
console.log(nameStore.getAll()); // ['Okode', 'TypeScript']
nameStore.remove("Okode");
console.log(nameStore.getAll()); // ['TypeScript']

const numberStore = new  CustomStorage<number>([]);
numberStore.add(1);
numberStore.add(2);
console.log(numberStore.getAll()); // [1, 2]
numberStore.remove(1);
console.log(numberStore.getAll()); // [2]
