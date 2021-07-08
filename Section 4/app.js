// let seat = '5';
// let car = {
//     name: "BMW",
//     year: '2020',
// };
// car.color = "black";
// console.log(car.back);
// // console.table(car);
// // console.log(car.name);
// for (let property in car) {
//     console.log(car[property]);

// }


// EX2
// Cho người dùng nhập vào chữ cái: C/R/U/D

// - C: Cho người dùng nhập vào tên và tuổi, thêm vào danh sách theo dạng obj
// => in ra để kiếm tra dưới dạng table

// - R: In ra toàn bộ phần tử trong obj

// - U: Cho người dùng nhập vào ID muốn update, sau đó tìm kiếm trong mảng"
//     + Nếu có: Cho nhập vào tên và sử dụng lại
//     + Nếu không: In ra không tồn tại

// - D: Tương tự như Update:
// + Nếu có: Xóa user by id
// + Nếu không: in ra user not found
let user = [{
        id: 1,
        name: "Future",
        age: 20,
    },
    {
        id: 2,
        name: "Academy",
        age: 20,
    },
];
while (1) {
    let userCommand = prompt("Nhap vao mot thao tac C/R/U/D/E:")
    if (userCommand == 'C') {
        let obj = {};
        obj['id'] = user.length + 1;
        obj["name"] = prompt('Nhap ten');
        obj["age"] = Number(prompt('Nhap tuoi'));
        user.push(obj);
        console.table(obj);
    } else if (userCommand == 'R') {
        console.table(user);
    } else if (userCommand == 'U') {
        let userID = prompt('Nhap vao ID muon sua');
        let found = user.findIndex(element => element.id == userID);
        if (found == -1) {
            console.log('Khong ton tai');
        } else {
            user[found].name = prompt('Nhap ten');
            console.table(user[found]);
        }
    } else if (userCommand == 'D') {
        let userID = prompt('Nhap vao ID muon xoa');
        let found = user.findIndex(element => element.id == userID);
        if (found == -1) {
            console.log('Khong ton tai');
        } else {
            user.splice(found, 1);
        }
    } else {
        break;
    }
}