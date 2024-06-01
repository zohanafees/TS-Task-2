//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Zoha Nafees";
//upper case
console.log("uppercase:", personName.toUpperCase());
//lower case
console.log("lowercase:", personName.toLowerCase());
//title case
console.log("title case:", personName.replace(/\b\w/g, c => c.toUpperCase()));
export {};
