//Cau 1
console.log(`Cau 1`);
let str1 = prompt('Nhap vao mot chuoi:');
if (str1.slice(0, 4) == 'Java')
    console.log(`Yes`);
else
    console.log(`No`);

let arr2 = [1, -10, 5, 18, -9, 5];

function findMaxDiff(arr2) {
    let res = 0;
    for (let i = 1; i < arr2.length; i++) {
        let diff = Math.abs(arr2[i] - arr2[i - 1]);
        if (diff > res) {
            res = diff;
        }
    }
    return res;
}
console.log(findMaxDiff(arr2));

//Cau 2
console.log(`Cau 2`);
let n3 = 0;

function first(arr2, n3) {
    if (n3 > arr2.length) {
        return arr2;
    } else if (n3 < 0) {
        let arrTemp = [];
        return arrTemp;
    } else if (n3 == undefined) {
        return arr2[0];
    } else {
        return arr2.slice(0, n3);
    }
}
console.log(first(arr2));

//Cau 3
let n31 = -2;
let n32 = 3;

function checkInt(number1, number2) {
    if (number1 * number2 < 0) {
        return true;
    } else {
        return false;
    }
}
console.log(checkInt(n31, n32));

//Cau 4
let n4 = 5;

function abs13(n4) {
    if (n4 > 13) {
        return (n4 - 13) * 2;
    } else {
        return (13 - n4);
    }
}
console.log(abs13(n4));

//Cau 5
let arr5 = [-1, 2, 3, 8, 9];
console.log(`Cau 5`);

function findMaxAbs(arr5) {
    if (arr5.length <= 1) {
        return 0;
    } else {
        arr5.sort(function(a, b) { return a - b });
        return arr5[arr5.length - 1] - arr5[0];
    }
}
console.log(findMaxAbs(arr5));