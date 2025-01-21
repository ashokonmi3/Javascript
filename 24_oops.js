// // Defining a class
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     // Method
//     namaste() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// // Creating an object
// const person1 = new Person('Alice', 25);
// person1.namaste(); // Output: Hello, my name is Alice and I am 25 years old.
// ======================
// class Calculator {
//     constructor() {
//         this.result = 0;
//     }

//     add(number) {
//         this.result += number;
//     }

//     subtract(number) {
//         this.result -= number;
//     }

//     multiply(number) {
//         this.result *= number;
//     }

//     divide(number) {
//         if (number !== 0) {
//             this.result /= number;
//         } else {
//             console.log('Cannot divide by zero');
//         }
//     }

//     getResult() {
//         return this.result;
//     }
// }

// const calc = new Calculator();
// calc.add(10);
// calc.subtract(2);
// calc.multiply(3);
// calc.divide(4);
// console.log(calc.getResult()); // Output: 6
// ==================
// Example with Private Properties(Using _ Naming Convention)

// class Employee {
//     constructor(name, salary) {
//         this.name = name;
//         this._salary = salary; // Private property by convention
//     }

//     getSalary() {
//         return this._salary;
//     }

//     setSalary(newSalary) {
//         if (newSalary > 0) {
//             this._salary = newSalary;
//         } else {
//             console.log('Invalid salary amount');
//         }
//     }
// }

// const emp = new Employee('John Doe', 5000);
// console.log(emp.getSalary()); // Output: 5000
// emp.setSalary(6000);
// console.log(emp.getSalary()); // Output: 6000
// ==================
// Inheritance
// Inheritance allows a class to derive properties and methods from another class.


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a sound.`);
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log(`${this.name} barks.`);
//     }
// }

// const dog = new Dog('Buddy');
// dog.speak(); // Output: Buddy barks.
// =====================
class Vehicle {
    startEngine() {
        console.log('Engine started');
    }
}

class Car extends Vehicle {
    drive() {
        console.log('Car is driving');
    }
}

class ElectricCar extends Car {
    chargeBattery() {
        console.log('Battery is charging');
    }
}

const tesla = new ElectricCar();
tesla.startEngine(); // Output: Engine started
tesla.drive(); // Output: Car is driving
tesla.chargeBattery(); // Output: Battery is charging
// =============================
// JavaScript does not support multiple inheritance directly, which means you cannot inherit from more than one class or constructor function in a straightforward way. However, you can achieve similar behavior using different patterns and techniques.

