import { dayNamesDictionary, monthNamesDictionary } from "./logic.js";
import daysData from "./days.json" with { type: "json" };


function generateIcs() {

	let string = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//DaysCalendar-Rahma-Abdoon//EN
`;
	daysData.forEach( day => {
		const name = "first Friday Feb";
		const dayName = day.dayName;
		const occurrence = day.occurrence;


		const PRule = {
			byMonth: day.monthName,
			byDate: `${occurrence}${dayName}`,
			summary: name
	
		}
		string += `
	BEGIN:VEVENT
	UID:first-friday-feb@ourDaysCalendar
	DTSTAMP:20260218T120000Z
	DTSTART:00010101T090000Z
	RRULE:FREQ=YEARLY;BYMONTH=${PRule.byMonth};BYDAY=${PRule.byDate};UNTIL=30001231T235959Z
	SUMMARY:${PRule.summary}
	END:VEVENT
	`;
	})

string += `
END:VCALENDAR
`;
	console.log(string);
//	return string;
}

console.log(generateIcs());