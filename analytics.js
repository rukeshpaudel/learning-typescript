"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Rukesh";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw {
        message: message, errorCode: code
    };
}
const resullt = generateError("An Error Occured!", 500);
