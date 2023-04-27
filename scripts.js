console.log(2 + 2);
console.log("Hello, World");
console.log(1 + 2 + 3 + 5 + 10);
console.log(35 - 20);
console.log(8/2)
console.log(3 > 2);
console.log(2 > 3);
console.log(10 == 10);
console.log(10 == 9);

var score = "8";
console.log("mid-level skills:", 0 < score && score < 10);
var timeRemaining = "0";

var energy = "10";
console.log("Game over:", timeRemaining == 0 || energy == 0 );


//04.21.2023

var age = 25;
if (age >= 65) {
	console.log('You get your income from your pension');
}
else if (65 > age && age >= 18) {
	console.log('Each month you get salary');
}

else if (age < 18) {
	console.log('You get an alowance');
}
else {
	console.log('The value of the age variable is not numerical');

}

///Second exercise

var day = 'Friday';

switch(day) {
	case 'Monday':
		console.log("Walking a dog");
		break;
	case 'Tuesday':
		console.log("Go to the beach");
		break;
	case 'Wednesday':
		console.log("Wash my car");
		break;
	case 'Thursday':
		console.log("Drink some coffee");
		break;
	case 'Friday':
		console.log("Go to the shopping");
		break;	
	case 'Saturday':
		console.log("Clean my house");
		break;
	case 'Sunday':
		console.log("Buy a new book");
		break;
	default: 
	console.log("There is no such day");						
}	



///////Exersice: Repetitive tasks with loops

//Task 1

for (var i = 1; i <= 5; i++) {
	console.log(i);	
}
console.log('Counting completed');

//Task 2

for (var i = 5; i >= 1; i--) {
	console.log(i);
}

console.log('Countdown completed');

//Task 3

var i = 1;
while (i <= 5) {
	console.log(i);
	i++;
}

console.log('Counting completed');


//Task 4
var i = 5;
while (i > 0) {
	console.log(i);
	i = i -1;
}

console.log('Countdown completed');


//Task 5

var i = 2018;
while (i <= 2022) {
	console.log(i);
	i++;
}
console.log('Counting completed');


//Nested loops

for (var year = 2023; year < 2025; year++) {
	console.log(year);
	for (var month = 6; month < 9; month++) {
		console.log('.......', month);
	}
}

//Exercise working with conditionals and loops
//Task 1
for (var i = 1; i < 11; i++) {
	if (i == 1) {
		console.log('Gold Medal');
	}
	else if (i == 2) {
		console.log('Silver Medal');
	}
	else if (i == 3) {
		console.log('Bronze Medal');
	}
	else {
		console.log(i);
	}
}

//Task 2

for (var i = 1; i < 11; i++) {

switch(i) {
case 1:
	console.log('Gold Medal');
	break;
case 2:
	console.log('Silver Medal');
	break;	
case 3:
	console.log('Bronze Medal');
	break;
default:
console.log(i);	
}
}

   
 var i = 3;
  var j = 5;

  if(i == 3 && j < 5) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }

  //Week 2. Functions

var colors = ['red', 'green', 'blue', 'orange', 'black', 'yellow', 'pink'];

function listArrayItems(arr) {
	for (var i = 0;  i < arr.length; i++) {
		if (arr[i] == 'red') {
			console.l;
		}
		console.log(i, arr[i]);
	}
}

listArrayItems(colors);

//Week 2. Practice with functions

function letterFinder(word, match) {
	for (i = 0; i < word.length; i++) {
		if (word[i] == match) {
			console.log('Found the', match, 'at', i);
		} else {
			console.log('---No match found at', i);
		}
	}
}

letterFinder("test", "t");




