// const NigamAccount = new BankAccount("Nigam Bisoyi", 200);
function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.Account_no = Date.now();
  this.balance = balance;
}
BankAccount.prototype.deposite = function (amount) {
  this.balance += amount;
};
BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

const NigamAccount = new BankAccount("Nigam Bisoyi", 200);

const RamAccount = new BankAccount("Ram pradhan", 300);

NigamAccount.deposite(500);
RamAccount.withdraw(100);
console.log(NigamAccount, RamAccount);

// console.log(BankAccount.prototype);

///Hoisting working in constructer function
