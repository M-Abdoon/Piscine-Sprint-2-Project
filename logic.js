import daysData from "./days.json" with { type: "json" };

export function GetDaysOfMonth(year, month) {
  month = month - 1;
  const jsonData = daysData;

  const firstDayOfMonth = new Date(year, month, 1);
  let weekday = firstDayOfMonth.getDay();
  let result = [];

  for (let i = 1; i <= 31; i++) {
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
      dayName: dayNamesDictionary(weekday),
      weekDayNumber: weekday,
    });
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
    "Saturday",
  ];
  return dayNames[DayNumber];
}

export function monthNamesDictionary(month) {
  const monthNames = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  if (typeof month === "string")
    return Object.keys(monthNames).find((k) => monthNames[k] === month);
  return monthNames[month];
}

export function getSpecialDays(daysOfMonthData, month) {
  const monthsFiltered = daysData.filter(
    (specialDay) => specialDay.monthName == month,
  );

  if (monthsFiltered.length != 0) {
    let specialDayIs = {};

    monthsFiltered.forEach((specialDay) => {
      const nameOfDay = specialDay.dayName;
      const occurrence = specialDay.occurrence;

      const dayOccurrence = daysOfMonthData.filter(
        (day) => day.dayName == nameOfDay,
      );

      if (occurrence === "first") specialDayIs = dayOccurrence[0];
      else if (occurrence === "second") specialDayIs = dayOccurrence[1];
      else if (occurrence === "third") specialDayIs = dayOccurrence[2];
      else if (occurrence === "fourth") specialDayIs = dayOccurrence[3];
      else if (occurrence === "last") specialDayIs = dayOccurrence.at(-1);

      specialDayIs.isSpecialDay = {
        name: specialDay.name,
        occurrence: specialDay.occurrence,
        descriptionURL: specialDay.descriptionURL,
      };
    });
  }
  return daysOfMonthData;
}

export function ordinalNumbering(occurrence) {
  const ordinalNumbers = {
    1: "first",
    2: "second",
    3: "third",
    4: "fourth",
    5: "last",
  };
  return Object.keys(ordinalNumbers).find(
    (k) => ordinalNumbers[k] === occurrence,
  );
}

export function getDTStamp() {
  const now = new Date();

  const YYYY = now.getUTCFullYear();
  const MM = String(now.getUTCMonth() + 1).padStart(2, "0");
  const DD = String(now.getUTCDate()).padStart(2, "0");

  return `${YYYY}${MM}${DD}`;
}

export async function getIcsFormatData(startYear, endYear) {
  let newDaysData = [];

  for (let year = startYear; year <= endYear; year++) {
    for (let month = 1; month <= 12; month++) {
      const daysOfMonth = GetDaysOfMonth(year, month);

      for (const day of daysOfMonth) {
        if (!day.hasOwnProperty("isSpecialDay")) continue;

        const name = day.isSpecialDay.name;
        const nameToUID = name.replace(/ /g, "-").toLowerCase();
        const descriptionURL = day.isSpecialDay.descriptionURL;

        const dtStartDate = new Date(year, month - 1, day.dayNumber);
        const dtEndDate = new Date(dtStartDate);
        dtEndDate.setDate(dtStartDate.getDate() + 1);

        const dtStartStr = formatDateToICS(dtStartDate);
        const dtEndStr = formatDateToICS(dtEndDate);

        newDaysData.push({
          UID: `${nameToUID}-${year}@ourDaysCalendar`,
          dtStamp: getDTStamp(),
          dtStart: dtStartStr,
          dtEnd: dtEndStr,
          summary: name,
          description: await getDescriptionTxt(descriptionURL),
        });
      }
    }
  }

  return newDaysData;
}

function formatDateToICS(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}${month}${day}`;
}

export async function getDescriptionTxt(url) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    return text;
  } catch (err) {
    return "Description not available.";
  }
}

export function generateIcsFile(allIcsInfo) {
  let string = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//DaysCalendar-Rahma-Abdoon//EN
`;
  allIcsInfo.forEach((day) => {
    string += `BEGIN:VEVENT
UID:${day.UID}
DTSTAMP:${day.dtStamp}
DTSTART;VALUE=DATE:${day.dtStart}
DTEND;VAKUE=DATE:${day.dtEnd}
SUMMARY:${day.summary}
DESCRIPTION:${day.description}
END:VEVENT
`;
  });
  string += "END:VCALENDAR";

  return string;
}
