"use strict"

/* const someObject = {
  name: "Tanya",
  age: 35
}
console.log(someObject);
console.log(someObject.name);

someObject.name = "Lily"
console.log(someObject);

const windowSize = {
  width: window.innerWidth,
  height: window.innerHeight
}
console.log(windowSize.height); */

/* const link = document.querySelector('.link');
link.addEventListener("click", clickReaction);
link.addEventListener("mouseenter", clickReaction)
link.addEventListener("mouseleave", clickReaction)
link.addEventListener("mousemove", clickReaction);
function clickReaction() {
  // code
  console.log('Click!');
}
 */
/* const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener("click", clickReaction)
  link.addEventListener("mouseenter", clickReaction)
  link.addEventListener("mouseleave", clickReaction)
  link.addEventListener("mousemove", clickReaction)
}); */
/* function clickReaction(e) {
 
console.log(e.type);
  console.log('Click!');
  console.log(e.type);
} */
//function clickReaction(e) {

/*   console.log(e.target);
  const tag = e.target.tagName;
  if(tag === "BUTTON"){
    alert('button')
  } */
//console.log('Click!');
/*   console.log(e.type) */
/* e.preventDefault(); */
/*   console.log(e.clientX);
  console.log(e.clientY);
  console.log(e.pageX);
  console.log(e.pageY);
} */


/* const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.addEventListener("click", clickReaction)
})

  function clickReaction() {
  items.classList.toogle('active');
    console.log('Click!');
}
 */


//Задача №1

/* document.addEventListener("click", documentAction)
function documentAction(e) {
  const targetElement = e.target

  if (targetElement.classList.contains('item')) {
    targetElement.classList.toggle('active');
  }
} */


//Задача №2
/* window.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  body.classList.add("not-transparent");
}); */

//   Задача №3
/* const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

header.addEventListener("mouseenter", function () {
  footer.style.backgroundColor = "red";
});

header.addEventListener("mouseleave", function () {
  footer.style.backgroundColor = "blue";
}
) */

//   Задача №4

const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1.0
}
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const item = entry.target;
      startTimer(item);
      observer.unobserve(item);
    }
  });
}

const content = document.querySelector(".item");
if (content) {
  const observer = new IntersectionObserver(callback, options);
  observer.observe(content);
}

function startTimer(element) {
  const delay = parseInt(element.dataset.delay);
  const finish = parseInt(element.dataset.finish)
  let i = 1;
  let interval = setInterval(() => {
    element.textContent = `${i}`
    i === finish ? clearInterval(interval) : null;
    ++i;
  }, delay);
}

