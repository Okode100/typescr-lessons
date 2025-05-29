function printLength<T extends { length: number }>(value: T): void {
    console.log(`Length: ${value.length}`);
}
    printLength("Hello, TypeScript!"); // Length: 17
    printLength([1, 2, 3, 4, 5]); // Length: 5
    printLength({ length: 10, name: "Example" }); // Length: 10
    printLength(22);