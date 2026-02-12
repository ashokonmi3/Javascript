/* ============================================================
   JAVASCRIPT DATE TUTORIAL 
   ============================================================ */

/* ============================================================
SECTION 1: Create Date Objects (Different Ways)
NOTES:
- Date stores milliseconds since 1970-01-01T00:00:00.000Z (UTC)
- new Date() => current date/time
- new Date(ms) => from timestamp in milliseconds
- new Date("ISO string") => best reliable string parsing
- new Date(y, m, d, h, min, s, ms) => month is 0-based (Jan=0)
- ISO format usually means the standard defined by ISO 8601 for representing date and time.
  YYYY-MM-DDTHH:mm:ss.sssZ
- T → separates date and time
- Z → means UTC timezone (offset +00:00)
============================================================ */

// const now = new Date(); // current date and time 24 hours format
// console.log("Current (local):", now.toString());//local time
// console.log("Current (ISO/UTC):", now.toISOString());

// const epoch = new Date(0);
// console.log("Epoch (0 ms):", epoch.toISOString()); // 1970-01-01T00:00:00.000Z

// const epoch1 = new Date(10000);
// console.log("Epoch (0 ms):", epoch1.toISOString()); // 1970-01-01T00:00:00.000Z

// const fromISO = new Date("2026-02-11T10:30:00Z");
// console.log("From ISO (UTC):", fromISO.toISOString());

// const fromParts = new Date(2026, 1, 11, 16, 45, 0); // Feb 11 2026 16:45 (local)
// console.log("From parts (local):", fromParts.toString());

// // ⚠️ Risky string format (avoid in real apps)
// const risky = new Date("02/11/2026");
// console.log('Risky parse "02/11/2026":', risky.toString());

/* ============================================================
SECTION 2: Get Date Parts (Local Time)
NOTES:
- getFullYear(), getMonth(), getDate(), getDay()
- Month is 0-11, Day of week is 0-6 (Sun=0)
============================================================ */

// const d = new Date();

// console.log("Full date:", d.toString());
// console.log("Year:", d.getFullYear());
// console.log("Month (0-11):", d.getMonth()); // months starts from 0
// console.log("Date (1-31):", d.getDate());
// console.log("Day (0-6, Sun=0):", d.getDay()); // days also starts from 0

// console.log("Hours (0-24):", d.getHours());
// console.log("Minutes:", d.getMinutes());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());

/* ============================================================
SECTION 3: Get Date Parts (UTC Time)
NOTES:
- Same getters exist in UTC form: getUTCFullYear(), getUTCMonth(), etc.
- Useful for logs, APIs, storage, standard comparisons
============================================================ */

// const d = new Date();

// console.log("ISO (UTC):", d.toISOString());
// console.log("UTC Year:", d.getUTCFullYear());
// console.log("UTC Month (0-11):", d.getUTCMonth());
// console.log("UTC Date:", d.getUTCDate());
// console.log("UTC Day (0-6):", d.getUTCDay());

// console.log("UTC Hours:", d.getUTCHours());
// console.log("UTC Minutes:", d.getUTCMinutes());
// console.log("UTC Seconds:", d.getUTCSeconds());

// =====================
// const d = new Date();

// console.log("UTC Hours:", d.getUTCHours());
// console.log("UTC Minutes:", d.getUTCMinutes());
// console.log("UTC Seconds:", d.getUTCSeconds());

// console.log("Hours:", d.getHours());
// console.log("Minutes:", d.getMinutes());
// console.log("Seconds:", d.getSeconds());

/* ============================================================
SECTION 4: Set Date Parts (Mutates the Date)
NOTES:
- setFullYear, setMonth, setDate, setHours...
- These MODIFY the same Date object (mutable)
- Overflow auto-adjusts (e.g., setDate(40) moves to next month)
============================================================ */

// const d = new Date(2026, 0, 1, 10, 0, 0); // Jan 1, 2026 10:00 local
// console.log("Start:", d.toString());

// d.setFullYear(2027);
// console.log("After setFullYear(2027):", d.toString());

// d.setMonth(5); // June
// console.log("After setMonth(5):", d.toString());

// d.setDate(15);
// console.log("After setDate(15):", d.toString());

// d.setHours(23, 59, 30, 123);
// console.log("After setHours(23,59,30,123):", d.toString());

// // Overflow example
// const overflow = new Date(2026, 0, 31); // Jan 31
// console.log("Overflow start:", overflow.toString());
// overflow.setDate(40);
// console.log("After overflow.setDate(40):", overflow.toString());

// JavaScript Date object supports automatic overflow handling.
// It does NOT throw error. It automatically adjusts the month. 40th day of month mean 31+9 so 40 jan will be 9 feb
/* ============================================================
SECTION 5: Formatting Dates (Built-in)
NOTES:
- toString() => local readable
- toISOString() => UTC ISO (best for storage)
- toLocaleString() => locale based
- Use Intl timeZone option to show another timezone
============================================================ */

// const d = new Date();

// console.log("toString():", d.toString());
// console.log("toDateString():", d.toDateString());
// console.log("toTimeString():", d.toTimeString());

// console.log("toISOString():", d.toISOString());
// console.log("toUTCString():", d.toUTCString());

// console.log("toLocaleString():", d.toLocaleString("en-IN"));

// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "2-digit",
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
//   hour12: true,
// };

// console.log("en-IN custom:", d.toLocaleString("en-IN", options));
// console.log(
//   "Asia/Kolkata:",
//   d.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", ...options }),
// );
// console.log("UTC:", d.toLocaleString("en-US", { timeZone: "UTC", ...options }));

/* ============================================================
SECTION 6: Parsing + Validation
NOTES:
- Date.parse(str) returns timestamp (ms) OR NaN
- new Date(invalid) produces "Invalid Date"
- Validate by checking !isNaN(date.getTime())
- Date.parse(str) returns Milliseconds since 1 Jan 1970 00:00:00 UTC
============================================================ */

// const ts = Date.parse("2026-02-11T10:30:00Z");
// console.log("Parsed timestamp:", ts); // will give millisecond from 1 Jan 1970
// console.log("As date:", new Date(ts).toISOString());

// const good = new Date("2026-02-11");
// const bad = new Date("not-a-date");

// function isValidDate(d) {
//   return d instanceof Date && !Number.isNaN(d.getTime());
// }

// console.log("Good date:", good.toString(), "Valid?", isValidDate(good));
// console.log("Bad date:", bad.toString(), "Valid?", isValidDate(bad));

/* ============================================================
SECTION 7: Timestamps (ms) and Conversions
NOTES:
- Date.now() => current timestamp ms
- date.getTime() => timestamp ms for that date
- new Date(ms) => convert timestamp to Date
============================================================ */

// console.log("Date.now():", Date.now());

// const d = new Date();
// console.log("Current getTime():", d.getTime());

// const ms = 1700000000000; // sample timestamp
// console.log("From sample ms:", new Date(ms).toString());

/* ============================================================
SECTION 8: Compare Dates
NOTES:
- Compare using timestamps
- d1 < d2 works because Date converts to number internally
============================================================ */

// console.log("\n=== SComparing Dates ===");

// const a = new Date(2026, 1, 11); // Feb 11
// const b = new Date(2026, 1, 12); // Feb 12

// console.log("a:", a.toDateString());
// console.log("b:", b.toDateString());

// console.log("a.getTime()", a.getTime()); //The number of milliseconds since January 1, 1970, 00:00:00 UTC

// console.log("a < b ?", a.getTime() < b.getTime());
// console.log("a > b ?", a.getTime() > b.getTime());
// console.log("a == b (timestamps)?", a.getTime() === b.getTime());

// console.log("Direct a < b ?", a < b);

/* ============================================================
SECTION 9: Difference Between Two Dates (Days/Hours)
NOTES:
- Difference = end - start (ms)
- Convert ms to days/hours/min
============================================================ */

// const start = new Date(2026, 1, 11, 10, 0, 0);
// const end = new Date(2026, 1, 13, 10, 0, 0);

// const diffMs = end.getTime() - start.getTime();
// const diffHours = diffMs / (1000 * 60 * 60);
// const diffDays = diffMs / (1000 * 60 * 60 * 24);

// console.log("Start:", start.toString());
// console.log("End:", end.toString());
// console.log("Diff ms:", diffMs);
// console.log("Diff hours:", diffHours);
// console.log("Diff days:", diffDays);

/* ============================================================
SECTION 10: Add/Subtract Days (Non-Mutating Utility)
NOTES:
- Safest approach: clone first, then setDate(getDate()+days)
- This returns a NEW Date (does not change original)
============================================================ */

console.log("\n=== SECTION 10: Add/Subtract Days ===");

function addDays(dateObj, days) {
  const copy = new Date(dateObj.getTime()); // clone
  copy.setDate(copy.getDate() + days);
  return copy;
}

const base = new Date(2026, 1, 11);
console.log("Base:", base.toDateString());

const plus5 = addDays(base, 5);
console.log("Base + 5:", plus5.toDateString());

const plus25 = addDays(base, 25);
console.log("Base + 25:", plus25.toDateString());

const minus10 = addDays(base, -10);
console.log("Base - 10:", minus10.toDateString());

console.log("Base unchanged:", base.toDateString());

/* ============================================================
SECTION 11: Add Months (Safer End-of-Month Handling)
NOTES:
- Jan 31 + 1 month is tricky (Feb has fewer days)
- This utility tries to keep same day or clamp to last day of target month
============================================================ */

// function addMonths(dateObj, months) {
//   const d = new Date(dateObj.getTime());
//   const originalDay = d.getDate();

//   // move to 1st to avoid overflow
//   d.setDate(1);
//   d.setMonth(d.getMonth() + months);

//   // last day of target month
//   const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate(); //new Date(2026, 2, 0) 0 here give one day before last day

//   d.setDate(Math.min(originalDay, lastDay));

//   return d;
// }

// const jan31 = new Date(2026, 0, 31);
// console.log("Jan 31:", jan31.toDateString());
// console.log("+1 month:", addMonths(jan31, 1).toDateString());
// console.log("+2 months:", addMonths(jan31, 2).toDateString());

// const jan1 = new Date(2026, 0, 1);
// console.log("+1 month:", addMonths(jan1, 1).toDateString());

/* ============================================================
SECTION 12: Start/End of Day and Month Utilities
NOTES:
- Useful for reports, filters, comparisons
============================================================ */

// console.log("\n=== SECTION 12: Start/End of Day & Month ===");

// function startOfDay(dateObj) {
//   const d = new Date(dateObj.getTime());
//   d.setHours(0, 0, 0, 0);
//   return d;
// }

// function endOfDay(dateObj) {
//   const d = new Date(dateObj.getTime());
//   d.setHours(23, 59, 59, 999);
//   return d;
// }

// function startOfMonth(dateObj) {
//   return new Date(dateObj.getFullYear(), dateObj.getMonth(), 1);
// }

// function endOfMonth(dateObj) {
//   return new Date(
//     dateObj.getFullYear(),
//     dateObj.getMonth() + 1,
//     0,
//     23,
//     59,
//     59,
//     999,
//   );
// }

// const d = new Date();
// console.log("Now:", d.toString());
// console.log("Start of day:", startOfDay(d).toString());
// console.log("End of day:", endOfDay(d).toString());
// console.log("Start of month:", startOfMonth(d).toString());
// console.log("End of month:", endOfMonth(d).toString());

/* ============================================================
SECTION 13: Custom Formatter (DD-MMM-YYYY HH:mm:ss)
NOTES:
- JS does not have a built-in "custom format" like some languages.
- We can build our own simple formatter.
============================================================ */

// {
//   console.log("\n=== SECTION 13: Custom Formatter ===");

//   function pad2(n) {
//     return String(n).padStart(2, "0");
//   }

//   function formatDDMMMYYYY(dateObj) {
//     const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
//     const dd = pad2(dateObj.getDate());
//     const mmm = months[dateObj.getMonth()];
//     const yyyy = dateObj.getFullYear();
//     return `${dd}-${mmm}-${yyyy}`;
//   }

//   function formatTimeHHMMSS(dateObj) {
//     const hh = pad2(dateObj.getHours());
//     const mm = pad2(dateObj.getMinutes());
//     const ss = pad2(dateObj.getSeconds());
//     return `${hh}:${mm}:${ss}`;
//   }

//   const d = new Date();
//   console.log("Custom Date:", formatDDMMMYYYY(d));
//   console.log("Custom Time:", formatTimeHHMMSS(d));
//   console.log("Custom DateTime:", `${formatDDMMMYYYY(d)} ${formatTimeHHMMSS(d)}`);
// }

/* ============================================================
SECTION 14: Common Pitfalls (Must Know)
NOTES:
1) Month index is 0-based (Jan=0)
2) Avoid non-ISO parsing
3) Use ISO for storage, locale formatting for display
============================================================ */

// {
//   console.log("\n=== SECTION 14: Pitfalls ===");

//   const feb11 = new Date(2026, 1, 11); // month=1 => February
//   console.log("Month index 1 => Feb:", feb11.toDateString());

//   const iso = new Date("2026-02-11T10:30:00Z");
//   console.log("ISO safe parsing:", iso.toISOString());

//   const ambiguous = new Date("11-02-2026"); // avoid!
//   console.log('Ambiguous "11-02-2026":', ambiguous.toString());

//   console.log("Tip: Prefer ISO strings: YYYY-MM-DD or YYYY-MM-DDTHH:mm:ssZ");
// }

/* ============================================================
✅ END
If you want, I can also give:
- Date interview questions (beginner → advanced)
- A reusable date-utils module with exports (Node/Browser)
- Practice problems + expected outputs
============================================================ */
