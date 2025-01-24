// Defining a class
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     // Method
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// // Creating an object
// const person1 = new Person('Alice', 25);
// person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
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
// =======================
// Inhetitenche
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Buddy');
dog.speak(); // Output: Buddy barks.
// ==============
// Multiple Levels of Inheritance
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
