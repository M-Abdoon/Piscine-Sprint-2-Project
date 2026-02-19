import assert from "node:assert";
import test from "node:test";
import { GetDaysOfMonth, getSpecialDays } from "../logic.js";

// test("Greeting is correct", () => {
//   assert.equal(1, 1);
// });

//test getSpecialDays

test("getSpecialDays returns correct special day", () => {
  const mockMonthData = [
    { dayNumber: 1, dayName: "Thursday", weekDayNumber: 4 },
    { dayNumber: 2, dayName: "Friday", weekDayNumber: 5 },
    { dayNumber: 3, dayName: "Saturday", weekDayNumber: 6 },
    { dayNumber: 4, dayName: "Sunday", weekDayNumber: 0 },
    { dayNumber: 5, dayName: "Monday", weekDayNumber: 1 },
    { dayNumber: 6, dayName: "Tuesday", weekDayNumber: 2 },
    { dayNumber: 7, dayName: "Wednesday", weekDayNumber: 3 },
    { dayNumber: 8, dayName: "Thursday", weekDayNumber: 4 },
    { dayNumber: 9, dayName: "Friday", weekDayNumber: 5 },
    { dayNumber: 10, dayName: "Saturday", weekDayNumber: 6 },
    { dayNumber: 11, dayName: "Sunday", weekDayNumber: 0 },
    { dayNumber: 12, dayName: "Monday", weekDayNumber: 1 },
    {
      dayNumber: 13,
      dayName: "Tuesday",
      weekDayNumber: 2,
      isSpecialDay: {
        name: "Ada Lovelace Day",
        occurrence: "second",
        descriptionURL:
          "https://codeyourfuture.github.io/The-Piscine/days/ada.txt",
      },
    },
    { dayNumber: 14, dayName: "Wednesday", weekDayNumber: 3 },
    { dayNumber: 15, dayName: "Thursday", weekDayNumber: 4 },
    { dayNumber: 16, dayName: "Friday", weekDayNumber: 5 },
    { dayNumber: 17, dayName: "Saturday", weekDayNumber: 6 },
    { dayNumber: 18, dayName: "Sunday", weekDayNumber: 0 },
    { dayNumber: 19, dayName: "Monday", weekDayNumber: 1 },
    { dayNumber: 20, dayName: "Tuesday", weekDayNumber: 2 },
    { dayNumber: 21, dayName: "Wednesday", weekDayNumber: 3 },
    { dayNumber: 22, dayName: "Thursday", weekDayNumber: 4 },
    { dayNumber: 23, dayName: "Friday", weekDayNumber: 5 },
    { dayNumber: 24, dayName: "Saturday", weekDayNumber: 6 },
    { dayNumber: 25, dayName: "Sunday", weekDayNumber: 0 },
    { dayNumber: 26, dayName: "Monday", weekDayNumber: 1 },
    { dayNumber: 27, dayName: "Tuesday", weekDayNumber: 2 },
    { dayNumber: 28, dayName: "Wednesday", weekDayNumber: 3 },
    { dayNumber: 29, dayName: "Thursday", weekDayNumber: 4 },
    {
      dayNumber: 30,
      dayName: "Friday",
      weekDayNumber: 5,
      isSpecialDay: {
        name: "World Lemur Day",
        occurrence: "last",
        descriptionURL:
          "https://codeyourfuture.github.io/The-Piscine/days/lemurs.txt",
      },
    },
    { dayNumber: 31, dayName: "Saturday", weekDayNumber: 6 },
  ];
  const specialDays = [
    {
      name: "Ada Lovelace Day",
      monthName: "October",
      dayName: "Tuesday",
      occurrence: "second",
      descriptionURL:
        "https://codeyourfuture.github.io/The-Piscine/days/ada.txt",
    },
  ];

  result = getSpecialDays(mockMonthData, "October");

  //   assert.deepEqual(result,
});
