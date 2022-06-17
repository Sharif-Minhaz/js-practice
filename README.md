# Javascripts Important Notes
1. Getting hexa value and octal value 

```js
let hex = 0xff;
let oct = 0367;
console.log(hex, oct); // ans: 255 247
```
2. Lexiograph ordering system for here all small letter is getter than capital word

```js
let str = "a";
let str2 = "Z";
console.log(str > str2); // true
```

3. Resizing an array

```js
const myArray = [2, 3, 4, 7, 8];
myArray.length = 2;
console.log({ myArray }); // { myArray: [ 2, 3 ] }
```

4. Find the max Element of an array

```js
let maxElement = [3, 5, -1, 6.7, 0, -9, -2];
console.log(Math.max.apply(null, maxElement)); // 6.7
```

5. Print inputs as a table

```js
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}
let family = {};
family.father = new Person("John", "Smith");
family.mother = new Person("Jane", "Smith");
family.daughter = new Person("Emily", "Smith");

console.table(family);
```

6. Remove decimal partition

```js
console.log(19.6 | 0); // 19
console.log(919.6 | 0); // 919
```

7. Promise, then and catch

```js
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
```

8. Substitute of .map()

```js
const dog = [
	{ name: "Rio", age: 2 },
	{ name: "Mac", age: 2 },
	{ name: "Blu", age: 3 },
];

const dogsNames = Array.from(dog, ({ name }) => name);
// const dogsNames = dogs.map(({ name }) => name);
console.log(dogsNames);
// return Rio, Mac, Blu
```

9. Assertion in javascript

```js
console.assert(typeof user == "", "Error loading user.");
```

10. Upload images with new FileReader()

```js
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
```

11. Object related methods (values(), entries())

```js
let user = {
	name: "Minhaz",
	age: 21,
	email: "minhaz@gmail.com",
	phone: "01232323232",
};

console.log(Object.values(user)); // [ 'Minhaz', 21, 'minhaz@gmail.com', '01232323232' ]
console.log(Object.entries(user)); // return a 2d array [[ 'name', 'Minhaz' ],[ 'age', 21 ],[ 'email', 'minhaz@gmail.com' ],[ 'phone', '01232323232' ]]

```

12. Copy an object from another in immutable way

```js
let user = {
	name: "Minhaz",
};

let user2 = Object.entries({}, user);

user2.name = "Sharif";
console.log(user.name, user2.name); // Minhaz Sharif
```

13. Copy an array from another in immutable way (spread operator)

```js
let arr = [1, 23, 45];
let arr2 = [...arr];
arr2[2] = 900;

console.log(arr2, arr); // [1, 23, 45] [1, 23, 900]
```

14. Copy an array from another in immutable way

```js
let arr3 = [1, 23, 45];

let arr4 = Array.from(arr3);
arr4[2] = 900;

console.log(arr4, arr3); // [1, 23, 45] [1, 23, 900]
```

15. Find the maximum value from an array

```js
let numbers = [3, 43, 4, 7, 63, 17, 89, 34, 6];

let maxValue = numbers.reduce((prev, curr) => {
	return Math.max(prev, curr);
});
console.log(maxValue); // 89
```

16. Find element and thier index

```js
let numbers = [3, 43, 4, 7, 63, 17, 89, 34, 6];

let findNum = numbers.find(function (value) {
	return value === 89;
});
console.log(findNum); // 89

let findIndex = numbers.findIndex(function (value) {
	return value === 89;
});
console.log(findIndex); // 6
```

17.

```js
```

18.

```js
```

19.

```js
```

20.

```js
```

21.

```js
```

22.

```js
```

23.

```js
```

24.

```js
```

25.

```js
```
26.

```js
```

27.

```js
```

28.

```js
```

29.

```js
```

30.

```js
```

31.

```js
```

32.

```js
```

33.

```js
```

34.

```js
```

35.

```js
```

36.

```js
```

37.

```js
```

38.

```js
```

39.

```js
```

40.

```js
```

41.

```js
```

