// //Bai 1
// let str_input = "data";
// let str_output = "";
// for (let i = str_input.length - 1; i >= 0; i--) {
//     str_output += str_input[i];
// }
// console.log(str_output);

// //Bai 2
// let str_input_2 = "this is Test";
// let res = str_input_2.toLowerCase().split(' ');
// for (let i = 0; i < res.length; i++) {
//     res[i] = res[i].charAt(0).toUpperCase() + res[i].substring(1);
// }
// res = res.join(' ');
// console.log(res);

// //Bai 3
// let Arr3 = [1, 2, 3, 3, 4, 5, 4, 4, 4, 5, 5];
// let ArrRes = [];
// ArrRes.push(Arr3[0]);
// for (let i = 1; i < Arr3.length; i++) {
//     let ok = true;
//     for (let j = 0; j < ArrRes.length; j++) {
//         if (ArrRes[j] == Arr3[i]) {
//             ok = false;
//         }
//     }
//     if (ok) {
//         ArrRes.push(Arr3[i]);
//     }
// }
// console.log(ArrRes);

// //Bai 4
// let employee = [{
//         id: 1,
//         name: "Mr A",
//         age: 24,
//         salary: 7,
//         position: "dev",
//     },
//     {
//         id: 2,
//         name: "Mr B",
//         age: 25,
//         salary: 8,
//         position: "dev",
//     },
//     {
//         id: 3,
//         name: "Mr C",
//         age: 30,
//         salary: 10,
//         position: "boss",
//     }
// ];
// while (1) {
//     let userCommand = prompt("Nhap vao mot thao tac C/R/U/D/E:")
//     if (userCommand == 'C') {
//         let obj = {};
//         obj['id'] = employee.length + 1;
//         obj["name"] = prompt('Nhap ten');
//         obj["age"] = Number(prompt('Nhap tuoi'));
//         obj["salary"] = Number(prompt('Nhap luong'));
//         obj["position"] = prompt('Nhap vi tri');
//         employee.push(obj);
//         console.table(obj);
//     } else if (userCommand == 'R') {
//         console.table(employee);
//     } else if (userCommand == 'U') {
//         let employeeID = prompt('Nhap vao ID muon sua');
//         let found = employee.findIndex(element => element.id == employeeID);
//         if (found == -1) {
//             console.log('Khong ton tai');
//         } else {
//             employee[found].name = prompt('Nhap ten');
//             console.table(employee[found]);
//         }
//     } else if (userCommand == 'D') {
//         let employeeID = prompt('Nhap vao ID muon xoa');
//         let found = employee.findIndex(element => element.id == employeeID);
//         if (found == -1) {
//             console.log('Khong ton tai');
//         } else {
//             employee.splice(found, 1);
//         }
//     } else {
//         break;
//     }
// }

// // //Bai 5
// let input5 = prompt(`Nhap vao ngay thang nam`);
// let a5 = input5.split('/');
// if (a5[1] == 2 && a5[2] % 4 == 0 && (a5[0] >= 1 && a5[0] <= 29)) {
//     console.log(nextDay(a5, 29));
// } else if (a5[1] == 2 && a5[2] % 4 != 0 && (a5[0] >= 1 && a5[0] <= 28)) {
//     console.log(nextDay(a5, 28));
// } else if ((a5[0] >= 1 && a5[0] <= 31) && (a5[1] == 1 || a5[1] == 3 || a5[1] == 5 || a5[1] == 8 || a5[1] == 10 || a5[1] == 12)) {
//     console.log(nextDay(a5, 31));
// } else if ((a5[0] >= 1 && a5[0] <= 30) && (a5[1] == 4 || a5[1] == 6 || a5[1] == 9 || a5[1] == 11)) {
//     console.log(nextDay(a5, 30));
// } else {
//     console.log('Khong hop le');
// }

// function nextDay(a5, lastDay) {
//     if (a5[1] == 12 && a5[0] == 31) {
//         a5[0] = 1;
//         a5[1] = 1;
//         a5[2] = Number(a5[2]) + 1;
//     } else if (a5[0] == lastDay) {
//         a5[0] = 1;
//         a5[1] = Number(a5[1]) + 1;
//     } else {
//         a5[0] = Number(a5[0]) + 1;
//     }
//     let res = a5.join('/');
//     return (res);
// }


let day = prompt("Ngày:");
let month = prompt("Tháng:");
let year = prompt("Năm:");

function ktNgayThangNam(ngay, thang, nam) {
    let date = new Date(nam, thang - 1, ngay);
    if (date.getFullYear() == nam && date.getMonth() + 1 == thang && date.getDate() == ngay) {
        alert(`Ngày ${day}/${month}/${year} là ngày hợp lệ`);
    } else {
        alert(`Ngày ${day}/${month}/${year} là ngày không hợp lệ`);
    }
}
console.log(ktNgayThangNam(day, month, year))