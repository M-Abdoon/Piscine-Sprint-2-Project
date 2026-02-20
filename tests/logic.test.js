import assert from "node:assert";
import test from "node:test";
import { GetDaysOfMonth, getSpecialDays } from "../logic.js";

//------------------ testing GetDaysOfMonth() ------------------

test("GetDaysOfMonth() returns the correct number of days for February 2026", () => {
  assert.equal(GetDaysOfMonth(2026, 2).length, 28);
});

test("GetDaysOfMonth() returns the correct number of days for February 2024 (leap year)", () => {
  assert.equal(GetDaysOfMonth(2024, 2).length, 29);
});

test("GetDaysOfMonth() returns the correct data type , expecting array", () => {
  assert.equal(typeof GetDaysOfMonth(2024, 2), "object");
});

//------------------ testing getSpecialDays() ------------------

test("getSpecialDays() returns the correct events names for October 2025", () => {
  const daysofOctober2025 = [
    { dayNumber: 1, dayName: "Wednesday", weekDayNumber: 3 },
    { dayNumber: 2, dayName: "Thursday", weekDayNumber: 4 },
    { dayNumber: 3, dayName: "Friday", weekDayNumber: 5 },
    { dayNumber: 4, dayName: "Saturday", weekDayNumber: 6 },
    { dayNumber: 5, dayName: "Sunday", weekDayNumber: 0 },
    { dayNumber: 6, dayName: "Monday", weekDayNumber: 1 },
    { dayNumber: 7, dayName: "Tuesday", weekDayNumber: 2 },
    { dayNumber: 8, dayName: "Wednesday", weekDayNumber: 3 },
    { dayNumber: 9, dayName: "Thursday", weekDayNumber: 4 },
    { dayNumber: 10, dayName: "Friday", weekDayNumber: 5 },
    { dayNumber: 11, dayName: "Saturday", weekDayNumber: 6 },
    { dayNumber: 12, dayName: "Sunday", weekDayNumber: 0 },
    { dayNumber: 13, dayName: "Monday", weekDayNumber: 1 },
    { dayNumber: 14, dayName: "Tuesday", weekDayNumber: 2 },
    { dayNumber: 15, dayName: "Wednesday", weekDayNumber: 3 },
    { dayNumber: 16, dayName: "Thursday", weekDayNumber: 4 },
    { dayNumber: 17, dayName: "Friday", weekDayNumber: 5 },
    { dayNumber: 18, dayName: "Saturday", weekDayNumber: 6 },
    { dayNumber: 19, dayName: "Sunday", weekDayNumber: 0 },
    { dayNumber: 20, dayName: "Monday", weekDayNumber: 1 },
    { dayNumber: 21, dayName: "Tuesday", weekDayNumber: 2 },
    { dayNumber: 22, dayName: "Wednesday", weekDayNumber: 3 },
    { dayNumber: 23, dayName: "Thursday", weekDayNumber: 4 },
    { dayNumber: 24, dayName: "Friday", weekDayNumber: 5 },
    { dayNumber: 25, dayName: "Saturday", weekDayNumber: 6 },
    { dayNumber: 26, dayName: "Sunday", weekDayNumber: 0 },
    { dayNumber: 27, dayName: "Monday", weekDayNumber: 1 },
    { dayNumber: 28, dayName: "Tuesday", weekDayNumber: 2 },
    { dayNumber: 29, dayName: "Wednesday", weekDayNumber: 3 },
    { dayNumber: 30, dayName: "Thursday", weekDayNumber: 4 },
    { dayNumber: 31, dayName: "Friday", weekDayNumber: 5 },
  ];

  const result = getSpecialDays(daysofOctober2025, "October");

  assert.equal(result[13].isSpecialDay.name, "Ada Lovelace Day");
  assert.equal(result[30].isSpecialDay.name, "World Lemur Day");
});
