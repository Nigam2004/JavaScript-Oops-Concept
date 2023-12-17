///<---------------Inheritance with Classes-------------->

class BankAccount {
  customerName;
  Account_no;
  balance;
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.Account_no = Date.now();
    this.balance = balance;
  }

  diposite(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

class SavingAccount extends BankAccount {
  //   transactionlimit = 3000;
  constructor(customerName, balance = 0) {
    super(customerName, balance); //--Inherited from parent class
    this.transactionlimit = 3000;
  }
  TakePersionalLoan(amount) {
    console.log("I am taking TakePersionalLoan:" + amount);
  }
}
const NigamAccount = new SavingAccount("Nigam Bisoyi", 200);
NigamAccount.diposite(800);
NigamAccount.withdraw(200);
NigamAccount.TakePersionalLoan(5000);
console.log(NigamAccount);

/// <--------------Inheritance with Contructer function---------------->

// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.Account_no = Date.now();
//   this.balance = balance;
// }
// BankAccount.prototype.deposite = function (amount) {
//   this.balance += amount;
// };
// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

// function SavingAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance); // Constructer linking with parent Constructer(Inherit from BankAccount)
//   this.transactionlimit = 20000;
// }
// SavingAccount.prototype = Object.create(BankAccount.prototype); //--Inherit the prototypes from Parent Construcetr (BankAccount)

// SavingAccount.prototype.persionalLoan = function (amount) {
//   console.log("I am Taking Loan Of:" + amount);
// };

// const NigamAccount = new SavingAccount("Nigam Bisoyi", 200);
// NigamAccount.deposite(800);
// NigamAccount.withdraw(200);
// NigamAccount.persionalLoan(5000);
// console.log(NigamAccount);
