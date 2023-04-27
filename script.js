/* Animate gear configs */

const gearIconDiv = document.getElementById('gear-icon-div');
const gearIcon = document.getElementById('gear-icon');

gearIconDiv.addEventListener('click', () => {
    gearIcon.classList.toggle('animate');
});