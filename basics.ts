
function sum(n1:number,n2:number, print:boolean, resultPhrase:string)
{
    // if(typeof n1 !== "number" || typeof n2 !=="number")
    // {
    //     throw new Error('Incorrect Input')
    // }
    const result = n1+n2;
    if(print)
    {
        console.log(resultPhrase+result);
    }
    else{
        return n1+n2;  
    }
}

const num1 = 9;
const num2= 2.3;
let printResult = true;
const resultPhrase = "The Result is : ";
const result = sum(num1,num2,printResult,resultPhrase)

console.log(result);
