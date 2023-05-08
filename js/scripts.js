// Business Logic for AccountBook
function AccountBook() {
  this.account = null;
  this.accounts = {};
  this.accountId = 0;
}

AccountBook.prototype.addAccount = function(account) {
  // Functionality for multiple accounts
  // account.id = this.assignId();
  if (this.account === null) {
    this.account = account;
  }
  this.accounts[account.id] = account;
};

AccountBook.prototype.assignId = function() {
  this.accountId += 1;
  return this.accountId;
};

AccountBook.prototype.findAccount = function(id) {
  if (this.accounts[id] !== undefined) {
    return this.accounts[id];
  }
  return false;
};

// Business Logic

function BankAccount(name, initialDeposit) {
  this.name = name;
  this.balance = initialDeposit;
}

BankAccount.prototype.withdrawAccountFunds = function(withdrawAmount) {
  return this.balance = this.balance - withdrawAmount;
};

BankAccount.prototype.depositAccountFunds = function(depositAmount) {
  return this.balance = this.balance + depositAmount;
};
// UI Logic
let accountBook = new AccountBook();

function handleFormSubmission(event) {
  event.preventDefault();
  const registerAccountName = document.querySelector("input#new-account-name").value;
  const inputInitialDeposit = parseInt(document.querySelector("input#initial-deposit").value);
  console.log(inputInitialDeposit);
  const newBankAccount = new BankAccount(registerAccountName, inputInitialDeposit);
  accountBook.addAccount(newBankAccount);
  document.querySelector("p#balance").innerText = newBankAccount.balance;
}

function depositFunds(event) {
  event.preventDefault();
  const accountDeposit = parseInt(document.querySelector("input#deposit-funds").value);
  accountBook.account.depositAccountFunds(accountDeposit);
  document.querySelector("p#balance").innerText = accountBook.account.balance;
}

function withdrawFunds(event) {
  event.preventDefault();
  const accountWithdraw = parseInt(document.querySelector("input#withdraw-funds").value);
  if (accountWithdraw > 0) {
    window.alert("Insufficient Funds");
  }
  accountBook.account.withdrawAccountFunds(accountWithdraw);
  document.querySelector("p#balance").innerText = accountBook.account.balance;
}

window.addEventListener("load", function() {
  this.document.querySelector("form#register-account").addEventListener("submit", handleFormSubmission);
  this.document.querySelector("form#balance-deposit").addEventListener("submit", depositFunds);
  this.document.querySelector("form#balance-withdraw").addEventListener("submit", withdrawFunds);
});

