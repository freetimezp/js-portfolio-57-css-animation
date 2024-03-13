let menuInside = document.querySelector(".menu-inside");
let menu = document.querySelector(".menu");

let f1Menu = document.getElementById("f1-menu");
let f2Menu = document.getElementById("f2-menu");
let f3Menu = document.getElementById("f3-menu");
let f4Menu = document.getElementById("f4-menu");

let iconM1 = document.querySelector(".icon-m1");
let iconM2 = document.querySelector(".icon-m2");
let iconM3 = document.querySelector(".icon-m3");
let iconM4 = document.querySelector(".icon-m4");

let position1 = document.querySelector(".position1");
let position2 = document.querySelector(".position2");
let position3 = document.querySelector(".position3");
let blog = document.querySelector(".blog");
let blogBg = document.querySelector(".blog-bg");

let iconOne = document.querySelector(".icon1");
let iconTwo = document.querySelector(".icon2");
let iconTree = document.querySelector(".icon3");
let iconFour = document.querySelector(".icon4");


//show icons
f1Menu.addEventListener('mouseenter', () => iconM1.style = 'transform: scale(1);');
f1Menu.addEventListener('mouseleave', () => iconM1.style = 'transform: scale(0);');

f2Menu.addEventListener('mouseenter', () => iconM2.style = 'transform: scale(1);');
f2Menu.addEventListener('mouseleave', () => iconM2.style = 'transform: scale(0);');

f3Menu.addEventListener('mouseenter', () => iconM3.style = 'transform: scale(1);');
f3Menu.addEventListener('mouseleave', () => iconM3.style = 'transform: scale(0);');

f4Menu.addEventListener('mouseenter', () => iconM4.style = 'transform: scale(1);');
f4Menu.addEventListener('mouseleave', () => iconM4.style = 'transform: scale(0);');

//toggle menu
menuInside.addEventListener('click', () => {
    menu.classList.toggle('active');
});

//slider
function Next1() {
    position1.style = 'opacity: 0; transform: translateX(-100px); z-index: -1;';
    position2.style = 'opacity: 1; transform: translateX(0px); z-index: 1;';
    position3.style = 'opacity: 0; transform: translateX(-100px); z-index: -1;';
    blog.style = 'filter: hue-rotate(45deg)';
}

function Next2() {
    position1.style = 'opacity: 0; transform: translateX(-100px); z-index: -1;';
    position2.style = 'opacity: 0; transform: translateX(-100px); z-index: -1;';
    position3.style = 'opacity: 1; transform: translateX(0px); z-index: 1;';
    blog.style = 'filter: hue-rotate(325deg)';
}

function back() {
    position1.style = 'opacity: 1; transform: translateX(0px); z-index: 1;';
    position2.style = 'opacity: 0; transform: translateX(-100px); z-index: -1;';
    position3.style = 'opacity: 0; transform: translateX(-100px); z-index: -1;';
    blog.style = 'filter: hue-rotate(115deg)';
}


//contact form
function icon1() {
    iconOne.style = 'opacity: 0;';
    iconTwo.style = 'opacity: 1;';
    iconTree.style = 'opacity: 0;';
    iconFour.style = 'opacity: 0;';
}

function icon2() {
    iconOne.style = 'opacity: 0;';
    iconTwo.style = 'opacity: 0;';
    iconTree.style = 'opacity: 1;';
    iconFour.style = 'opacity: 0;';
}

function icon3() {
    iconOne.style = 'opacity: 0;';
    iconTwo.style = 'opacity: 0;';
    iconTree.style = 'opacity: 0;';
    iconFour.style = 'opacity: 1;';
}















