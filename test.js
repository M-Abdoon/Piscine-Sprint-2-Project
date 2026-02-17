import { GetDaysOfMonth, dayNamesDictionary} from "./logic.js";
import daysData from "./days.json" with { type: "json" };


const calendarGrid = document.getElementById("calendarGrid");

const daysOfMonthData = GetDaysOfMonth(2020, 2);

//console.log(daysOfMonthData);

function getSpecialDays(daysOfMonthData, month) { // month is optional parameter
	// month now is - for example - october
	month = "October";
	const monthsFiltered = daysData.filter(specialDay => specialDay.monthName == month);

	if(monthsFiltered != 0) { // means we have special days in this month
		
		monthsFiltered.forEach(specialDay => { // assume dayName is Tuesday

			// number of how many times this day is repeated in that month
			const countsOfSelectedDayNames = daysOfMonthData.filter(day => day.dayName == specialDay.dayName).length;

			console.log(countsOfSelectedDayNames);
		})
		
	}

	console.log(daysOfMonthData);
	console.log(daysData);
}

console.log(getSpecialDays(daysOfMonthData));