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

const NigamAccount = new BankAccount("Nigam Bisoyi", 500);
const RamAccount = new BankAccount("Ram Pradhan");
RamAccount.diposite(5900);
NigamAccount.withdraw(200);
console.log(RamAccount, NigamAccount);

//Hoisting Not working In class
