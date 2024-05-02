let add = document.querySelector('.add');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');
let del = document.querySelector('.delete');

add.addEventListener('click', function() {
    let listItem = document.createElement('li');
    listItem.innerText = inp.value.trim();
    if (listItem.innerText == "") {
        alert("Provide Input");
        return;
    }

    if (listItem.innerText != "") {
        ul.appendChild(listItem);
        inp.value = "";  
    }

    let delBtn = document.createElement('button');
    delBtn.classList.add('delete');
    delBtn.innerText = 'x';
    listItem.appendChild(delBtn);
});

ul.addEventListener('click', function(event) {
    if (event.target.nodeName = 'BUTTON') {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});