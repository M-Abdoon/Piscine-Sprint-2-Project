import { GetDaysOfMonth, dayNamesDictionary} from "./logic.js";
import daysData from "./days.json" with { type: "json" };


const calendarGrid = document.getElementById("calendarGrid");

const daysOfMonthData = GetDaysOfMonth(2020, 10);

//console.log(daysOfMonthData);

function getSpecialDays(daysOfMonthData, month) { // month is optional parameter
	// month now is - for example - october
	month = "October";
	const monthsFiltered = daysData.filter(specialDay => specialDay.monthName == month);

	if(monthsFiltered != 0) { // means we have special days in this month
		
		let specialDayIs = "";
		monthsFiltered.forEach(specialDay => { // assume dayName is Tuesday
			const nameOfDay = specialDay.dayName;
			const occurrence = specialDay.occurrence;

			// info of day names repeated in that month
			const countsOfSelectedDayNames = daysOfMonthData.filter(day => day.dayName == nameOfDay);

			if(occurrence === "first")
				specialDayIs = countsOfSelectedDayNames[0];
			else if (occurrence === "second")
				specialDayIs = countsOfSelectedDayNames[1];
			else if (occurrence === "third")
				specialDayIs = countsOfSelectedDayNames[2];
			else if (occurrence === "forth")
				specialDayIs = countsOfSelectedDayNames[3];
			else if (occurrence === "last")
				specialDayIs = countsOfSelectedDayNames[4];

			console.log(specialDayIs);
		})
		
	}

	console.log(daysOfMonthData);
	console.log(daysData);
}

console.log(getSpecialDays(daysOfMonthData));