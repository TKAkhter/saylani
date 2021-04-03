// // var per = +prompt("Enter your percentage: ");
// // if (per >= 80 && per <= 100) {
// //   alert("A+ grade");
// // } else if (per >= 70 && per < 80) {
// //   alert("A grade");
// // } else if (per >= 60 && per < 70) {
// //   alert("B grade");
// // } else if (per >= 50 && per < 60) {
// //   alert("D grade");
// // } else if (per >= 40 && per < 50) {
// //   alert("E grade");
// // } else if (per >= 0 && per < 40) {
// //   alert("Fail");
// // } else {
// //   alert("Invalid percentage");
// // }

// // var a = ['alpha', 'beta', 'gamma', 'theta', 'phi', 55, true, 'epsilon'];

// // // a.map((value, index) => {
// // //     // document.write(index +'<br>'+ a);
// // //     console.log(index + ' => ' + value);
// // // })
// // console.log(a);
// // console.log('======================= Array Push');
// // a.push('meu');
// // a[3] = 'neu';
// // console.log(a);
// // a.pop();
// // console.log('======================= Array Pop');
// // console.log(a);
// // // a.map((value, index) => {
// // //     // document.write(index +'<br>'+ a);
// // //     console.log(index + ' => ' + value);
// // // })

// // a.shift();
// // console.log('======================= Array Shift');
// // console.log(a);

// // a.unshift('unshiftValue');
// // console.log('======================= Array Unshift');
// // console.log(a);

// // a.splice(2, 3, "newValue1", 'newValue2', 'newValue3');
// // console.log('======================= Array Splice');
// // console.log(a);

// // Objective 1
// var arr = [];
// console.log ('============= Objective 1');
// console.log(arr);

// // Objective 2
// var arr = new Array();
// console.log ('============= Objective 2');
// console.log(arr);

// // Objective 3
// var arr = ['string1'];
// console.log ('============= Objective 3');
// console.log(arr);

// // Objective 4
// var arr = [1, 2, 3];
// console.log ('============= Objective 4');
// console.log(arr);

// // Objective 5
// var arr = [true, false];
// console.log ('============= Objective 5');
// console.log(arr);

// // Objective 6
// var arr = [1, 'two', true];
// console.log ('============= Objective 6');
// console.log(arr);

// // Objective 7
// var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil.', 'PhD'];
// console.log ('============= Objective 7');
// console.log(qualification);

// // Objective 8
// console.log ('============= Objective 8');
// var students = ['Micheal', 'John', 'Tony'];

// var scores = [320, 230, 480];

// var totalMarks = 500;

// students.map((value, index) => {
//     console.log('Score of ' + value + ' is ' + scores[index] + '. Percentage: ' + (scores[index] / totalMarks) * 100 + '%');
// })

// // Objective 9
// console.log ('============= Objective 9');
// colors = ['red','blue','green'];
// var ask = prompt('What color you want to add at beginning');
// colors.unshift(ask);
// console.log(colors);

// var table = +prompt("Enter table number");
// for (var i = 1; i <= 10; i++) {
//     document.write('<p>' + table + ' x ' + i + ' = ' + table * i + '</p>');
// }