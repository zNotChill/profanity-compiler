
// the compiler

const words = require("naughty-words");
const fs = require("fs");

let wordsL = "";

for (const key in words) {
	const req = require("naughty-words/" + key);
	const list = req.join("\n")
	wordsL += `\n${list}`;
}

fs.writeFileSync("list.txt", "", "utf-8", (err) => {})
fs.appendFileSync("list.txt", wordsL, "utf-8", (err) => {
	if(err) throw err;
})