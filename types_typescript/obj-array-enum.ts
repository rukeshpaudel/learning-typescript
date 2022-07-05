// const person:{
//     name: string;
//     age: number;
// } 
// ={
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number,string]
// }
enum role {ADMIN ="ADMIN", BASIC=100, AUTHOR }

const person={
    name: "Rukesh",
    age: 19,
    hobbies:['Coding','drawing'],
    role: role.ADMIN
}

// person.role.push('Rukesh')
// person.role[1]=21;

let favoriteTask : string[];
favoriteTask=['Football','Futsal']
console.log(person.name);

for(const hobby of person.hobbies )
{
    console.log(hobby);
    console.log(person.role);
}

if(person.role=== role.ADMIN)
{
    console.log('IS ADMIN');
    
}