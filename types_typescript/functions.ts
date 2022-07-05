function add(num1:number, num2:number)
{
    return num1+num2;
}

function print(num: number)
{
    console.log(`Result is: ${num}` );
    
}

function addAndHandle(n1:number, n2:number, cb:(num:number)=>void)
{
    const result = n1+n2;
    cb(result)
}

print(add(5,6))


let combineValues:(a:number,b:number)=>number

combineValues = add;
// combineValues = print();


console.log(combineValues(8,8)); 

addAndHandle(20,40,(result)=>{
    console.log(result);
    
})

