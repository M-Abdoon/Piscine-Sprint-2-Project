import { getIcsFormatData, generateIcsFile } from "./logic.js";
import { writeFile } from "fs/promises";

const filename = "days.ics";
const startYear = 2020;
const endYear = 2030;

console.log("Generating ics file...");

const allIcsInfo = await getIcsFormatData(startYear, endYear);
const icsFormatData = generateIcsFile(allIcsInfo);

await writeFile(filename, icsFormatData);

console.log(`${filename} file is generated successfully!`);
