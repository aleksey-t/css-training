const circle = document.querySelector('.circle');

setTimeout(() => {
    circle.classList.add('square');

}, 0);

setTimeout(() => {
    // circle.classList.remove('square');
    circle.classList.add('triangle');
}, 2000);

setTimeout(() => {
    circle.classList.add('star');
}, 4000);

setTimeout(() => {
    circle.classList.remove('triangle');
    circle.classList.remove('star');
}, 6000);

setTimeout(() => {
    circle.classList.remove('square');
}, 8000);


