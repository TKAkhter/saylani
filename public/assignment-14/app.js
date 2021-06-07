var mainContent = document.querySelectorAll('#main-content p');
console.log('========= Main Content ========');
for (var i = 0; i < mainContent.length; i++) {
	console.log(mainContent[i]);
}
console.log('========= Main Content ========');

console.log('========= Render Content ========');
var renderContent = document.querySelectorAll('.render');
for (var i = 0; i < mainContent.length; i++) {
	console.log(mainContent[i]);
}
console.log('========= Render Content ========');

var inputField = document.getElementById('first-name');
inputField.value = 'John';

var inputField = document.getElementById('last-name');
inputField.value = 'Doe';

var inputField = document.getElementById('email');
inputField.value = 'john.doe@test.com';

console.log(document.getElementById('form-content').nodeType);

console.log(document.getElementById('lastName').nodeType);

console.log(document.getElementById('lastName').childNodes[0].nodeType);

document.getElementById('lastName').innerHTML = 'Last Name: Bank Updated';

console.log(document.getElementById('main-content').firstChild);

console.log(document.getElementById('main-content').lastChild);

console.log(document.getElementById('lastName').nextSibling);

console.log(document.getElementById('lastName').previousSibling);

console.log(document.getElementById('email').parentNode);

console.log(document.getElementById('email').parentNode.nodeType);