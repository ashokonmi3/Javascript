"use strict";

/*
===============================================================
JS OOP — INHERITANCE (DETAILED STUDY MATERIAL + MULTIPLE EXAMPLES)
===============================================================

✅ What you will learn in this file:
1) What is inheritance and why we use it
2) Parent class vs Child class
3) "extends" keyword
4) "super()" keyword (parent constructor call)
5) Method inheritance (child uses parent methods)
6) Method overriding (child changes parent method behavior)
7) IMPORTANT: Private fields (#) in Parent class
   - Child CANNOT access parent's #private fields directly
   - Parent should provide methods (getters/actions) to work with private data

---------------------------------------------------------------
KEY DEFINITIONS (for classroom notes)
---------------------------------------------------------------

1) Parent Class (Base Class / Super Class):
   - A general class containing common properties + methods.

2) Child Class (Derived Class / Sub Class):
   - A specialized class that reuses parent features and adds new ones.

3) Inheritance:
   - Mechanism where child "inherits" features from parent using `extends`.

4) super():
   - Used inside child constructor to call parent constructor.
   - Must be called before using `this` in child constructor.

5) Private field (#):
   - True privacy in JS.
   - Only accessible inside the class where it is declared.
   - NOT accessible in child class.

---------------------------------------------------------------
WHEN TO USE INHERITANCE?
---------------------------------------------------------------
✅ Use when there is a TRUE "IS-A" relationship:
   - Dog is an Animal
   - Manager is an Employee

❌ Avoid inheritance when relationship is "HAS-A":
   - Car has an Engine (Use Composition, not inheritance)

===============================================================
*/

console.log("\n================= LECTURE 1: BASIC INHERITANCE =================\n");

/*
---------------------------------------------------------------
EXAMPLE 1: Animal System (Basic Inheritance)
---------------------------------------------------------------
Animal (Parent) -> common features: name, eat()
Dog (Child) -> special feature: bark()
Cat (Child) -> special feature: meow()
---------------------------------------------------------------
*/

class Animal {
  constructor(name) {
    this.name = name; // public property
  }

  eat() {
    return `${this.name} is eating.`;
  }
}

class Dog extends Animal {
  bark() {
    return `${this.name} barks: Woof!`;
  }
}

class Cat extends Animal {
  meow() {
    return `${this.name} meows: Meow!`;
  }
}

const dog = new Dog("Tommy");
console.log(dog.eat());   // inherited from Animal
console.log(dog.bark());  // own method

const cat = new Cat("Kitty");
console.log(cat.eat());   // inherited from Animal
console.log(cat.meow());  // own method


console.log("\n================= LECTURE 2: SUPER() AND CONSTRUCTOR =================\n");

/*
---------------------------------------------------------------
EXAMPLE 2: Person -> Employee
---------------------------------------------------------------
Why super()?
- Parent constructor initializes parent part of object.
- Child constructor adds extra fields.
---------------------------------------------------------------
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  intro() {
    return `Hi, I am ${this.name}, age ${this.age}.`;
  }
}

class Employee extends Person {
  constructor(name, age, role) {
    // super() calls parent constructor
    super(name, age);

    // child-specific property
    this.role = role;
  }

  work() {
    return `${this.name} works as ${this.role}.`;
  }
}

const e1 = new Employee("Vandana", 30, "Trainer");
console.log(e1.intro()); // from Person
console.log(e1.work());  // from Employee

/*
IMPORTANT NOTE:
If you write a child constructor, you MUST call super(...)
before using this.role = ...
Otherwise: ReferenceError
*/


console.log("\n================= LECTURE 3: METHOD OVERRIDING =================\n");

/*
---------------------------------------------------------------
EXAMPLE 3: Overriding parent method
---------------------------------------------------------------
Parent has: info()
Child overrides: info()
Same method name, different behavior.
---------------------------------------------------------------
*/

class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  info() {
    return `${this.brand} runs at ${this.speed} km/h.`;
  }
}

class Car extends Vehicle {
  // Override info()
  info() {
    return `${this.brand} car runs at ${this.speed} km/h with 4 wheels.`;
  }

  honk() {
    return `${this.brand} car honks!`;
  }
}

const v1 = new Vehicle("Generic", 80);
console.log(v1.info());

const c1 = new Car("Toyota", 120);
console.log(c1.info()); // overridden version
console.log(c1.honk());

/*
CLASSROOM NOTE:
Overriding = Child replaces the parent behavior.
*/


console.log("\n================= LECTURE 4: PRIVATE FIELD IN PARENT (IMPORTANT) =================\n");

/*
---------------------------------------------------------------
EXAMPLE 4: BankAccount with private #balance in PARENT class
---------------------------------------------------------------
Goal:
- Parent has a private field #balance
- Child should not access it directly
- Parent provides methods to safely interact with #balance

RULE:
Child CANNOT do: this.#balance (SyntaxError)
because #balance belongs ONLY to BankAccount class body.
---------------------------------------------------------------
*/

class BankAccount {
  #balance; // ✅ private field (true private)

  constructor(owner, initialBalance = 0) {
    this.owner = owner;

    if (typeof initialBalance !== "number" || initialBalance < 0) {
      throw new Error("initialBalance must be a non-negative number");
    }

    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("deposit amount must be positive");
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("withdraw amount must be positive");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
    return this.#balance;
  }

  // ✅ Safe access method (child & outside can use this)
  getBalance() {
    return this.#balance;
  }

  // ✅ Another "controlled" method to allow child logic
  hasMinimumBalance(min) {
    return this.#balance >= min;
  }
}

/*
Child account type: SavingsAccount
- Inherits deposit(), withdraw(), getBalance()
- Adds addInterest()
- BUT still cannot access #balance directly
*/
class SavingsAccount extends BankAccount {
  constructor(owner, initialBalance, interestRate = 0.05) {
    super(owner, initialBalance);
    this.interestRate = interestRate;
  }

  addInterest() {
    // ✅ Use parent's public method to read balance
    const current = this.getBalance();

    // Apply interest by depositing the interest amount
    const interestAmount = current * this.interestRate;
    this.deposit(interestAmount);

    return this.getBalance();
  }

  // ❌ This will NOT work (do not uncomment):
  // breakPrivacy() {
  //   return this.#balance; // SyntaxError: Private field '#balance' must be declared in an enclosing class
  // }
}

const sAcc = new SavingsAccount("Ashok", 1000, 0.10);
console.log("Initial Balance:", sAcc.getBalance());
console.log("After Interest:", sAcc.addInterest());

/*
CLASSROOM NOTE:
- Private field is ONLY for the class that declares it.
- Child must use parent methods to interact with private data.
This is real Encapsulation.
*/


console.log("\n================= LECTURE 5: POLYMORPHISM USING INHERITANCE =================\n");

/*
---------------------------------------------------------------
EXAMPLE 5: Polymorphism with overriding
---------------------------------------------------------------
We keep a list of Payment objects.
Each child class implements process() differently.
Same method name -> different output.
---------------------------------------------------------------
*/

class Payment {
  process(amount) {
    return `Processing generic payment of ₹${amount}`;
  }
}

class UPIPayment extends Payment {
  process(amount) {
    return `✅ UPI payment processed of ₹${amount}`;
  }
}

class CreditCardPayment extends Payment {
  process(amount) {
    return `✅ Credit Card payment processed of ₹${amount}`;
  }
}

const payments = [new UPIPayment(), new CreditCardPayment(), new Payment()];

for (const p of payments) {
  console.log(p.process(500));
}

/*
CLASSROOM NOTE:
Polymorphism = One method call, many behaviors.
*/


console.log("\n================= QUICK REVISION (INTERVIEW NOTES) =================\n");

/*
1) What does `extends` do?
   - It links child prototype to parent prototype -> child gets parent methods.

2) Why do we use super()?
   - To initialize the parent part of the object.
   - Must be called before using `this` in child constructor.

3) Can child access parent's private (#) field?
   - ❌ NO. Private fields are class-scoped, not object-scoped.
   - ✅ Use public/protected-like methods (getBalance, deposit) from parent.

4) Overriding vs Overloading?
   - Overriding: child replaces parent method (same name).
   - Overloading: NOT supported directly in JS (use default/rest parameters).

5) Best practice:
   - Use inheritance only for true "IS-A" relations.
*/


console.log("\n✅ Detailed Inheritance lecture completed.\n");

/*
===============================================================
PRACTICE TASKS (Homework)
===============================================================
1) Create parent class `User` with private field `#password`.
   - Provide method setPassword(), checkPassword()
   - Create child `AdminUser` that adds method resetUserPassword()

2) Create parent class `Order` with method calculateTotal()
   - Create children `OnlineOrder` and `StoreOrder`
   - Override calculateTotal() with different rules (delivery fee, discount)

3) Create parent class `Employee` and child classes `HR`, `Developer`, `QA`
   - Each overrides work() with different output
===============================================================
*/
"use strict";

/*
=====================================================================
JS OOP — INHERITANCE: SINGLE + MULTIPLE CHILDREN + MULTI-LEVEL
=====================================================================

✅ What this file covers (study material + code):
1) Single inheritance (one parent -> one child)
2) One parent -> multiple children
3) Multi-level inheritance (A -> B -> C)
4) Private field (#) in parent and how children must access it
5) IMPORTANT: "Multiple inheritance" (two parents) is NOT supported in JS classes
   - But JS supports "mixins" as an alternative (included as bonus)
=====================================================================

------------------------------------------------------------
DEFINITIONS
------------------------------------------------------------
1) Single Inheritance:
   Parent -> Child
   Example: Animal -> Dog

2) Multiple Children:
   Parent -> Child1, Child2, Child3
   Example: Employee -> Developer, HR, Manager

3) Multi-level Inheritance:
   Parent -> Child -> GrandChild
   Example: Vehicle -> Car -> ElectricCar

4) Multiple Inheritance (NOT supported in JS classes):
   Child cannot extend two classes:
   class C extends A, B  ❌ not possible in JS

BONUS Alternative:
- Mixins (composition-style reuse)
=====================================================================
*/

console.log("\n================= PART 1: SINGLE INHERITANCE =================\n");

/*
------------------------------------------------------------
EXAMPLE 1: Animal -> Dog
------------------------------------------------------------
Dog extends Animal
Dog inherits: name, eat()
Dog adds: bark()
------------------------------------------------------------
*/
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    return `${this.name} is eating.`;
  }
}

class Dog extends Animal {
  bark() {
    return `${this.name} barks: Woof!`;
  }
}

const d1 = new Dog("Tommy");
console.log(d1.eat());  // inherited
console.log(d1.bark()); // own


console.log("\n================= PART 2: ONE PARENT -> MULTIPLE CHILDREN =================\n");

/*
------------------------------------------------------------
EXAMPLE 2: Employee -> Developer, HR, Manager
------------------------------------------------------------
All children reuse: name, join()
Each child adds its own behavior.
------------------------------------------------------------
*/
class Employee {
  constructor(name) {
    this.name = name;
  }

  join() {
    return `${this.name} joined the company.`;
  }
}

class Developer extends Employee {
  code() {
    return `${this.name} writes code.`;
  }
}

class HR extends Employee {
  hire() {
    return `${this.name} conducts hiring.`;
  }
}

class Manager extends Employee {
  manage() {
    return `${this.name} manages the team.`;
  }
}

const dev = new Developer("Vandana");
const hr = new HR("Preeti");
const mgr = new Manager("Ashok");

console.log(dev.join(), "|", dev.code());
console.log(hr.join(), "|", hr.hire());
console.log(mgr.join(), "|", mgr.manage());


console.log("\n================= PART 3: MULTI-LEVEL INHERITANCE (A -> B -> C) =================\n");

/*
------------------------------------------------------------
EXAMPLE 3: Vehicle -> Car -> ElectricCar
------------------------------------------------------------
Vehicle (Parent):
  brand, speed, move()

Car (Child):
  inherits Vehicle + adds wheels, honk()

ElectricCar (GrandChild):
  inherits Car + adds battery, charge()
------------------------------------------------------------
*/
class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  move() {
    return `${this.brand} moves at ${this.speed} km/h.`;
  }
}

class Car extends Vehicle {
  constructor(brand, speed, wheels = 4) {
    super(brand, speed); // initialize parent part
    this.wheels = wheels;
  }

  honk() {
    return `${this.brand} car honks!`;
  }
}

class ElectricCar extends Car {
  constructor(brand, speed, batteryPercent) {
    super(brand, speed); // wheels default 4
    this.batteryPercent = batteryPercent;
  }

  charge() {
    this.batteryPercent = 100;
    return `${this.brand} charged to ${this.batteryPercent}%.`;
  }

  batteryStatus() {
    return `${this.brand} battery is at ${this.batteryPercent}%.`;
  }
}

const v1 = new Vehicle("Generic", 80);
console.log(v1.move());

const c1 = new Car("Toyota", 120);
console.log(c1.move());
console.log(c1.honk());

const ec1 = new ElectricCar("Tesla", 140, 45);
console.log(ec1.move());          // from Vehicle
console.log(ec1.honk());          // from Car
console.log(ec1.batteryStatus()); // from ElectricCar
console.log(ec1.charge());


console.log("\n================= PART 4: MULTI-LEVEL + PRIVATE FIELD IN PARENT =================\n");

/*
------------------------------------------------------------
EXAMPLE 4: Account -> SavingsAccount -> PremiumSavingsAccount
with #balance private field in the top parent

RULE:
- #balance is declared in Account
- SavingsAccount and PremiumSavingsAccount CANNOT access this.#balance directly
- They must use parent methods like getBalance(), deposit(), withdraw()
------------------------------------------------------------
*/
class Account {
  #balance;

  constructor(owner, initialBalance = 0) {
    this.owner = owner;

    if (typeof initialBalance !== "number" || initialBalance < 0) {
      throw new Error("initialBalance must be >= 0");
    }
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("deposit must be positive");
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("withdraw must be positive");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

class SavingsAccount extends Account {
  constructor(owner, initialBalance, interestRate = 0.05) {
    super(owner, initialBalance);
    this.interestRate = interestRate;
  }

  addInterest() {
    // cannot access #balance directly; use getBalance()
    const interest = this.getBalance() * this.interestRate;
    this.deposit(interest);
    return this.getBalance();
  }
}

class PremiumSavingsAccount extends SavingsAccount {
  constructor(owner, initialBalance, interestRate, cashbackRate = 0.01) {
    super(owner, initialBalance, interestRate);
    this.cashbackRate = cashbackRate;
  }

  // premium feature: cashback on deposits
  depositWithCashback(amount) {
    this.deposit(amount);
    const cashback = amount * this.cashbackRate;
    this.deposit(cashback);
    return {
      amountDeposited: amount,
      cashbackAdded: cashback,
      finalBalance: this.getBalance(),
    };
  }
}

const sAcc = new SavingsAccount("Vandana", 1000, 0.1);
console.log("Savings Initial:", sAcc.getBalance());
console.log("After Interest:", sAcc.addInterest());

const pAcc = new PremiumSavingsAccount("Ashok", 2000, 0.08, 0.02);
console.log("Premium Initial:", pAcc.getBalance());
console.log("Deposit with cashback:", pAcc.depositWithCashback(500));
console.log("Premium Final:", pAcc.getBalance());

// ❌ Do not uncomment: child cannot access #balance
// console.log(pAcc.#balance);


console.log("\n================= PART 5: MULTIPLE INHERITANCE (JS LIMITATION) =================\n");

/*
------------------------------------------------------------
IMPORTANT:
JavaScript class syntax does NOT support multiple inheritance.
You cannot extend two classes.
------------------------------------------------------------

❌ NOT POSSIBLE:

class A {}
class B {}
class C extends A, B {}   // SyntaxError

So what do we do?
✅ Use MIXINS (code reuse) as an alternative.
*/


console.log("\n================= BONUS: MIXIN (ALTERNATIVE TO MULTIPLE INHERITANCE) =================\n");

/*
------------------------------------------------------------
Mixin Idea:
- A mixin is a function that adds methods to a class.
- This gives "multiple behavior reuse" without extending multiple classes.

Below:
- LoggerMixin adds log() method
- TimestampMixin adds getTimestamp() method
- We apply both to a single class
------------------------------------------------------------
*/

const LoggerMixin = (Base) =>
  class extends Base {
    log(message) {
      console.log(`[LOG] ${message}`);
    }
  };

const TimestampMixin = (Base) =>
  class extends Base {
    getTimestamp() {
      return new Date().toISOString();
    }
  };

class ServiceBase {
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
}

// Apply mixins (multiple behaviors)
class ApiService extends TimestampMixin(LoggerMixin(ServiceBase)) {
  call(endpoint) {
    this.log(`Calling ${endpoint} at ${this.getTimestamp()} from ${this.serviceName}`);
    return `Response from ${endpoint}`;
  }
}

const api = new ApiService("UserService");
console.log(api.call("/users"));

/*
CLASSROOM NOTE:
Mixins are a practical alternative to multiple inheritance in JS.
*/


console.log("\n================= QUICK REVISION =================\n");

/*
1) Single inheritance:
   class Child extends Parent

2) Multi-level inheritance:
   A -> B -> C

3) Multiple inheritance:
   ❌ Not supported by JS class syntax
   ✅ Use mixins/composition

4) Private field in parent:
   Child cannot access #private directly
   Must use parent methods (getBalance, deposit, etc.)
*/

console.log("\n✅ Inheritance (single + multi-level) + mixin alternative completed.\n");
