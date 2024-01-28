"use strict"

/* const windowWidth = window.innerWidth;
console.log(windowWidth); */

/* let windowHeight = window.innerHeight;
console.log(windowHeight); */

/* console.log(navigator.userAgent);

if (navigator.userAgent.includes("Chrome")) {
  console.log('Браузер Хром');} */

/* console.log(navigator.userAgentData.platform);

console.log(location.href); */
//alert('Повідомлення');

/* let confirmAnswer = confirm("Запитання");
console.log(confirmAnswer); */

/* let promptAnswer = prompt("Запитання");
console.log(promptAnswer)
if (promptAnswer === null) {
  console.log('Юзер натиснув cancel');
} else if (promptAnswer) {
  console.log(`Відповідь користувача: ${promptAnswer}`);
} else {
  console.log(`Користувач не надав відповідь`);
} */

/* const htmlElement = document.documentElement;
console.log(htmlElement);

const headElement = document.head;
console.log(headElement);

const bodyElement = document.body;
console.log(bodyElement); */

/* const bodyElement = document.body;
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;
console.log(firstChild);
console.log(lastChild); */
/* 
const bodyElement = document.body;

const childNodes = bodyElement.children;
console.log(childNodes); */

/* for (let i = 0; i < childNodes.length; ++i) {
  console.log(childNodes[i]);}
 */
/* for (let childNode of childNodes) {
  console.log(childNode);
} */

/* const bodyElement = document.body;
const previousSibling = bodyElement.previousElementSibling;
console.log(previousSibling);

const headElement = document.head;
const nextSibling = headElement.nextElementSibling;
console.log(nextSibling); */

/* const liElement = document.querySelector('li')
console.log(liElement); */

/* const liElements = document.querySelectorAll('li')
console.log(liElements);

if (liElements.length) {
  // тоді працюємо...
  liElements.forEach((item, index) => {
    console.log(item);
  });
} */

/* const block = document.querySelector('.page__block')

const items = document.querySelectorAll('.page__item')
console.log(items);

if (items.length) {
  console.log('Є!');
} */

/* const liElements = document.querySelectorAll('.page__item.active');
console.log(liElements); */

/* const liElements = document.querySelectorAll('[class*="__item"]');
console.log(liElements); */

/* const someElement = document.querySelector('.page__list');
const parentElement = someElement.parentElement;
console.log(parentElement); */

/* const liElement = document.querySelector('.page__item');
const isClosest = liElement.closest('.page__item');
console.log(isClosest); */

/* const pageItems = document.querySelectorAll('.page__item'); */

/* pageItems.forEach(pageItem => {
  pageItem.innerHTML = '<span>Hello! my name is Tanya</span>';
}) */

/* const bodyElement = document.body;
console.log(bodyElement);
const htmlBody = bodyElement.innerHTML;
console.log(htmlBody); */

/* pageItems.forEach(pageItem => {
  pageItem.textContent = '<span>I am 35</span>';
}); */

/* let newObject = document.createElement('div');
console.log(newObject);
newObject.innerHTML = `<span>Hi!</span>`;
console.log(newObject);

const wrapper = document.querySelector('.wrapper');
wrapper.before(newObject);
wrapper.after(newObject);
wrapper.prepend(newObject);
wrapper.append(newObject); */

/* const wrapper = document.querySelector('.wrapper'); */
/* wrapper.insertAdjacentHTML("beforebegin", `
	<div class="block">
		<div class="block__item">hello, my darling</div>
	</div>
`); */

/* let text = `
	<div class="block">
		<div class="block__item">123</div>
	</div>
`
wrapper.insertAdjacentText("afterend", text); */

/* let list = document.querySelector('.page__list');
wrapper.insertAdjacentElement("afterbegin", list); */

/* const wrapper = document.querySelector('.wrapper')
const cloneWrapper = wrapper.cloneNode(true)
console.log(cloneWrapper) */
/* 
const list = document.querySelector('.page__list');
list.remove(); */

/* const list = document.querySelector('.page__list');
list.className = 'some-class'; */

//const list = document.querySelector('.page__list');
//list.classList.add('list--red');
//list.classList.remove('list--red');
//list.classList.toggle('active');
/* const text = document.querySelector('.page__text');
text.classList.contains('text');
 */
/* if (list.classList.contains('active')) {
  console.log('Клас active Є!');
}
 */

/* const list = document.querySelector('.page__list');
const listStyle = getComputedStyle(list);
console.log(listStyle);
const listFontSize = parseFloat(listStyle.fontSize);
console.log(listFontSize);

if (listFontSize > 50) {
  list.style.fontSize = '30px';
} */

//const list = document.querySelector('#list');
//Перевіряємо наявність атрибута.
//console.log(list.hasAttribute('class'));
//Получаємо значення атрибута.
//console.log(list.getAttribute('class'));
//Установлюємо значення атрибута.
//list.setAttribute('class', 'active');
//Удаляємо атрибут.
//list.removeAttribute('class');

/* const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth);
console.log(windowHeight);  */

/* const mainElement = document.body;
const windowClientWidth = mainElement.clientWidth;
const windowClientHeight = mainElement.clientHeight;
console.log(windowClientWidth);
console.log(windowClientHeight); */

/* const windowScrollTop = window.scrollY;
const windowScrollLeft = window.scrollX;
console.log(windowScrollTop);
console.log(windowScrollLeft); */

//Задача №1

/* const bodyElement = document.body;
console.log(bodyElement); */

//Задача №2

/* const bodyElement = document.body;
console.log(bodyElement);
let newList = document.createElement('ul');
console.log(newList);
bodyElement.prepend(newList);

for (let i = 0; i<= 10; i++){
  let item = document.createElement(`li`);
  item.innerHTML = `пункт ${i}`;
  newList.append(item);
} */

//Задача №3

/* const bodyElement = document.body;
console.log(bodyElement);
bodyElement.classList.add('loaded');
console.log(bodyElement.classList.contains('loaded'));
const text = document.querySelector(`.loaded`)
console.log(text);
text.style.color = `green`; */

//Задача №4

/*   for (const item of document.querySelectorAll('.item'))
  item.classList.add('active');
  const active = document.querySelectorAll('.active');
  active.forEach((el, i) => {
    el.textContent = 'Елемент №'+ ++i;
  }) */

  //Задача №5

/* const text = document.querySelector('.text');
function scrollToBlock(element) {
  element.scrollIntoView({
    block: "end",
    behavior: "smooth"
  });
}
scrollToBlock(text); */

//Задача №6

let link = document.querySelector('.link')
let number = link.dataset.number;
console.log(number);
if (number < 200){
 link.style.color = `green`;
}
