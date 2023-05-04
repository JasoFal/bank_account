Describe: BankAccount

Test: "It should construct an object with name and initial deposit amount."
Code:
BankAccount(name, initialDeposit);
let bankAccount = new BankAccount(Jason, 1000);
Expected Output: {name: "Jason", balance: 1000}

Test: "BankAccount.prototype.withdrawFunds should subtract withdrawAmount from balance."
Code:
BankAccount.prototype.withdrawFunds(withdrawAmount);
let bankAccount = new BankAccount(Jason, 1000);
bankAccount.withdrawFunds(500);
Expected Output: {name: Jason, balance: 500}

Test: "BankAccount.prototype.depositFunds should add depositAmount to balance."
Code:
BankAccount.prototype.depositFunds(depositAmount);
let bankAccount = new BankAccount(Jason, 1000);
bankAccount.depositFunds(500);
ExpectedOutput: {name: Jason, balance: 1500}
