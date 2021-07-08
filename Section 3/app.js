//TO DO LIST
// 1.Todo list app
// Cho người dùng nhập vào 4 thao tác là chữ (C/R/U/D):
// C - Nhập nội dung todo list mới và push vào cuối mảng => In ra màn hình toàn bộ todo list hiện tại
// R - In ra toàn bộ todo list hiện tại
// U - Hỏi người dùng index của todo list muốn update => Cho người dùng nhập vào nội dung update 
// => In ra màn hình toàn bộ todo list hiện tại

// D - Hỏi người dùng index của todo list muốn delete => In ra màn hình toàn bộ todo list hiện tại
// 2. Cho app chạy vô hạn
// Bấm E (exit) để dừng chương trình
// Else in ra invalid command
let todoList = [];
let exit = true;
let n;
while (exit) {
    let userCommand = prompt("Nhap vao mot thao tac C/R/U/D/E:")
    userCommand = userCommand.toUpperCase();
    if (userCommand == 'C') {
        n = prompt("Nhap so luong cong viec:");
        for (let i = 0; i < n; i++) {
            let x = prompt(`Nhap cong viec thu ${i+1}`);
            todoList.push(x);
        }
        for (let i = 0; i < n; i++) {
            console.log(`Viec ${i+1}: ${todoList[i]}`);
        }
    } else if (userCommand == 'R') {
        console.log("Danh sach cac cong viec");
        for (let i = 0; i < n; i++) {
            console.log(`Viec ${i+1}: ${todoList[i]}`);
        }
    } else if (userCommand == 'U') {
        let updateIndex = prompt("Nhap vao index cua cong viec can update:");
        let updateValue = prompt("Nhap vao value cua cong viec can update:");
        todoList[updateIndex - 1] = updateValue;
        console.log("Danh sach cac cong viec");
        for (let i = 0; i < n; i++) {
            console.log(`Viec ${i+1}: ${todoList[i]}`);
        }
    } else if (userCommand == 'D') {
        let deleteIndex = prompt("Nhap vao index cua cong viec muon xoa di");
        todoList.splice(deleteIndex - 1, 1);
        console.log("Danh sach cac cong viec");
        for (let i = 0; i < n - 1; i++) {
            console.log(`Viec ${i+1}: ${todoList[i]}`);
        }
    } else if (userCommand == 'E') {
        exit = false;
    } else alert(`Invalid command`);
}