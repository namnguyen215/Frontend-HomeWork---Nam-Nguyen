let form = document.getElementById("todo-form");
let ul = document.getElementById("list");
let numberItems = 0;
let number = document.getElementById("number");
form.onsubmit = function(e) {
    e.preventDefault();
    let content = form.todo.value;
    if (content) {
        let li = `                        
        <li class="list-item">
            <p class="list-content">${content}</p>
            <button class="btn btn-primary">Modify</button>
            <button class="btn btn-danger ">Remove</button>
        </li>
            `;
        ul.innerHTML += li;
        numberItems++;
        number.textContent = `Your list has ${numberItems} tasks to do`;
    } else {
        alert("Please fill this form")
    }
    form.todo.value = "";
}

ul.onclick = function(e) {
    console.log(e.target);
    if (e.target.classList.contains("btn-danger")) {
        e.target.parentElement.remove();
        numberItems--;
        if (numberItems == 0) {
            number.textContent = `Congatulation! You've done all tasks!`;
        } else {
            number.textContent = `Your list has ${numberItems} tasks to do`;
        }
    }
    if (e.target.classList.contains("btn-primary")) {
        let newValue = prompt("Insert new value:");
        e.target.parentElement.children[0].textContent = newValue;
    }
    if (e.target.classList.contains("list-item")) {
        e.target.classList.toggle("checked");
    }
    if (e.target.classList.contains("list-content")) {
        e.target.parentElement.classList.toggle("checked");
    }
}