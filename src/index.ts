import './globalStyles.scss';
import myHobbies from './assets/hobbies';
import Navbar from './typescript/navbar';
import createHobbySlide from './typescript/hobbySlide';

document.querySelector('nav').appendChild(Navbar());

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.mobile-nav-links');
const logo = document.querySelector('.nav-logo');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('mobile-nav-links--active');
  logo.classList.toggle('nav-logo--hide');
});

const slides = document.querySelector('.hobbies__slides');

const myHobbiesSlides = myHobbies.map(hobby => createHobbySlide(hobby));

const first = <HTMLDivElement> myHobbiesSlides[0].cloneNode(true);
const last = <HTMLDivElement> myHobbiesSlides[myHobbiesSlides.length - 1].cloneNode(true);

myHobbiesSlides.push(first);
myHobbiesSlides.unshift(last);

myHobbiesSlides[0].id = 'lastClone';

myHobbiesSlides[myHobbiesSlides.length - 1].id = 'firstClone';

slides && myHobbiesSlides.forEach(slide => slides.appendChild(slide));