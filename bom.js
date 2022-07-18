function getUnderstand(input) {
	let test = input || "default";
	return test;
}

console.log(getUnderstand(0));


// for "" ==> ?? = "" and || = "default"
// for 0 ==> ?? = 0 and || = "default"
// for null ==> ?? = "default" and || = "default"
// for undefined ==> ?? = "default" and || = "default"





