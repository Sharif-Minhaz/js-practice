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
