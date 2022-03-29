// hexa value and octal value 
let hex = 0xff;
let oct = 0367;
console.log(hex, oct); // ans: 255 247

let str = "a";
let str2 = "Z";
console.log(str > str2); // lexiograph ordering system for here all small letter is getter than capital word

// resizing an array
const myArray = [2, 3, 4, 7, 8];
myArray.length = 2;

console.log({ myArray });

// find the max Element of an array
let maxElement = [3, 5, -1, 6.7, 0, -9, -2];
console.log(Math.max.apply(null, maxElement));

// table
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}
var family = {};
family.father = new Person("John", "Smith");
family.mother = new Person("Jane", "Smith");
family.daughter = new Person("Emily", "Smith");

console.table(family);

// removing decimal partial
console.log(19.6 | 0);
console.log(919.6 | 0);

// promise, then and catch
let billPaid = true;
const pay = new Promise((resolve, reject) => {
	billPaid ? resolve("Someone have paid the bill") : reject("You have to pay your damn bill");
});
pay.then(
	(information) => {
		console.log(information);
	},
	(curse) => {
		console.log(curse);
	}
).catch((err) => {
	console.log(err);
});
// if you reject the promise with new Error then you will no longer need to add a second param as callback for 
// reject in then
const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
	if (!hasMeeting) {
		const newMeeting = {
			meetingName: "Blog",
			time: "2.3pm",
			date: "Today",
		};
		resolve(newMeeting);
	} else {
		reject(new Error("You Have a meeting"));
	}
});

meeting
	.then((result) => {
		console.log("Done: ", result);
	})
	.catch((err) => {
		console.error("You already have a meeting.", err);
	});

// substitute of .map
const dog = [
	{ name: "Rio", age: 2 },
	{ name: "Mac", age: 2 },
	{ name: "Blu", age: 3 },
];

const dogsNames = Array.from(dog, ({ name }) => name);
// const dogsNames = dogs.map(({ name }) => name);
console.log(dogsNames);
// return Rio, Mac, Blu

console.assert(typeof useless == "undefined", "Error loading user.");

// upload images
const profilePicCng = document.getElementById("profilePicsFile");
profilePicCng.addEventListener("change", function () {
	let file = document.getElementById("profilePicsFile").files[0];
	let preview = document.getElementById("profilePics");
	let reader = new FileReader();

	reader.onloadend = function () {
		preview.src = reader.result;
	};

	if (file) {
		reader.readAsDataURL(file);
	} else {
		preview.src = "/images/default.jpg";
	}
});

// object related methods
let user = {
	name: "Minhaz",
	age: 21,
	email: "minhaz@gmail.com",
	phone: "01232323232",
};

console.log(Object.values(user));
console.log(Object.entries(user));

// creating an object from another existing object without mutable problem
let obj2 = Object.entries({}, user);

obj2.name = "Sharif";
console.log(user, obj2);

// copy an array with spread operator
let arr = [1, 23, 45];
let arr2 = [...arr];
arr2[2] = 900;

console.log(arr2, arr);

// copy an array with Array object
let arr3 = [1, 23, 45];

let arr4 = Array.from(arr3);
arr4[2] = 900;

console.log(arr4, arr3);

// array methods
let arrMethod = [3, 43, 4, 7, 63, 17, 89, 34, 6];

let ne = arrMethod.reduce((prev, curr) => {
	return Math.max(prev, curr);
});
console.log(ne);
// find and findIndex
let newArr = arrMethod.find(function (value) {
	return value === 89;
});
let newArr2 = arrMethod.findIndex(function (value) {
	return value === 89;
});
console.log(newArr2);

// filter only the integer number
let mainArr = [3, 5, 6.7, 0, "rahim", true];

let filteredArr = mainArr.filter(function (value) {
	return typeof value === "number" && (value % parseInt(value) === 0);
});
console.log(filteredArr);

// find the summantion of all elements in an arry;
let arr0 = [3, 5, -1, 6.7, 0, -9, -2];
let sumElement = arr0.reduce((prev, curr) => {
	return prev + curr;
}, 0);
console.log(sumElement);

// sorting an object by the age property
const personObj = [
	{
		name: "Minhaz",
		age: 21,
	},
	{
		name: "Mz-xl",
		age: 300,
	},
	{
		name: "T-78",
		age: 129,
	},
];

let dsArr = personObj.sort((a, b) => {
	if (a.age > b.age) {
		return -1;
	} else if (a.age < b.age) {
		return 1;
	} else {
		return 0;
	}
});

console.log(dsArr);

// Usage of local Storage
localStorage.setItem("user", "Sharif md minhaz");
const value = localStorage.getItem("user");
console.log(value);

localStorage.setItem("user", "Sharif md minhazur rahman rabbi");
localStorage.removeItem("username");

// usages of session storage
sessionStorage.setItem("exam", "only 4 days");
sessionStorage.removeItem("exam");

const countries = ["bangladesh", "india", "pakistan", "nepal"];
sessionStorage.setItem("countries", JSON.stringify(countries));

const allCountry = sessionStorage.getItem("countries");
console.log(JSON.parse(allCountry));

const userInfo = {
	name: "minhaz",
	age: 21,
	email: "minhaz@gmail.com",
};

sessionStorage.setItem("userDetails", JSON.stringify(userInfo));
console.log("user details ", JSON.parse(sessionStorage.getItem("userDetails")));

// usages of cookies
document.cookie = "username=minhaz; expires=Thu, 01 Jan 2070 00:00:00 GMT";
console.log("username is: ", (document.cookie));

// get the max value of an array with Math.max.apply(null, 1,2,3) also it's equivalent to Math.max(1,2,3)
let ranArr = [3, 03, 3, 5, 12, 67];
function getMaxValue(arr) {
	return Math.max.apply(null, arr);
}

console.log(getMaxValue(ranArr));

// every elements is odd so it will return true
let dArr = [3, 9, 7, 3, 1, 5];

console.log(
	dArr.every(function (value) {
		return value % 2 === 1;
	})
);

// simple recursive function example 
function demo(n) {
	if (n > 0) {
		console.log(`Iteration is irritating...`);
		demo(n - 1);
	} else return 0;
}
demo(10);

// currying function example
function currying(num1) {
	return function (num2) {
		return function (num3) {
			return num1 + num2 + num3;
		};
	};
}

console.log(currying(12)(4)(31));

// Enums in javascript with the object freeze method
const GAME_STATES = Object.freeze({
	NOT_STARTED: "Not started",
	PLAYING: "Playing",
	FINISHED: "Finished",
});

let gameState = GAME_STATES.NOT_STARTED;
// start the game
GAME_STATES.PLAYING = "Nothing";
gameState = GAME_STATES.PLAYING;

console.log(gameState);