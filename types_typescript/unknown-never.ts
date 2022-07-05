
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Rukesh";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number):never{
    throw{
        message:message, errorCode: code
    }

}

const resullt = generateError("An Error Occured!", 500)
