import {
	monthNamesDictionary, 
	ordinalNumbering, 
	getIcsiFormatData
} from "./logic.js";
import daysData from "./days.json" with { type: "json" };

const allIcsInfo = getIcsiFormatData(2020, 2030);

	let string = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//DaysCalendar-Rahma-Abdoon//EN
`;
	allIcsInfo.forEach( day => {
		string += 
`BEGIN:VEVENT
UID:${day.UID}
DTSTAMP:${day.dtStamp}
DTSTART;VALUE=DATE:${day.dtStart}
SUMMARY:${day.summary}
DESCRIPTION:${day.descriptionURL}
END:VEVENT
`;
	});
string += "END:VCALENDAR";

console.log(string);


//console.log(generateIcs());