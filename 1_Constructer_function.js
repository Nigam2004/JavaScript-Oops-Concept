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
// const NigamAccount = new BankAccount("Nigam", 400);
// console.log(NigamAccount);
//NigamAccount.balance = 500;  (Demaride)
// NigamAccount.deposite(5000);
// console.log(NigamAccount.balance); //400
//---------------------------
const BankAccounts = [];
const BankForm = document.querySelector("#BankForm");
const customerName = document.querySelector("#name");
const balance = document.querySelector("#balance");

const deposite = document.querySelector("#deposite");
const Accountno = document.querySelector("#account");
const amount = document.querySelector("#amount");

BankForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const acount = new BankAccount(customerName.value, +balance.value);
  BankAccounts.push(acount);
  console.log(BankAccounts);
});
deposite.addEventListener("submit", (e) => {
  e.preventDefault();
  let acc = BankAccounts.find(
    (account) => account.Account_no === +Accountno.value
  );
  acc.deposite(+amount.value);
  console.log(BankAccounts);
});
