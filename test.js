import { GetDaysOfMonth, dayNamesDictionary} from "./logic.js";

const currentDate = new Date()

const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDay(); 


const monthTitle = document.getElementById("monthTitle");
const calendarGrid = document.getElementById("calendarGrid");

monthTitle.textContent= `${currentDate.toLocaleString()} `;

const daysOfMonth = GetDaysOfMonth(currentYear, currentMonth);
function displayCalendarDays(daysOfMonth) {
	let string = "";
	let displayedDay = "";

	// for disabled squares in the beginning of calendar table
	for(let x = 1; x<= daysOfMonth[0].weekDayNumber; x++) {
		string += `<div class="day empty">x</div>`;
	}

	//start showing days
	for(let i = 1; i <= daysOfMonth.length; i++) {
		displayedDay = i;

		string += `<div class="day">${displayedDay}</div> `;
	}

	// for disabled squares in the beginning of calendar table
	for(let x = 1; x<= 6 - daysOfMonth[daysOfMonth.length - 1].weekDayNumber; x++) {
		string += `<div class="day empty">x</div>`;
	}
	return string;
}
calendarGrid.innerHTML = displayCalendarDays(daysOfMonth);