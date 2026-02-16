  
const date = new Date();

//to render the (day month year) on top of the calendar dynamically
const daysNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const month = date.getMonth();
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
const year = date.getFullYear()


const currentDay = daysNames[date.getDay()]; 
const currentMonth = monthNames[month]; 
const currentYear = year;

const monthTitle = document.getElementById("monthTitle");
monthTitle.textContent= `${currentDay} ${currentMonth} ${currentYear} `;

//---------------------------------------------------------------------------

