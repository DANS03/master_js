'use strict'
console.log('wlecome from BOM');

//DOM -Browser Object Model

console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(screen.width);
console.log(screen.height);

console.log(window.location.href);
console.log(window.location);

function redirect(url) {
    window.location.href = url;
}

function openWindow(url) {
    window.open(url);
}