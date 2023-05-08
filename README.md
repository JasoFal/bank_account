# _Bank Account_

#### By _**Jason Falk**_

#### _Create an account, deposit and withdraw money at the Bank of Me._

## Technologies Used

* _Javascript_
* _BootStrap_
* _HTML_
* _Git/ Git Bash_

## Description

_A fidgetech project created in order to demonstrate knowledge of Javascript object constructors and methods._

## Setup/Installation Requirements

* _In Git Bash type git clone https://github.com/JasoFal/bank_account.git_
* _Either use Git Bash to reach the top level of the directory or open file explorer and find the directory._
* _Open index.html in the browser of your choice using one of the following methods._
------
* _Use command start index.html if in Git Bash._
* _In file explorer click on index.html._
------
* Alternatively visit this *[link](https://jasofal.github.io/bank_account/)* to view the website on gh-pages.

## Known Bugs

* _No known bugs._

## License

_MIT_

Copyright (c) _5/8/23_ _Jason Falk_

-----------------------------

<!-- Tests -->

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
