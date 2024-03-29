#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
console.log("Welcom to ATM Machine");
let pinAnswer = await inquirer.prompt([{
        name: "q1",
        type: "number",
        message: "enter your pin",
    }
]);
if (pinAnswer.q1 === myPin) {
    console.log("Pin is Correct,login Successfully ");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check Balance"]
        }]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount ",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw Successfully`);
            console.log(`your balance is:${myBalance}`);
        }
    }
    else if (operationAns.operation === "check Balance") {
        console.log(`your Account Balance is: ${myBalance}`);
    }
}
else {
    console.log("Pin is Incorrect,Please Try Again!");
}
