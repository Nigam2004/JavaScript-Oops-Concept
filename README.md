[JAVSCRIPT-OOPS-CONCEPT]

[Constructer Function]:-A constructor is a special function that is used to create and initialize an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties.

```
function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.Account_no = Date.now();
  this.balance = balance;
  this.deposite = (amount) => {
    this.balance += amount;
  };
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}
const NigamAccount = new BankAccount("Nigam", 400);
console.log(NigamAccount);
//
BankAccount {
  customerName: 'Nigam',
  Account_no: 1702895741822,
  balance: 400,
  deposite: [Function (anonymous)],
  withdraw: [Function (anonymous)]
}
//
```
