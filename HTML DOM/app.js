let click = document.getElementById('header');
let dem = 1;
header.onclick = function() {
    let ul = document.getElementById('list');
    let li = document.createElement('li');
    li.innerHTML = `<li>text ${dem++}</li>`;
    ul.appendChild(li);
}