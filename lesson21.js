function printLength(value) {
    console.log("Length: ".concat(value.length));
}
printLength("Hello, TypeScript!"); // Length: 17
printLength([1, 2, 3, 4, 5]); // Length: 5
printLength({ length: 10, name: "Example" }); // Length: 10
