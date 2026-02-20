import { GetDaysOfMonth, dayNamesDictionary } from "./logic.js";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
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

const calendarGrid = document.getElementById("calendarGrid");
let monthTitle = document.getElementById("monthTitle");

monthTitle.textContent = `${monthNames[monthAndYearState.month]} ${monthAndYearState.year}`;

let daysOfMonth = GetDaysOfMonth(currentYear, currentMonth + 1);

function displayCalendarDays(daysOfMonth) {
  let string = "";
  let displayedDay = "";

  for (let x = 1; x <= daysOfMonth[0].weekDayNumber; x++) {
    string += `<div class="empty">x</div>`;
  }

  for (let i = 1; i <= daysOfMonth.length; i++) {
    displayedDay = i;

    if (daysOfMonth[i - 1].hasOwnProperty("isSpecialDay")) {
      const specialDayName = daysOfMonth[displayedDay - 1].isSpecialDay.name;
      const specialDayDesc =
        daysOfMonth[displayedDay - 1].isSpecialDay.descriptionURL;

      string += `<div class="day special" title="${specialDayName}">${displayedDay}</div> `;
    } else string += `<div class="day">${displayedDay}</div> `;
  }

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

const monthSelect = document.getElementById("monthSelect");

for (let i = 0; i < 12; i++) {
  const option = document.createElement("option");
  option.value = `${i}`;
  option.textContent = monthNames[i];
  if (i === currentMonth) {
    option.selected = true;
  }
  monthSelect.appendChild(option);
}

monthSelect.addEventListener("change", (e) => {
  monthAndYearState.month = Number(e.target.value);
  daysOfMonth = GetDaysOfMonth(
    monthAndYearState.year,
    monthAndYearState.month + 1,
  );
  monthTitle.textContent = `${monthNames[monthAndYearState.month]} ${monthAndYearState.year}`;

  calendarGrid.innerHTML = displayCalendarDays(daysOfMonth);
});

const yearSelect = document.getElementById("yearSelect");

for (let i = currentYear - 26; i <= currentYear + 26; i++) {
  const option = document.createElement("option");
  option.value = `${i}`;
  option.textContent = i;
  if (i === currentYear) {
    option.selected = true;
  }
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
  monthSelect.value = monthAndYearState.month;
  yearSelect.value = monthAndYearState.year;
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
  monthSelect.value = monthAndYearState.month;
  yearSelect.value = monthAndYearState.year;
});
