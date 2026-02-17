import { GetDaysOfMonth, dayNamesDictionary} from "./logic.js";


const currentDate = new Date(); //Tue Feb 17 2026 01:05:10 GMT+0000 (Greenwich Mean Time)

const currentYear = currentDate.getFullYear(); // 2026
const currentMonth = currentDate.getMonth(); // 1  >> for feb


const currentDay = currentDate.getDay(); // 2 >>for Tue (0 sun, 1 mon , 2 tue, 3 wed , 4 thu , 5 fri , 6 sat)


const monthTitle = document.getElementById("monthTitle");
const calendarGrid = document.getElementById("calendarGrid");



monthTitle.textContent= `${currentDate.toDateString()} `;


let daysOfMonth = GetDaysOfMonth(currentYear, currentMonth + 1); // this is for first render to display current month

// console.log(daysOfMonth);


function displayCalendarDays(daysOfMonth) {
	let string = "";
	let displayedDay = "";

	// for disabled squares in the beginning of calendar table
	for(let x = 1; x<= daysOfMonth[0].weekDayNumber; x++) {
		string += `<div class="day empty">x</div>`;
	}

	//start showing days
	for(let i = 1; i <= daysOfMonth.length; i++) {
		displayedDay = i;

		string += `<div class="day">${displayedDay}</div> `;
	}

	// for disabled squares in the beginning of calendar table
	for(let x = 1; x<= 6 - daysOfMonth[daysOfMonth.length - 1].weekDayNumber; x++) {
		string += `<div class="day empty">x</div>`;
	}
	return string;
}
calendarGrid.innerHTML = displayCalendarDays(daysOfMonth);



//event listener for the select 

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

const monthSelect = document.getElementById("monthSelect");
//create the months options 
for(let i = 0 ; i < 12 ; i++){
const option = document.createElement("option");
option.value = `${i}`;
option.textContent = monthNames[i];
// option.textContent += i+1;
monthSelect.appendChild(option);
}


monthSelect.addEventListener("change",(e)=> {
const selectedMonth = Number(e.target.value); // string to number 
  console.log(typeof(selectedMonth));
  daysOfMonth = GetDaysOfMonth(currentYear, selectedMonth +1);
  
monthTitle.textContent= `${monthNames[selectedMonth]} `;

  calendarGrid.innerHTML = displayCalendarDays(daysOfMonth);

// if this month selected 
// save the index number of thsi month 
// then call the function of days of month that return the month object 
// then render the month with the function display calendar days 
//then re-render the whole thing on screen 




} );




