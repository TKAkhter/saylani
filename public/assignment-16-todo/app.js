var input = document.querySelector("#add");
var btn = document.querySelector("#btn");
var list = document.querySelector("#list");

document.addEventListener("keyup", function (event) {
    if (event.code === 'Enter') {
        var editInput = document.querySelectorAll('#list input');
        if (editInput.length) {
            for (var i = 0; i < editInput.length; i++) {
                editInput[i].setAttribute('disabled', 'disabled');
            }
        }
    }
});


function addItem() {

    var txt = input.value;
    if (txt == '') {
        alert('you must write something');
    } else {
        li = document.createElement('li');
        li.innerHTML = '<input disabled value=' + txt + ' /><a href="#" onclick=editItem(this)>Edit</a><a href="#" onclick=deleteItem(this)>Delete</a>';
        // li.setAttribute('onclick', 'onclick(completeItem(this))');
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }

};

function editItem(item) {
    item.previousElementSibling.removeAttribute("disabled");
};

function deleteItem(item) {
    console.log(item.parentElement);
    item.parentElement.remove();
};
function deleteAllItem() {
    var list = document.getElementById('list');
    while (list.childElementCount != 0) {
        list.firstChild.remove();
    }
};

mdc.ripple.MDCRipple.attachTo(document.querySelector('button'));