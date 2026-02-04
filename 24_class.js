/**
 * ============================================================
 * JAVASCRIPT CLASSES 
 * ============================================================
 * 1) Normal class (empty)
 * 2) Constructor (initialize data)
 * 3) Instance properties (public)
 * 4) Instance methods (functions inside class)
 * 5) Getter/Setter (controlled access)
 * 6) Private fields (#) (real privacy)
 * 7) Static property (class-level variable)
 * 8) Static method (class-level function)
 * 9) Multiple mini examples + practice tasks
 * ============================================================
 */

"use strict";

/* ============================================================
   STEP 1) NORMAL CLASS (EMPTY)
   ------------------------------------------------------------
   A class is a blueprint. By itself it does nothing until we create objects.
============================================================ */

// class DemoClass {}
// const d1 = new DemoClass();
// console.log("Created object from DemoClass:", d1);


// ----------------

// class Person {
//   name = "Unknown";   // property without constructor
//   age = 0;
// }

// const p1 = new Person();
// console.log(p1.name);  // Unknown
// console.log(p1.age);   // 0
// --------------------------
// class Person {
//   name = "Unknown";
//   age = 0;

//   // Method not using object properties
//   greetSomeone(personName) {
//     return `Hello ${personName}, welcome!`;
//   }
// }

// const p1 = new Person();
// console.log(p1.greetSomeone("Vandana"));

/* ============================================================
   STEP 2) CONSTRUCTOR
   ------------------------------------------------------------
   constructor() runs automatically when you create an object with `new`.
   It is used to setup initial values (initialize the object).
============================================================ */
// class Person {
//   constructor(name, age) {
//     // Public instance properties (created on every object)
//     name = name;
//     age = age;
//     console.log("Person object is created");

//   }
// }

// const p1 = new Person("Vandana", 30);
// console.log("Person object:", p1);
// console.log("Name:", p1.name, "| Age:", p1.age);

// ===============================


// class Person {
//   constructor(name, age) {
//     // Public instance properties (created on every object)
//     this.name = name;
//     this.age = age;
//   }
// }

// const p1 = new Person("Vandana", 30);
// console.log("Person object:", p1);
// console.log("Name:", p1.name, "| Age:", p1.age);

/* IMPORTANT NOTE:
   `this` refers to the new object being created.
*/

/* ============================================================
   STEP 3) INSTANCE METHODS (FUNCTIONS INSIDE CLASS)
   ------------------------------------------------------------
   Methods are functions written inside class body.
   You call them using the object.
============================================================ */

// class Employee {
//   constructor(name, role) {
//     this.name = name;
//     this.role = role;
//   }

//   // Instance method
//   introduce() {
//     return `Hi, I am ${this.name} and I work as ${this.role}.`;
//   }

//   // Instance method with parameter
//   updateRole(newRole) {
//     this.role = newRole;
//     return this.role;
//   }
// }

// const e1 = new Employee("Preeti", "HRBP");
// console.log(e1.introduce());
// console.log("Updated role:", e1.updateRole("Senior HRBP"));
// console.log(e1.introduce());

/* ============================================================
   STEP 4) VALIDATION INSIDE CONSTRUCTOR / METHODS
   ------------------------------------------------------------
   Real projects require validation. This makes your code robust.
============================================================ */

// class User {
//   constructor(username, email) {
//     if (typeof username !== "string" || username.trim() === "") {
//       throw new Error("username must be a non-empty string");
//     }
//     if (typeof email !== "string" || !email.includes("@")) {
//       throw new Error("email must contain @");
//     }

//     this.username = username.trim();
//     this.email = email.trim();
//   }

//   changeEmail(newEmail) {
//     if (typeof newEmail !== "string" || !newEmail.includes("@")) {
//       throw new Error("newEmail must contain @");
//     }
//     this.email = newEmail.trim();
//   }
// }

// const u1 = new User("vandana", "vandana@test.com");
// console.log("User:", u1);
// u1.changeEmail("new@mail.com");
// console.log("Updated email:", u1.email);

/* ============================================================
   GETTERS & SETTERS
   ------------------------------------------------------------
   Used when you want controlled access or computed values.
   Getter looks like a property but runs like a function.
============================================================ */

"use strict";

/*
========================================================
GETTER & SETTER — DEFINITIONS
========================================================

SETTER:
A setter is a special method that runs automatically 
when a value is ASSIGNED to a property.
It is mainly used for:
✔ Validation
✔ Controlling how data is stored
✔ Protecting object data

GETTER:
A getter is a special method that runs automatically 
when a property value is READ.
It is mainly used for:
✔ Returning stored value
✔ Computing values dynamically
✔ Controlling what data is exposed

They LOOK like properties but WORK like functions.
========================================================
*/

// class User {
//   constructor() {
//     console.log("constructor is called here "); // GETTER runs

//     this.age = 0;  // Internal storage variable (not accessed directly outside)
//           console.log("constructor completed");

//   }

//  set age(value) {
    
//     console.log("setter is called here "); // GETTER runs

//     if (value < 0) {
//       console.log("Age cannot be negative");
//       return;
//     }

//     // Store value in internal variable
//     this._age = value;
//   }

//   get age() {
//     console.log("getter is called here "); // GETTER runs

    
//     return this._age;
//   }
// }
// const u1 = new User();

// u1.age = 25;         // SETTER runs
// console.log(u1.age); // GETTER runs

//   /*
//   ================= SETTER =================
//   Definition:
//   This method runs whenever we ASSIGN a value
//   Example:
      // u1.age = 25;   → this setter runs

//   Purpose:
//   To validate or control the value before storing it.
//   */
  // set age(value) {
    
  //   console.log("setter is called here "); // GETTER runs

  //   if (value < 0) {
  //     console.log("Age cannot be negative");
  //     return;
  //   }

  //   // Store value in internal variable
  //   this._age = value;
  // }

//   /*
//   ================= GETTER =================
//   Definition:
//   This method runs whenever we READ a property
//   Example:
//       console.log(u1.age);  → this getter runs

//   Purpose:
//   To safely return the stored value.
//   */
//   get age() {
//     console.log("getter is called here "); // GETTER runs

    
//     return this._age;
//   }
// }

// /* ================= USAGE ================= */

// const u1 = new User();

// u1.age = 25;         // SETTER runs
// console.log(u1.age); // GETTER runs

// ==========================


class Rectangle {
  constructor(width, height) {
    this.width = width;   // uses setter
    this.height = height; // uses setter
  }

  // setter for width (validation)
  set width(w) {
    if (typeof w !== "number" || w <= 0) throw new Error("width must be positive number");
    this._width = w;
  }

  // getter for width
  get width() {
    return this._width;
  }

  set height(h) {
    if (typeof h !== "number" || h <= 0) throw new Error("height must be positive number");
    this._height = h;
  }

  get height() {
    return this._height;
  }

  // computed getter
  get area() {
    return this._width * this._height;
  }
}

const r1 = new Rectangle(5, 3);
console.log("Width:", r1.width, "Height:", r1.height, "Area:", r1.area);

/* NOTE:
   r1.area is not stored; it is computed each time you access it.
*/

/* ============================================================
   STEP 6) PRIVATE FIELDS (#) — PRIVATE vs PUBLIC
   ------------------------------------------------------------
   Public: this.name -> accessible outside
   Private: #balance -> accessible ONLY inside the class
============================================================ */


// class BankAccount {
//   #balance; // private field

//   constructor(owner, initialBalance = 0) {
//     this.owner = owner;        // public
//     this.#balance = initialBalance; // private
//   }

//   deposit(amount) {
//     if (typeof amount !== "number" || amount <= 0) throw new Error("amount must be positive");
//     this.#balance += amount;
//     return this.#balance;
//   }

//   withdraw(amount) {
//     if (typeof amount !== "number" || amount <= 0) throw new Error("amount must be positive");
//     if (amount > this.#balance) throw new Error("Insufficient funds");
//     this.#balance -= amount;
//     return this.#balance;
//   }

//   getBalance() {
//     // we expose balance safely through a method
//     return this.#balance;
//   }
// }

// const b1 = new BankAccount("Ashok", 1000);
// b1.deposit(500);
// console.log("Owner:", b1.owner);
// console.log("Balance via method:", b1.getBalance());

// b1.#balance; // ❌ SyntaxError if you uncomment (true private)

/* IMPORTANT NOTE:
   Private fields are REAL privacy in JS (not just convention).
*/

/* ============================================================
   STEP 7) STATIC PROPERTY (Static Variable)
   ------------------------------------------------------------
   Static properties belong to the class itself, NOT to objects.
   Used for shared data (same for all objects).
============================================================ */


// class TrainingBatch {
//   static instituteName = "VandanaCoach Academy"; // class-level shared value

//   constructor(batchName) {
//     this.batchName = batchName; // object-level value
//   }

//   showBatch() {
//     return `${this.batchName} at ${TrainingBatch.instituteName}`;
//   }
// }

// const batch1 = new TrainingBatch("JavaScript Freshers - Batch A");
// const batch2 = new TrainingBatch("JavaScript Freshers - Batch B");

// console.log(batch1.showBatch());
// console.log(batch2.showBatch());

// // Access static like this:
// console.log("Institute:", TrainingBatch.instituteName);

// batch1.instituteName // ❌ undefined (static is not on object)

/* ============================================================
   STEP 8) STATIC METHOD
   ------------------------------------------------------------
   Static method = function attached to class.
   Used for utility logic that does NOT need object data.
============================================================ */


// class StringUtil {
//   static toTitleCase(str) {
//     if (typeof str !== "string") throw new Error("str must be string");
//     return str
//       .trim()
//       .split(/\s+/)
//       .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
//       .join(" ");
//   }

//   static isEmail(str) {
//     // simple email check for demo (not perfect)
//     return typeof str === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
//   }
// }

// console.log(StringUtil.toTitleCase("  hello javascript class  "));
// console.log("Is email?", StringUtil.isEmail("test@mail.com"));
// console.log("Is email?", StringUtil.isEmail("wrongmail.com"));

/* NOTE:
   StringUtil.toTitleCase(...) is called using class name.
   We do NOT need to create object like new StringUtil().
*/

/* ============================================================
   STEP 9) REAL-WORLD MINI EXAMPLE (No inheritance)
   ------------------------------------------------------------
   Product + Cart using:
   - constructor
   - methods
   - getter
   - private field
   - static tax rate
============================================================ */

// class Product {
//   static taxRate = 0.18; // shared across all products

//   #price;

//   constructor(id, name, price) {
//     this.id = id;
//     this.name = name;
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   get priceWithTax() {
//     return this.#price + (this.#price * Product.taxRate);
//   }

//   static changeTaxRate(newRate) {
//     if (typeof newRate !== "number" || newRate < 0) throw new Error("rate must be >= 0");
//     Product.taxRate = newRate;
//   }
// }

// class Cart {
//   constructor() {
//     this.items = [];
//   }

//   add(product, qty = 1) {
//     this.items.push({ product, qty });
//   }

//   get subtotal() {
//     return this.items.reduce((sum, item) => sum + item.product.price * item.qty, 0);
//   }

//   get totalWithTax() {
//     return this.items.reduce((sum, item) => sum + item.product.priceWithTax * item.qty, 0);
//   }
// }

// const pr1 = new Product(1, "Keyboard", 1500);
// const pr2 = new Product(2, "Mouse", 700);

// const cart = new Cart();
// cart.add(pr1, 2);
// cart.add(pr2, 1);

// console.log("Subtotal:", cart.subtotal);
// console.log("Total with tax:", cart.totalWithTax);

// Product.changeTaxRate(0.20);
// console.log("Total with NEW tax:", cart.totalWithTax);

/* ============================================================
   PRACTICE TASKS (for students)
   ------------------------------------------------------------
   1) Add remove(productId) method in Cart
   2) Add discount% in Product using private field
   3) Add validate qty must be positive integer
   4) Create static method Product.isValidPrice(x)
============================================================ */

"use strict";

/*
========================================================
OOP TOPIC 1: ENCAPSULATION (JavaScript)
========================================================
DEFINITION:
Encapsulation means:
✅ Keeping data (properties) + behavior (methods) together in one unit (class)
✅ Controlling how data is accessed/modified
✅ Protecting object state from invalid updates

In JS, encapsulation is commonly done using:
1) Public properties + methods
2) Getters/Setters (controlled access)
3) Private fields (#) (true privacy)
========================================================
*/


/* -------------------------------------------
   Example 1: Basic Encapsulation (public)
------------------------------------------- */
// class BankAccountBasic {
//   constructor(owner, balance) {
//     this.owner = owner;
//     this.balance = balance; // public (can be modified directly — risky)
//   }

//   deposit(amount) {
//     if (amount <= 0) return;
//     this.balance += amount;
//   }

//   withdraw(amount) {
//     if (amount <= 0) return;
//     if (amount > this.balance) {
//       console.log("Insufficient funds");
//       return;
//     }
//     this.balance -= amount;
//   }
// }

// const a1 = new BankAccountBasic("Vandana", 1000);
// a1.deposit(500);
// console.log("Balance (basic):", a1.balance);

// // Risk: user can directly change balance (bad)
// a1.balance = -999; // invalid but allowed
// console.log("Balance after direct wrong change:", a1.balance);

// /* -------------------------------------------
//    Example 2: Better Encapsulation using Getter/Setter
//    (No private fields yet, but controlled access)
// ------------------------------------------- */
// class BankAccountWithSetter {
//   constructor(owner, balance) {
//     this.owner = owner;
//     this.balance = balance; // this calls setter below
//   }

//   set balance(value) {
//     // setter: runs on assignment
//     if (typeof value !== "number" || value < 0) {
//       console.log("Invalid balance, keeping old value");
//       return;
//     }
//     this.balanceValue = value; // store in different property name to avoid recursion
//   }

//   get balance() {
//     // getter: runs on read
//     return this.balanceValue;
//   }

//   deposit(amount) {
//     if (amount <= 0) return;
//     this.balance = this.balance + amount; // uses getter + setter
//   }
// }

// const a2 = new BankAccountWithSetter("Ashok", 1000);
// a2.deposit(200);
// console.log("Balance (setter):", a2.balance);
// a2.balance = -500; // blocked by setter
// console.log("Balance after invalid set:", a2.balance);

/* -------------------------------------------
   Example 3: Strong Encapsulation using Private Field (#)
------------------------------------------- */
// class BankAccountPrivate {
//   #balance; // true private

//   constructor(owner, balance) {
//     this.owner = owner;
//     if (typeof balance !== "number" || balance < 0) {
//       throw new Error("Initial balance must be >= 0");
//     }
//     this.#balance = balance;
//   }

//   deposit(amount) {
//     if (typeof amount !== "number" || amount <= 0) return;
//     this.#balance += amount;
//   }

//   withdraw(amount) {
//     if (typeof amount !== "number" || amount <= 0) return;
//     if (amount > this.#balance) {
//       console.log("Insufficient funds");
//       return;
//     }
//     this.#balance -= amount;
//   }

//   getBalance() {
//     // controlled exposure
//     return this.#balance;
//   }
// }

// const a3 = new BankAccountPrivate("Preeti", 1000);
// a3.deposit(300);
// a3.withdraw(200);
// console.log("Balance (private):", a3.getBalance());

// a3.#balance  ❌ not accessible (true encapsulation)


/*
========================================================
 ABSTRACTION (JavaScript)
========================================================
DEFINITION:
Abstraction means:
✅ Showing only necessary features to the user
✅ Hiding internal complexity / steps

In simple terms:
User calls ONE method, and the class handles many internal steps.

Real life:
- ATM: You click "Withdraw" (one action) but many internal validations happen.
========================================================
*/

/* -------------------------------------------------
   Example 1: Simple abstraction - Coffee Machine
   User sees: makeCoffee()
   Internally: heatWater, grindBeans, brew, pour
------------------------------------------------- */

// class CoffeeMachine {
//   makeCoffee() {
//     // Public method (user uses this)
//     this.heatWater();
//     this.grindBeans();
//     this.brew();
//     this.pour();
//     return "☕ Coffee is ready!";
//   }

//   // "Internal methods" (not truly private here, but conceptually internal)
//   heatWater() {
//     console.log("Heating water...");
//   }

//   grindBeans() {
//     console.log("Grinding beans...");
//   }

//   brew() {
//     console.log("Brewing coffee...");
//   }

//   pour() {
//     console.log("Pouring into cup...");
//   }
// }

// const cm = new CoffeeMachine();
// console.log(cm.makeCoffee());

/* -------------------------------------------------
   Example 2: Better abstraction with private fields/method-like design
   (JS doesn't have private methods in the same way across all runtimes,
   but private fields (#) + internal helper methods is common.)
------------------------------------------------- */

// class PaymentProcessor {
//   #merchantId = "MRC-2026";

//   pay(amount) {
//     // Public method — user calls only this
//     if (!this.#validateAmount(amount)) return "❌ Invalid amount";
//     const token = this.#createToken(amount);
//     const result = this.#charge(token);
//     return result;
//   }

//   #validateAmount(amount) {
//     return typeof amount === "number" && amount > 0;
//   }

//   #createToken(amount) {
//     return `TOKEN-${this.#merchantId}-${amount}-${Date.now()}`;
//   }

//   #charge(token) {
//     // simulate charge success
//     return `✅ Payment success with ${token}`;
//   }
// }

// const pay = new PaymentProcessor();
// console.log(pay.pay(500));
// console.log(pay.pay(-10)); // invalid

