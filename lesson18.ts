class Myarray<T> {
    items: T[] = [];
    // Constructor to initialize the items array
     constructor(items:T[] ){
        this.items = items;
     }
    // Method to add an item to the array
    wrapInArray(item: T): void {
        this.items.push(item);
    }
}
const number = new Myarray<number>([99]);


console.log(number.items); // [Function: array]