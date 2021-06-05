var input = document.querySelector("#add");
var btn = document.querySelector("#btn");
var list = document.querySelector("#list");

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        document.getElementById("btn").click();
    }
});


function addItem() {

    var txt = input.value;
    if (txt == '') {
        alert('you must write something');
    } else {
        li = document.createElement('li');
        li.innerHTML = txt;
        li.setAttribute('onclick', 'onclick(completeItem(this))');
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }

};

function completeItem(item) {
    item.classList.toggle('checked');
};