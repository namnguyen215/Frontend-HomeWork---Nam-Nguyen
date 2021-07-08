//Cau 1
console.log("Cau 1");
let s1 = prompt("Enter a sequence of numbers, separated by commas");
let a1 = s1.split(",");
let sum1 = 0;
for (let i = 0; i < a1.length; i++) {
    sum1 += Number(a1[i]);
}
alert(`The sum of them is ${sum1}`);

//Cau 2
console.log("Cau 2");
let s2 = prompt("Enter a sequence of numbers, separated by commas");
let a2 = s2.split(",");
let minNum = Number(a2[0]);
for (let i = 1; i < a2.length; i++) {
    if (Number(a2[i]) < minNum) {
        minNum = Number(a2[i]);
    }
}
alert(`The smallest number is ${minNum}`);

//Cau 3
console.log('Cau 3');
const a3 = [3, 4, 6, -9, 10, -88, 2];
let n3 = Number(prompt('Enter a number'));
let numberIndex = a3.indexOf(n3);
if (numberIndex == -1) {
    alert(`${n3} is NOT found un my array`);
} else {
    alert(`Index of ${n3} is ${numberIndex}`);
}

//Cau 4
console.log("Cau 4");
//4.1
console.log("4.1");
let a4 = [5, 7, 300, 90, 24, 50, 75];
let s41 = "";
a4.forEach(function(value) {
    s41 += value + ' ';
})
console.log("Hello, my name is Phuong Nam and here is my sheep sizes:")
console.log(s41);

//4.2
console.log('4.2');
let maxSize = Math.max(...a4);
console.log(`Now my biggest sheep has size ${maxSize}, let's shave it`);

//4.3
console.log(`4.3`);
let maxSizeIndex = a4.indexOf(maxSize);
a4[maxSizeIndex] = 8;
let s43 = "";
a4.forEach(function(value) {
    s43 += value + ' ';
})
console.log('After shearing, here is my flock')
console.log(s43);

//4.4
console.log('4.4');
for (let i = 0; i < a4.length; i++) {
    a4[i] += 50;
}
let s44 = "";
a4.forEach(function(value) {
    s44 += value + ' ';
})
console.log('MONTH 1')
console.log('One month hass passed, my sheeps have grown, here are their sizes');
console.log(s44);
let maxSize44 = Math.max(...a4);
console.log(`Now my biggest sheep has size ${maxSize44}, let's shave it`);
let maxSize44Index = a4.indexOf(maxSize44);
a4[maxSize44Index] = 8;
console.log('After shearing, here is my flock')
let s442 = "";
a4.forEach(function(value) {
    s442 += value + ' ';
})
console.log(s442);

//4.5
console.log('4.5');
for (let monthIndex = 2; monthIndex <= 4; monthIndex++) {
    console.log(`MONTH ${monthIndex}`);
    console.log('One month hass passed, my sheeps have grown, here are their sizes');
    for (let i = 0; i < a4.length; i++) {
        a4[i] += 50;
    }
    let s45 = "";
    a4.forEach(function(value) {
        s45 += value + ' ';
    });
    console.log(s45);
    let maxSize45 = Math.max(...a4);
    console.log(`Now my biggest sheep has size ${maxSize45}, let's shave it`);
    let maxSize45Index = a4.indexOf(maxSize45);
    a4[maxSize45Index] = 8;
    console.log('After shearing, here is my flock')
    let s452 = "";
    a4.forEach(function(value) {
        s452 += value + ' ';
    })
    console.log(s452);

}

//4.6
console.log('4.6');
let sum46 = 0;
a4.forEach(function(value) {
    sum46 += value;
});
console.log(`My flock has size in total: ${sum46}`);
console.log(`I would get ${sum46} * 2$ = ${sum46*2}`);

//Cau 5
console.log("Cau 5");
let s5 = prompt("Enter a sequence of names");
let a5 = s5.split(",");
let a52 = [];
for (let i = 0; i < a5.length; i++) {
    a52[i] = '<' + a5[i] + '>';
}
let s52 = a52.toString();
alert(`${s5} => ${s52}`);

//Cau 6
console.log("Cau 6");
let s6 = prompt("Enter a sequence of numbers");
let a6 = s6.split(",");
let a62 = [];
for (let i = 0; i < a6.length; i++) {
    if (a6[i] % 2 == 1) {
        a62.push(a6[i]);
    }
}
let s62 = a62.toString();
alert(`${s6} => ${s62}`);