const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

toggle.addEventListener('click', ()=>{
    const html = document.querySelector('html');
    if (html.classList.contains('dark')){
        html.classList.remove('dark');
        toggle.innerText = 'Dark mode';
    } else {
        html.classList.add('dark');
        toggle.innerText = 'Light mode';
    }
})

function setTime(){
    const time = new Date();
    const date = time.getDate();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours > 12 ? 'PM' : 'AM';

    const angel = 6;
    const angleSecNeedle  = seconds * angel;
    const angleMinNeedle  = minutes * angel;
    const angleHourNeedle  = hoursForClock * angel * 5;

    const firstSec = firsElem(seconds);
    const firstMin = firsElem(minutes);

    secondEl.style.transform = `translate(-50%, -100%) rotate(${angleSecNeedle}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${angleMinNeedle}deg)`;
    hourEl.style.transform = `translate(-50%, -100%) rotate(${angleHourNeedle}deg)`;
    timeEl.innerHTML = `${hoursForClock}:${firstMin + minutes}:${firstSec + seconds} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setInterval(setTime, 1000)

function firsElem(el){
    if(el.toString().split('').length < 2) {
        // this part of code for learning
        // const secArr = el.toString ().split ('');
        // secArr.unshift ('0');
        // return secArr[0];
        return '0';
    } else {
        return '';
    }
}
