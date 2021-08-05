const form = document.getElementById("todo-form");
const ul = document.getElementById('list');
form.onsubmit = function(e) {
    e.preventDefault();
    console.log(form.todo.value);
    if (form.todo.value) {

        let li = `                
        <li class="list-item">
        <p class="list-content">${form.todo.value}</p>
        <button class="btn btn-danger">Remove</button>
        </li> `;
        ul.innerHTML += li;


        // const li = document.createElement('li');
        // li.classList.add("list-item");
        // const button = document.createElement('button');
        // button.classList.add("btn");
        // button.classList.add("btn-danger");
        // button.innerHTML = "Remove";

        // const p = document.createElement("p");
        // p.classList.add("list-content");
        // p.innerHTML = form.todo.value;

        // li.appendChild(p);
        // li.appendChild(button);

        // button.onclick = function() {
        //     button.parentElement.remove();
        // };

        // li.onclick = function() {
        //     li.classList.toggle("checked");
        // };

        // ul.appendChild(li);
        form.todo.value = "";
    } else
        alert('FAIL');
}

//C1: Gan su kien tu thi duoc tao ra
//C2: Su dung event object va uy quyen su kien
//event bubbling

//event.target

ul.onclick = function(e) {
    if (e.target.classList.contains("btn-danger")) {
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains("list-item")) {
        e.target.classList.toggle("checked");
        e.target.children[0].classList.toggle("checked");
    }
}