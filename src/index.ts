import _ from 'lodash';
import './globalStyles.scss';
import Hobby from '../src/typescript/Hobby.class'
import Navbar from './typescript/navbar';
import createHobbySlide from './typescript/hobbySlide';

document.querySelector('nav').appendChild(Navbar());

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.mobile-nav-links');
const logo = document.querySelector('.nav-logo');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('mobile-nav-links--active');
  logo.classList.toggle('nav-logo--hide');
}

hamburger.addEventListener('click', handleClick);

const myHobbies = [];
myHobbies.push(new Hobby('Technologia', 'Fascynuje mnie nowoczesna technologia i jej dynamiczny rozwój. W wolnym czasie śledzę nowinki ze świata IT, motoryzacji czy Game Dev\'u', 'https://cdn.pixabay.com/photo/2017/10/05/08/20/technology-2818664_960_720.jpg'));
myHobbies.push(new Hobby('Sport', 'Fascynuje mnie nowoczesna technologia i jej dynamiczny rozwój. W wolnym czasie śledzę nowinki ze świata IT, motoryzacji czy Game Dev\'u', 'https://cdn.pixabay.com/photo/2014/10/14/20/24/soccer-488700_960_720.jpg'));
myHobbies.push(new Hobby('Kitesurfing', 'Fascynuje mnie nowoczesna technologia i jej dynamiczny rozwój. W wolnym czasie śledzę nowinki ze świata IT, motoryzacji czy Game Dev\'u', 'https://cdn.pixabay.com/photo/2020/08/18/06/06/extreme-5497194_960_720.jpg'));

const slides = document.querySelector('.hobbies__slides');

const myHobbiesSlides = myHobbies.map((hobby) => createHobbySlide(hobby));

const first = <HTMLDivElement> myHobbiesSlides[0].cloneNode(true);
const last = <HTMLDivElement> myHobbiesSlides[myHobbiesSlides.length - 1].cloneNode(true);

myHobbiesSlides.push(first);
myHobbiesSlides.unshift(last);

myHobbiesSlides[0].id = 'lastClone';

myHobbiesSlides[myHobbiesSlides.length - 1].id = 'firstClone';

slides && myHobbiesSlides.forEach((slide) => slides.appendChild(slide));