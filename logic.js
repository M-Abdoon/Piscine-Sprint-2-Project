export function GetDaysOfMonth(year, month) {
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
			dayName: dayNamesDictionary(weekday),
			weekDayNumber: weekday
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