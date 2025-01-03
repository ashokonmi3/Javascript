// let currentDate = new Date();
// console.log(currentDate); // Output: current date and time
// =====================

// let specificDate = new Date('2023-07-25');
// console.log(specificDate); // Output: Tue Jul 25 2023 ...
// ====================

// let customDate = new Date(2023, 6, 25, 12, 30, 0, 0); // Note: Months are 0-indexed (0 = January)
// console.log(customDate); // Output: Tue Jul 25 2023 12:30:00 ...
// ==========================

// let customDate = new Date(2023, 6, 25, 12, 30, 0, 0); // Note: Months are 0-indexed (0 = January)
// console.log(customDate); // Output: Tue Jul 25 2023 12:30:00 ...
// =====================

// let today = new Date();
// console.log("Year:", today.getFullYear()); // Output: current year
// console.log("Month:", today.getMonth() + 1); // Output: current month (1-indexed)
// console.log("Day:", today.getDate()); // Output: current day of the month
// console.log("Hours:", today.getHours()); // Output: current hour
// console.log("Minutes:", today.getMinutes()); // Output: current minute
// ======================

// let myDate = new Date();
// myDate.setFullYear(2025);
// myDate.setMonth(4); // May (remember: months are 0-indexed)
// myDate.setDate(15);
// console.log(myDate); // Output: the new date after setting year, month, and day
// // =================

// let today = new Date();
// console.log("Day of the Week:", today.getDay()); // Output: 0 (Sunday) - 6 (Saturday)
// =====================
// // converting date to string 
// let myDate = new Date();
// console.log("Date as String:", myDate.toString()); // Output: full date string
// console.log("ISO Format:", myDate.toISOString()); // Output: ISO format date
// ===========================
// Date and Time Arithmetic
// Adding Days to a Date:
// You can add days by using setDate() and getDate() methods.

// let myDate = new Date();
// myDate.setDate(myDate.getDate() + 5); // Adds 5 days
// console.log(myDate);
// ===================
// Subtracting Days from a Date:

// let myDate = new Date();
// myDate.setDate(myDate.getDate() - 5); // Subtracts 5 days
// console.log(myDate);
// ================
// Finding Difference Between Two Dates:

// let date1 = new Date('2023-07-01');
// let date2 = new Date('2023-07-25');
// let difference = Math.abs(date2 - date1);
// console.log("Difference in Milliseconds:", difference);

// // Convert milliseconds to days:
// let daysDifference = difference / (1000 * 3600 * 24);
// console.log("Difference in Days:", daysDifference);
// ===================
// Adding Hours to a Date:

// let myDate = new Date();
// myDate.setHours(myDate.getHours() + 10); // Adds 10 hours
// console.log(myDate);
// ===================
// Getting Current Time in Milliseconds:

// let currentMilliseconds = Date.now(); // Current time in milliseconds since 1970-01-01
// console.log("Milliseconds Since Epoch:", currentMilliseconds);
// ====================

// Formatting Dates
// JavaScript does not have built-in date formatting options like other languages. However, you can manually format a date using methods like getFullYear(), getMonth(), etc.
// let today = new Date();
// let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
// console.log("Formatted Date:", formattedDate); // Output: 25/7/2023 (Example)
