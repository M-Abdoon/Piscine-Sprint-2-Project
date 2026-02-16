import { GetDaysOfMonth, dayNamesDictionary} from "./logic.js";

const body = document.getElementById("body");
const daysOfMonth = GetDaysOfMonth(2026, 6);

function displayCalendarDays(daysOfMonth) {
	let string = "";
	let displayedDay = "";

	// for disabled squares in the beginning of calendar table
	for(let x = 1; x<= daysOfMonth[0].weekDayNumber; x++) {
		string += "[ Disabled ] ";
	}

	//start showing days
	for(let i = 1; i <= daysOfMonth.length; i++) {
		displayedDay = i;

		// in case we have a special day
		if(displayedDay == 25) {
			string += `[Special Day] `;
			continue;
		}

		string += `[${displayedDay}] `;
	}
	return string;
}
body.innerHTML = displayCalendarDays(daysOfMonth);