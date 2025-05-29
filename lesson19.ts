function wrapInArray<T>(value: T): T[] {
    //returns an array containing the value
    return [value];
  
}

console.log(wrapInArray("okode")); // [ 'okode' ]
console.log(wrapInArray(100)); // [ 100 ]