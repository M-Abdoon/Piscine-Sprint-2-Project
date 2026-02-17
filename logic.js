import daysData from "./days.json" with { type: "json" };

export function GetDaysOfMonth(year, month) {
	month = month - 1;
	const jsonData = daysData;

	const firstDayOfMonth = new Date(year, month, 1);
	let weekday = firstDayOfMonth.getDay();
	let result = [];

	for (let i = 1; i <= 35; i++) {
		if (i !== 1) weekday += 1;
		if (weekday === 7) weekday = 0;

		const isDateValid = new Date(year, month, i);
		if (
			isDateValid.getFullYear() !== year ||
			isDateValid.getMonth() !== month ||
			isDateValid.getDate() !== i
		) {
			break;
		}

		result.push({
			dayNumber: i,
			dayName: dayNamesDictionary(weekday)
		})
	}

	result = getSpecialDays(result, monthNamesDictionary(month));
	return result;
}

export function dayNamesDictionary(DayNumber) {
	const dayNames = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];
	return dayNames[DayNumber];
}

export function monthNamesDictionary(monthNumber) {
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
		"December"
	];
	return monthNames[monthNumber];
}

export function getSpecialDays(daysOfMonthData, month) { // month is optional parameter

	const monthsFiltered = daysData.filter(specialDay => specialDay.monthName == month);

	if(monthsFiltered != 0) { // means we have special days in this month
		
		let specialDayIs = "";
		monthsFiltered.forEach(specialDay => { // assume dayName is Tuesday
			const nameOfDay = specialDay.dayName;
			const occurrence = specialDay.occurrence;
			console.log(1);
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

			specialDayIs.isSpecialDay = {
				name: specialDay.name,
				descriptionURL: specialDay.descriptionURL
			};
			console.log(1)
		})
	}
	return daysOfMonthData;
}


//console.log(GetDaysOfMonth(2020, 10));