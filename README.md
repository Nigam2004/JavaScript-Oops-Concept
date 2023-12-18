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

[Prototype] :-JavScript is a prototype and Object based language.In JavaScript, objects can inherit features from one another via prototypes. Every object has its own property called a prototype.
Note:-->Hoisting is working with constructer Function

```
--> How to inilize a Prototype in constructer?

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


-->How prototype initiate in classess ?
class BankAccount {
  customerName;
  Account_no;
  balance;
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.Account_no = Date.now();
    this.balance = balance;
  }

  diposite(amount) {        //Prototype
    this.balance += amount;
  }

  withdraw(amount) {         //prototype
    this.balance -= amount;
  }
}


```
