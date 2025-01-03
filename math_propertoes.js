// console.log("Value of PI:", Math.PI);             // 3.141592653589793
// console.log("Euler's Number (E):", Math.E);       // 2.718281828459045
// console.log("Natural Log of 2 (LN2):", Math.LN2); // 0.6931471805599453
// console.log("Square Root of 2 (SQRT2):", Math.SQRT2); // 1.4142135623730951
// // ================================
// // Meth Method

// console.log("Absolute Value:", Math.abs(-42));    // 42
// console.log("Power (2^3):", Math.pow(2, 3));      // 8
// console.log("Square Root:", Math.sqrt(16));       // 4
// console.log("Cube Root:", Math.cbrt(27));         // 3
// console.log("Round:", Math.round(4.7));           // 5
// console.log("Ceil:", Math.ceil(4.1));             // 5
// console.log("Floor:", Math.floor(4.9));           // 4
// // =========================
// // Random number 

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// console.log("Random number between 1 and 10:", getRandomInt(1, 10));
// //  =====================
// // Trignomatry 

// console.log("Sine of π/2:", Math.sin(Math.PI / 2)); // 1
// console.log("Cosine of π:", Math.cos(Math.PI));     // -1
// console.log("Tangent of 0:", Math.tan(0));          // 0
// // ========================
// // Rounding and clamping 

// console.log("Maximum of [4, 7, 1]:", Math.max(4, 7, 1)); // 7
// console.log("Minimum of [4, 7, 1]:", Math.min(4, 7, 1)); // 1
// console.log("Truncate 4.9:", Math.trunc(4.9));           // 4
// ============================

// Math Quiz Game
function startMathQuiz() {
    console.log("Welcome to the Math Quiz Game!");
  
    // Number of questions
    const numQuestions = 5;
    let score = 0;
  
    // Generate random math questions
    for (let i = 1; i <= numQuestions; i++) {
      const num1 = Math.floor(Math.random() * 50) + 1; // Random number between 1 and 50
      const num2 = Math.floor(Math.random() * 50) + 1;
      const operatorIndex = Math.floor(Math.random() * 4); // Random operator
      let question, correctAnswer;
  
      switch (operatorIndex) {
        case 0: // Addition
          question = `${num1} + ${num2}`;
          correctAnswer = num1 + num2;
          break;
        case 1: // Subtraction
          question = `${num1} - ${num2}`;
          correctAnswer = num1 - num2;
          break;
        case 2: // Multiplication
          question = `${num1} × ${num2}`;
          correctAnswer = num1 * num2;
          break;
        case 3: // Division
          question = `${num1} ÷ ${num2}`;
          correctAnswer = Math.round((num1 / num2) * 100) / 100; // Round to 2 decimals
          break;
      }
  
      // Ask the question
      const userAnswer = parseFloat(
        prompt(`Question ${i}: What is ${question}?`)
      );
  
      // Check the answer
      if (userAnswer === correctAnswer) {
        console.log(`Correct! The answer is ${correctAnswer}.`);
        score++;
      } else {
        console.log(
          `Wrong! The correct answer is ${correctAnswer}. Your answer was ${userAnswer}.`
        );
      }
    }
  
    // Display final score
    console.log(`Quiz Over! Your final score is ${score}/${numQuestions}.`);
  
    // Provide feedback based on score
    if (score === numQuestions) {
      console.log("Excellent work! You're a math wizard! 🎉");
    } else if (score >= numQuestions / 2) {
      console.log("Good effort! Keep practicing. 💪");
    } else {
      console.log("Don't give up! Practice makes perfect. 😊");
    }
  }
  
  // Start the quiz game
  startMathQuiz();
  
