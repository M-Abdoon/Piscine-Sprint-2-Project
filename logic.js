import daysData from "./days.json" with { type: "json" };

export function GetDaysOfMonth(year, month) {
	const jsonData = daysData;

	const firstDayOfMonth = new Date(year, month - 1, 1);
	let weekday = firstDayOfMonth.getDay();
	let result = [];

	for (let i = 1; i <= 35; i++) {
		if (i !== 1) weekday += 1;
		if (weekday === 7) weekday = 0;

		const isDateValid = new Date(year, month - 1, i);
		if (
			isDateValid.getFullYear() !== year ||
			isDateValid.getMonth() !== month - 1 ||
			isDateValid.getDate() !== i
		) {
			break;
		}

		result.push({
			dayNumber: i,
			dayName: dayNamesDictionary(weekday)
		})
	}
	return result;
}

export function dayNamesDictionary(DayNumber) {
	const dayNames = {
		0: "Sunday",
		1: "Monday",
		2: "Tuesday",
		3: "Wednesday",
		4: "Thursday",
		5: "Friday",
		6: "Saturday"
	};
	return dayNames[DayNumber];
}

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
}