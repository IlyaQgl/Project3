// header 

let headerButton = document.querySelector('#header-burger');
let headerMenu = document.querySelector('#header-menu');

headerButton.addEventListener('click', function(){
    headerMenu.style.display = (headerMenu.style.display == 'flex') ? 'none' : 'flex';
});

function getWindowWidth() {
    return window.innerWidth || document.body.clientWidth;
};

// first button
let menu = document.querySelector('#menu');
let button = document.querySelector('#button');

if (getWindowWidth() <= 1350) {
    button.addEventListener('click', function(){
        menu.style.display = (menu.style.display == 'block') ? 'none' : 'block';
    });
};

//second button
let menuSecond = document.querySelector('#menu-2');
let buttonSecond = document.querySelector('#button-2');

if (getWindowWidth() <= 1350) {
    buttonSecond.addEventListener('click', function(){
        menuSecond.style.display = (menuSecond.style.display == 'block') ? 'none' : 'block';
    });
};

//third button
let menuThird = document.querySelector('#menu-3');
let buttonThird = document.querySelector('#button-3');

if (getWindowWidth() <= 1350) {
    buttonThird.addEventListener('click', function(){
        menuThird.style.display = (menuThird.style.display == 'block') ? 'none' : 'block';
        menuThird.style.transition = '15s';

    });
};

//four button
let menuFour = document.querySelector('#menu-4');
let buttonFour = document.querySelector('#button-4');
let menuFive = document.querySelector('#menu-5')

if (getWindowWidth() <= 1350) {
    buttonFour.addEventListener('click', function(){
        menuFour.style.display = (menuFour.style.display == 'block') ? 'none' : 'block';
        menuFive.style.display = (menuFive.style.display == 'block') ? 'none' : 'block';
    });
};

