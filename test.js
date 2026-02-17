import { GetDaysOfMonth, dayNamesDictionary } from "./logic.js";

const currentDate = new Date(); //Tue Feb 17 2026 01:05:10 GMT+0000 (Greenwich Mean Time)

const currentYear = currentDate.getFullYear(); // 2026
const currentMonth = currentDate.getMonth(); // 1  >> for feb
const currentDay = currentDate.getDay(); // 2 >>for Tue (0 sun, 1 mon , 2 tue, 3 wed , 4 thu , 5 fri , 6 sat)

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let monthAndYearState = {
  month: currentMonth,
  year: currentYear,
};

const monthTitle = document.getElementById("monthTitle");
const calendarGrid = document.getElementById("calendarGrid");

monthTitle.textContent = `${monthNames[monthAndYearState.month]} ${monthAndYearState.year}`;

let daysOfMonth = GetDaysOfMonth(currentYear, currentMonth + 1); // this is for first render to display current month

function displayCalendarDays(daysOfMonth) {
  let string = "";
  let displayedDay = "";

  // for disabled squares in the beginning of calendar table
  for (let x = 1; x <= daysOfMonth[0].weekDayNumber; x++) {
    string += `<div class="empty">x</div>`;
  }

  //start showing days
  for (let i = 1; i <= daysOfMonth.length; i++) {
    displayedDay = i;

    string += `<div class="day">${displayedDay}</div> `;
  }

  // for disabled squares in the beginning of calendar table
  for (
    let x = 1;
    x <= 6 - daysOfMonth[daysOfMonth.length - 1].weekDayNumber;
    x++
  ) {
    string += `<div class="empty">x</div>`;
  }
  return string;
}
calendarGrid.innerHTML = displayCalendarDays(daysOfMonth);

//event listener for the select

const monthSelect = document.getElementById("monthSelect");
//create the months options
for (let i = 0; i < 12; i++) {
  const option = document.createElement("option");
  option.value = `${i}`;
  option.textContent = monthNames[i];
  if (i === currentMonth) {
    option.selected = true; // Set the current month as selected
  }
  monthSelect.appendChild(option);
}

monthSelect.addEventListener("change", (e) => {
  monthAndYearState.month = Number(e.target.value); // string to number
  console.log(monthAndYearState.month);
  daysOfMonth = GetDaysOfMonth(
    monthAndYearState.year,
    monthAndYearState.month + 1,
  );
  //   monthTitle.textContent= `${monthNames[monthAndYearState.month]} `;
  monthTitle.textContent = `${monthNames[monthAndYearState.month]} ${monthAndYearState.year}`;

  calendarGrid.innerHTML = displayCalendarDays(daysOfMonth);
});

const yearSelect = document.getElementById("yearSelect");

for (let i = currentYear - 26; i <= currentYear + 26; i++) {
  const option = document.createElement("option");
  option.value = `${i}`;
  option.textContent = i;
  if (i === currentYear) {
    option.selected = true; // Set the current year as selected
  }
  // option.textContent += i+1;
  yearSelect.appendChild(option);
}

yearSelect.addEventListener("change", (e) => {
  monthAndYearState.year = Number(e.target.value);
  console.log(monthAndYearState.year);
  daysOfMonth = GetDaysOfMonth(
    monthAndYearState.year,
    monthAndYearState.month + 1,
  );
  monthTitle.textContent = `${monthNames[monthAndYearState.month]} ${monthAndYearState.year}`;
  calendarGrid.innerHTML = displayCalendarDays(daysOfMonth);
});

//event listeners for the next/previous buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
  monthAndYearState.month--;
  if (monthAndYearState.month < 0) {
    monthAndYearState.month = 11;
    monthAndYearState.year--;
  }
  daysOfMonth = GetDaysOfMonth(
    monthAndYearState.year,
    monthAndYearState.month + 1,
  );
  monthTitle.textContent = `${monthNames[monthAndYearState.month]} ${monthAndYearState.year}`;
  calendarGrid.innerHTML = displayCalendarDays(daysOfMonth);
});

nextBtn.addEventListener("click", () => {
  monthAndYearState.month++;
  if (monthAndYearState.month > 11) {
    monthAndYearState.month = 0;
    monthAndYearState.year++;
  }
  daysOfMonth = GetDaysOfMonth(
    monthAndYearState.year,
    monthAndYearState.month + 1,
  );
  monthTitle.textContent = `${monthNames[monthAndYearState.month]} ${monthAndYearState.year}`;
  calendarGrid.innerHTML = displayCalendarDays(daysOfMonth);
});

//want to change the selected month and year in the select too
