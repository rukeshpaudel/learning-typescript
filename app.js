"use strict";
// const person:{
//     name: string;
//     age: number;
// } 
const person = {
    name: "Rukesh",
    age: 19,
    hobbies: ['Coding', 'drawing'],
    role: [1, 'Cloud Admin']
};
person.role.push('Rukesh');
// person.role[1]=21;
let favoriteTask;
favoriteTask = ['Football', 'Futsal'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);
    console.log(person.role);
}
