// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const list = document.createElement('ul');

// add three list items with the words "one, two three" in them
// put that list into the above wrapper
const listItem1 = document.createElement('li');
const listItem2 = listItem1.cloneNode();
const listItem3 = listItem1.cloneNode();

listItem1.textContent = 'one';
listItem2.textContent = 'two';
listItem3.textContent = 'three';

div.insertAdjacentElement('beforebegin', list);
list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://picsum.photos/200';

// set the width to 250
img.width = '250';

// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = 'Cute Puppy';

// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const strHtml = `
  <div class="text">
    <p>1</p>
    <p>2</p>
  </div>
`;

list.insertAdjacentHTML('beforebegin', strHtml);

// add a class to the second paragraph called warning
// remove the first paragraph
// strHtml.remove();
const first = document.querySelectorAll('p')[0];
first.classList.add('warning');
const second = first.nextElementSibling;
second.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const playerCardHtml = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class="delete" type="button">delete</button>
    </div>
  `;
  return playerCardHtml;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// Have that function make 4 cards
let cardsHtml = generatePlayerCard('p1', 1, 1);
cardsHtml += generatePlayerCard('p2', 2, 2);
cardsHtml += generatePlayerCard('p3', 3, 3);
cardsHtml += generatePlayerCard('p4', 4, 4);

cards.innerHTML = cardsHtml;
div.insertAdjacentElement('beforebegin', cards);

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');

// make out delete function
function deleteCard(event) {
  const buttonClicked = event.currentTarget;
  buttonClicked.closest('.playerCard').remove();
}

// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
