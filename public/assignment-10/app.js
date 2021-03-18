// Chapter 1 Task 1 ====================
// alert('Hello World');

// Chapter 1 Task 2 ====================
// alert('Error! Enter a valid password.');

// Chapter 1 Task 3 ====================
// alert('Welcome to JS Land... \n Happy Coding!');

// Chapter 1 Task 4 ====================
// alert('Welcome to JS Land');
// alert('Happy Coding!');

// Chapter 1 Task 4 ====================
// console.log("Hello... I can run JS through my web browser's console");

// Chapter 1 Task 5 ====================
// alert("This is existing project");

// Chapter 2 Task 1 ====================
// var username;

// Chapter 2 Task 2 ====================
// var username = 'Talha Akhter';

// Chapter 2 Task 3 ====================
// var message = "Hello World";
// alert(message);

// Chapter 2 Task 4 ====================
// var username = 'Talha Akhter';
// var age = '15 years old';
// var job = 'Certified Mobile Application Development';
// alert(username);
// alert(age);
// alert(job);

// Chapter 2 Task 5 ====================
// var string = 'PIZZA';
// alert(string.substring(0, 5) + '\n' + string.substring(0, 4) + '\n' + string.substring(0, 3) + '\n' + string.substring(0, 2) + '\n' + string.substring(0, 1));

// Chapter 2 Task 6 ====================
// var email = 'talhaakhter01@gmail.com';
// alert('My email address is ' + email);

// Chapter 2 Task 7 ====================
// var book = 'A smarter way to learn JavaScript';
// alert('I am trying to learn a book ' + book);

// Chapter 2 Task 8 ====================
// document.write('Yah! I can write HTML content with JavaScript<br>');

// Chapter 2 Task 9 ====================
// alert('▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬');

// Chapter 3 Task 1 ====================
// var age = 15;
// alert('I am ' + age + ' years old');

// Chapter 3 Task 2 ====================
// var n = 14;
// alert('You have visited this site ' + age + ' times');

// Chapter 3 Task 3 ====================
// var birthYear = 1990;
// document.write('My birth year is ' + birthYear + '<br>Data type of my declared variable is ' + typeof (birthYear) + '<br>');

// Chapter 3 Task 4 ====================
// var visitor = prompt('Enter Visitor’s name');
// var title = prompt('Enter Product title');
// var quantity = prompt('Enter Quantity');
// document.write(visitor + ' ordered ' + quantity + ' ' + title + '(s) on XYZ Clothing store<br>');


// Chapter 4 Task 1 ====================
// var variable1, variable2, variable3;

// Chapter 4 Task 2 ====================
// var variable1, variable2, variable3, variable4, variable5;
// var @variable1, 23varia ble2, var, @variable4, @variable5;

// Chapter 4 Task 3 ====================
// document.write(`
// <h2>Rules for naming JS variables</h2>
// <p>Variable names can only contain numbers, $ and _. For example $my_1stVariable</p>
// <p>Variables must begin with a letter, $ or _. For example $name, _name or name</p>
// <p>Variable names are case sensitive</p>
// <p>Variable names should not be JS keywords</p>`);



// Chapter 5 Task 1 ====================
// var a = +prompt('Enter first value');
// var b = +prompt('Enter second value');
// var c = a + b;
// document.write('sum of ' + a + ' and ' + b + ' is ' + c);

// Chapter 5 Task 2 ====================
// var a = +prompt('Enter first value');
// var b = +prompt('Enter second value');
// var c = a + b;
// document.write('sum of ' + a + ' and ' + b + ' is ' + c + '<br>');
// var c = a - b;
// document.write('subtraction of ' + a + ' and ' + b + ' is ' + c + '<br>');
// var c = a * b;
// document.write('multiplication of ' + a + ' and ' + b + ' is ' + c + '<br>');
// var c = a / b;
// document.write('division of ' + a + ' and ' + b + ' is ' + c + '<br>');
// var c = a % b;
// document.write('modulus of ' + a + ' and ' + b + ' is ' + c + '<br>');

// Chapter 5 Task 3 ====================
// var number;
// document.write('<p>Value after variable declaration is: ' + number + '</p>');
// number = 5;
// document.write('<p>Initial value: 5</p>');
// number++;
// document.write('<p>Value after increment is: ' + number + '</p>');
// number = number + 7;
// document.write('<p>Value after addition is: ' + number + '</p>');
// number--;
// document.write('<p>Value after decrement is: ' + number + '</p>');
// number = number % 3;
// document.write('<p>The remainder is : ' + number + '</p>');

// Chapter 5 Task 4 ====================
// var price = +prompt("Enter ticket price")
// document.write('<p>Total cost of 5 tickets to a movie is ' + price * 5 + 'PKR</p>');

// Chapter 5 Task 5 ====================
// var table = +prompt("Enter table number");
// for (var i = 1; i <= 10; i++) {
//     document.write('<p>' + table + ' x ' + i + ' = ' + table * i + '</p>');
// }

// Chapter 5 Task 6 ====================
// var celsius = +prompt("Enter temperature in celsius");
// var fahrenheit = +prompt("Enter temperature in fahrenheit");
// document.write('<p>' + celsius + '<sup>o</sup>C is ' + ((celsius * (9 / 5)) + 32) + 'F</p>');
// document.write('<p>' + fahrenheit + '<sup>o</sup>F is ' + ((fahrenheit - 32) * (5 / 9)) + 'C</p>');

// Chapter 5 Task 7-13 ====================

// Chapter 6-9 Task 1 ====================
// var number = +prompt("Enter number");
// document.write('<h3>Result:</h3><p>The Value of a is: ' + number + '</p><p>..............................</p>');
// document.write('<br><p>The Value of ++a is: ' + ++number + '</p>');
// document.write('<p>Now the Value of a is: ' + number + '</p>');
// document.write('<br><p>The Value of a++ is: ' + number++ + '</p>');
// document.write('<p>Now the Value of a is: ' + number + '</p>');
// document.write('<br><p>The Value of --a is: ' + --number + '</p>');
// document.write('<p>Now the Value of a is: ' + number + '</p>');
// document.write('<br><p>The Value of a-- is: ' + number-- + '</p>');
// document.write('<p>Now the Value of a is: ' + number + '</p>');

// Chapter 6-9 Task 2 ====================
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// console.log(a + ' => value of a');
// console.log(b + ' => value of b');
// console.log('Equation => --a - --b + ++b + b--');
// console.log('Ans => '+(--a) + ' => pre-decrement of a');
// console.log('Ans => '+(--a - --b) + ' => pre-decrement of a - pre-decrement of b');
// console.log('Ans => '+(--a - --b + ++b) + ' => pre-decrement of a - pre-decrement of b + pre-increment of b');
// console.log('Ans => '+(--a - --b + ++b + b--) + ' => pre-decrement of a - pre-decrement of b + pre-increment of b - post-decrement of b');
// console.log(result + ' => value of result');

// Chapter 6-9 Task 3 ====================
// var user = prompt("Hello, What's your name");
// alert('Hello ' + user + ' Welcome!');

// Chapter 6-9 Task 4-6 ====================

// Chapter 9-11 Task 1 ====================
// var city = prompt("Your city");
// if (city == 'karachi') {
//     alert('Welcome to city of lights');
// } else {
//     alert('Welcome');
// }

// Chapter 9-11 Task 2 ====================
// var gender = prompt("Your gender");
// if (gender == 'male') {
//     alert('Good Morning Sir');
// } else if (gender == 'female') {
//     alert("Good Morning Ma'am");
// }
// else {
//     alert("Good Morning");
// }

// Chapter 9-11 Task 3-11 ====================

// Chapter 12-13 Task 1 ====================
// var input = prompt("Enter number or text");
// var condition = input.charCodeAt(0);
// if (condition >= 48 && condition <= 57) {
//     alert('Input starts with Number');
// }
// else if (condition >= 65 && condition <= 90) {
//     alert('Input starts with Uppercase');
// }
// else if (condition >= 97 && condition <= 122) {
//     alert('Input starts with Lowercase');
// } else {
//     alert('Input starts with Special character');
// }

// Chapter 12-13 Task 2-7 ====================

// Chapter 14-16 Task 1  ====================
// var arr = [];
// console.log('============= Chapter 14-16 Task 1');
// console.log(arr);

// Chapter 14-16 Task 2 ====================
// var arr = new Array();
// console.log('============= Chapter 14-16 Task 2');
// console.log(arr);

// Chapter 14-16 Task 3 ====================
// var arr = ['string1'];
// console.log('============= Chapter 14-16 Task 3');
// console.log(arr);

// Chapter 14-16 Task 4 ====================
// var arr = [1, 2, 3];
// console.log('============= Chapter 14-16 Task 4');
// console.log(arr);

// Chapter 14-16 Task 5 ====================
// var arr = [true, false];
// console.log('============= Chapter 14-16 Task 5');
// console.log(arr);

// Chapter 14-16 Task 6 ====================
// var arr = [1, 'two', true];
// console.log('============= Chapter 14-16 Task 6');
// console.log(arr);

// Chapter 14-16 Task 7 ====================
// var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil.', 'PhD'];
// console.log('============= Chapter 14-16 Task 7');
// console.log(qualification);

// Chapter 14-16 Task 8 ====================
// console.log('============= Chapter 14-16 Task 8');
// var students = ['Micheal', 'John', 'Tony'];

// var scores = [320, 230, 480];

// var totalMarks = 500;

// students.map((value, index) => {
//     console.log('Score of ' + value + ' is ' + scores[index] + '. Percentage: ' + (scores[index] / totalMarks) * 100 + '%');
// })

// Chapter 14-16 Task 9 ====================
// console.log('============= Chapter 14-16 Task 9');
// colors = ['red', 'blue', 'green'];
// console.log(colors);
// var ask = prompt('What color you want to add at beginning');
// colors.unshift(ask);
// console.log(colors);
// var ask = prompt('What color you want to add at end');
// colors.push(ask);
// console.log(colors);
// var ask = prompt('Type two colors separated by comma ( , ) to add at beginning in descending order');
// ask = ask.split(',');
// ask.map((value) => {
//     colors.unshift(value);
// })
// console.log(colors);
// colors.shift();
// console.log(colors);
// colors.pop();
// console.log(colors);
// var ask = prompt('Which color you want to add?');
// var index = +prompt('Which place this color needs to be added in array');
// colors.splice(index-1, 0, ask);
// console.log(colors);

// Chapter 14-16 Task 10 ====================/
// console.log('============= Chapter 14-16 Task 10');
// var studentsScore = [320,230,480,120];
// console.log(studentsScore);
// console.log(studentsScore.sort());

// Chapter 14-16 Task 11 ====================/
// console.log('============= Chapter 14-16 Task 11');
// var cities = ['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
// var selectedCities = cities.splice(2,2);
// console.log(cities);
// console.log(selectedCities);

// Chapter 14-16 Task 12 ====================/
console.log('============= Chapter 14-16 Task 12');
var arr = ['This ', ' is ', ' my ', ' cat'];
console.log(arr);
console.log(arr.join(''));

// Chapter 14-16 Task 13 ====================/
console.log('============= Chapter 14-16 Task 13');
var arr = ['Keyboard', 'Mouse', 'Printer', 'Monitor'];
var out = console.log(arr);
arr.map((index) => {
    console.log('Out: \n' + index);
    arr.unshift();
})

// Chapter 14-16 Task 14 ====================/
console.log('============= Chapter 14-16 Task 14');
var arr = ['Keyboard', 'Mouse', 'Printer', 'Monitor'];
var out = console.log(arr);
var i;
for (i = 0; i <= arr.length-1; i++) {
    console.log(arr[arr.length-1 - i]);
}

// Chapter 14-16 Task 15 ====================/
console.log('============= Chapter 14-16 Task 15');
var manufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
var out = '<label for="manufacturers">Choose a manufacturer:</label><select name="cars" id="cars">';
manufacturers.map((index) => {
    out += '<option value="' + index + '">' + index + '</option>';
})
out += '</select>';

document.write(out);
