import { GetDaysOfMonth, dayNamesDictionary} from "./logic.js";
import daysData from "./days.json" with { type: "json" };


const calendarGrid = document.getElementById("calendarGrid");

const daysOfMonthData = GetDaysOfMonth(2020, 2);

//console.log(daysOfMonthData);

function getSpecialDays(daysOfMonthData) {

	return daysData;
}

console.log(getSpecialDays(daysOfMonthData));