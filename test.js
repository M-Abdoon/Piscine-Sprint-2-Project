import { GetDaysOfMonth, dayNamesDictionary} from "./logic.js";

const daysOfMonth = GetDaysOfMonth(2026, 5);
let string = "";
for(let i = 1; i <= 7; i++) {
	if(i < 8) {
		string = `Day ${dayNamesDictionary(i-1)} in grid = `;

		if(dayNamesDictionary(i-1) == daysOfMonth[0].dayName) {
			string += daysOfMonth[0].dayName
		}
		console.log(string)
	}


}
//console.log(daysOfMonth[0].dayName);




console.log(GetDaysOfMonth(2026,5));
