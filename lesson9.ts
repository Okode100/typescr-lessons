interface Books {
    title: string;
    author: string;
    yearOfPublication?: number;
}
const book1: Books = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald"
}
const book2: Books = {
    title: "1984 ",
    author: "George Orwel",
    yearOfPublication: 1949
}

 console.log(` ${book1.title} by ${book1.author} `);
 console.log(` ${book2.title} by ${book2.author} in ${book2.yearOfPublication}`);