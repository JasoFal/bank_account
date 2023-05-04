// Business Logic
function BankAccount(name, initialDeposit) {
  this.name = name;
  this.balance = initialDeposit;
}

BankAccount.prototype.withdrawFunds = function(withdrawAmount) {
  return this.balance = this.balance - withdrawAmount;
};
// UI Logic