const birth_year = 1975;
let current_year = new Date().getFullYear();

let age = current_year - birth_year;

console.log(`Patient’s age: ${age}`);