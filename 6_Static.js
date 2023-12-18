// static proporties and method are always stored in class .We can't access the static proporties and method through instance object.
class User {
  static id = 1;
  static {
    ///statis scope
    console.log("Static Initialized");
  }
  constructor(name, age) {
    this.Name = name;
    this.age = age;
    this.id = User.id++;
  }
  test() {
    User.caller();
    console.log("Normal Test");
  }

  static check() {
    console.log("static check called");
  }
  static caller() {
    this.check();
    console.log("static caller");
  }

  static CompareByAge(user1, user2) {
    return user1.age - user2.age;
  }
}
User.check();
User.caller();
const user1 = new User("Nigam Bisoyi", 25);
user1.test();
// const user2 = new User("ram", 21);
// const user3 = new User("Deepak", 24);
// const Users = [user1, user2, user3];

// Users.sort(User.CompareByAge);
// console.log(Users);

/// Note :- Whene User want to call a statis method out side of the class then User sholud call like this--> Class_name.method_name  (Ex- User.check();)

///Note2:- Whene the User want to call a statis method inside a statis method inside the class then user should call like this---> this(keyword).Method_Name (Ex-  this.check();)
