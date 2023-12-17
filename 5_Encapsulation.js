class BankAccount {
  customerName;
  Account_no;
  #balance; //encpsulation (Private Proposties)
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.Account_no = Date.now();
    this.#balance = balance;
  }

  diposite(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }
  set balance(amount) {
    if (isNaN(amount)) {
      throw new Error("Amount is not a valid input");
    }
    this.#balance = amount;
  }

  get balance() {
    return this.#balance;
  }
}

class currentAccount extends BankAccount {
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }
  //-->Private Function
  #calculation(amount) {
    console.log("Calculating Interest");
  }
  takeBussinessLoan(amount) {
    this.#calculation();
    console.log("I am taking Loan:" + amount);
  }
}

const NigamAccount = new currentAccount("Nigam Bisoyi", 5000);
// NigamAccount.calculation();
NigamAccount.takeBussinessLoan(7009);
NigamAccount.balance = 400;
console.log(NigamAccount.balance);
console.log(NigamAccount);
