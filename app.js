//FreeCodeCamp
/*
const title = document.querySelector('#main-heading');

title.style.color = 'red';

console.log(title);


// Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');


//Adding Elements

ul.append(li);

//Modyfiing the text

const firstListItem = document.querySelector('.list-items');

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

li.innerText = 'X-men';

li.style.fontSize = '2rem';

//Modyfing Attributes and Classes

li.setAttribute('id', 'list-items');
li.setAttribute('class', 'list-items');
li.removeAttribute('id');

const baza = document.querySelector('#main-heading');

console.log(baza.getAttribute('id'));

li.classList.add('baza');

console.log(li.classList.contains('baza'));

//Remove Elements

li.remove();


// Parent Node Traversal

let ul = document.querySelector('ul');

console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

const html = document.documentElement;

console.log(html.parentNode);
console.log(html.parentElement);



// Child Node Traversal

let ul = document.querySelector('ul');

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = 'red';



let ul = document.querySelector('ul');

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);



// Sibling Node Traversal

let ul = document.querySelector('ul');
const div = document.querySelector('div');

console.log(div.childNodes);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);




// Event Listeners

// element.addEventListener("click", function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
	alert('I also love JavaScript')
};

buttonTwo.addEventListener("click", alertBtn);

// Mouseover

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
	newBackgroundColor.style.backgroundColor = 'blue';
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);



// Reveal Event

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
	if(hiddenContent.classList.contains('reveal-btn')) {
		hiddenContent.classList.remove('reveal-btn')
	} else {
		hiddenContent.classList.add('reveal-btn')
	}
}

revealBtn.addEventListener('click', revealContent);

*/

// Event Propagation

window.addEventListener("click", function() {
	console.log('Window');
}, true)





























