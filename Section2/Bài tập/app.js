//Cau1
// console.log('Cau 1');
// //1a
// console.log('1a');
// for (let i = 0; i < 7; i++) {
//     console.log(i);
// }
// //1b
// console.log('1b');
// let n1b = Number(prompt('Enter a number?'));
// for (let i = 0; i < n1b; i++)
// console.log(i);
//1c
// console.log('1c');
// let n1c = Number(prompt('Enter n'));
// for (let i = 3; i < n1c; i++)
//     console.log(i);
// //1d
// console.log('1d');
// let n1d = Number(prompt('Enter n'));
// let c1d = Number(prompt('Enter c'));
// for (let i = c1d; i < n1d; i++)
//     console.log(i);
// //1e
// console.log('1e');
// let n1e = Number(prompt('Enter n'));
// let c1e = Number(prompt('Enter c'));
// for (let i = c1e; i < n1e; i += 3)
//     console.log(i);
// //1f
// console.log('1e');
// let n1f = Number(prompt('Enter n'));
// let c1f = Number(prompt('Enter c'));
// let s = Number(prompt('Enter s'));
// for (let i = c1f; i < n1f; i += s)
//     console.log(i);

// //Cau2
// console.log('Cau 2');
// let n2 = Number(prompt('Enter a number'));
// let fact = 1;
// for (let i = 2; i <= n2; i++)
//     fact *= i;
// alert(`The factorial of ${n2} is ${fact}`);

// //Cau 3
// console.log('Cau 3');
// let nc3 = Number(prompt('How old are you?'));
// if (nc3 <= 14)
//     alert('You are not old enough to view this content');
// else
//     alert('Enjoy!');

// //Cau 4
// console.log('Cau 4');
// let nc4 = Number(prompt('Enter a number'));
// if (nc4 >= 4.5)
//     alert('Higher half of 9');
// else
//     alert('Lower half of 9');

// // Cau 5
// console.log('Cau 5');
// let nc51 = Number(prompt('n='));
// let x = Number(prompt('x='));
// if (x >= nc51 / 2)
//     alert(`${x} is higher half of ${nc51}`);
// else
//     alert(`${x} is lower half of ${nc51}`);

// //Cau 6
// console.log('Cau 6');
// let x6 = Number(prompt('x='));
// if (x6 % 2 == 0)
//     alert(`${x6} is an even number`);
// else
//     alert(`${x6} is an odd number`);

// //Cau 7
// console.log('Cau 7');
// //7a
// console.log('7a');
// for (let i = 0; i < 3; i++)
//     console.log('L');
// for (let i = 0; i < 3; i++)
//     console.log('H');

// //7b
// console.log('7b');
// let nc7b = Number(prompt("Enter the total number of L's and H's?"));
// for (let i = 0; i < nc7b / 2; i++)
//     console.log('L');
// if (nc7b % 2 != 0) {
//     for (let i = nc7b / 2 + 1; i < nc7b; i++)
//         console.log('H');
// } else {
//     for (let i = nc7b / 2; i < nc7b; i++)
//         console.log('H');
// }

// //7c
// console.log('7c');
// for (let i = 0; i < 8 / 2; i++) {
//     console.log(0);
//     console.log(1);
// }

// //7d
// console.log('7d');
// let nc8 = Number(prompt("Enter total number of 1's and 0's"))
// for (let i = 0; i < nc8; i++) {
//     if (i % 2 == 0)
//         console.log(0);
//     else
//         console.log(1);
// }

// //Cau 8
// console.log('Cau 8');
// let yourWeight = Number(prompt('Your weight in kg?'));
// let yourHeight = Number(prompt('Your height in cm?')) / 100;
// let BMI = yourWeight / (yourHeight * yourHeight);
// BMI = BMI.toFixed(1);
// alert(`Your BMI is ${BMI}`);
// if (BMI < 16)
//     alert('You are severely underweight');
// else if (BMI >= 16 && BMI < 18.5)
//     alert('You are underweight');
// else if (BMI >= 18.5 && BMI < 25)
//     alert('You are normal');
// else if (BMI >= 25 && BMI < 30)
//     alert('You are overweight');
// else
//     alert('You are obese');