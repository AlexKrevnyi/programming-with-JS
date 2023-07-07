//FreeCodeCamp

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























