// JavaScript

const nav = document.querySelector('.header');
const navTop = nav.offsetTop;
const counters = document.getElementsByClassName('counter');
const endValues = [50, 80, 10, 150];
const counterDescriptions = [
  'Skillful talents',
  'Happy clients',
  'Years on the market',
  'Success stories',
];
const numbersSection = document.querySelector('.numbers');
const headerMenu = document.querySelector('.header-menu');
const burgerBtn = document.querySelector('.header-menu-btn');

//// nav color ////
function scrollHandler() {
  const scrollPos = window.pageYOffset;
  if (scrollPos > navTop) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}
//// nav color ////

//////////// numbers counter  /////////////////

function isVisible(element) {
  const rect = element.getBoundingClientRect();
  const viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function startCounting(counter, endValue) {
  let counterValue = 0;
  const intervalId = setInterval(() => {
    if (counterValue <= endValue) {
      counter.getElementsByClassName('count-value')[0].textContent =
        counterValue + ' +';
      counterValue++;
    } else {
      clearInterval(intervalId);
    }
  }, 50);
}

for (let i = 0; i < counters.length; i++) {
  counters[
    i
  ].innerHTML = `<div class="count-value">0</div><div class="counter-description">${counterDescriptions[i]}</div>`;
}

let countingStarted = false;

const counter = () => {
  if (isVisible(numbersSection) && !countingStarted) {
    countingStarted = true;
    for (let i = 0; i < counters.length; i++) {
      startCounting(counters[i], endValues[i]);
    }
  }
};

const callMultipleFunc = () => {
  scrollHandler();
  counter();
};

//////////// numbers counter  /////////////////

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('open');
  headerMenu.classList.toggle('burgerMenu');
});
window.addEventListener('scroll', callMultipleFunc);
