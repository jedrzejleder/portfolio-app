import _ from 'lodash';
import './globalStyles.scss';
import Hobby from '../src/typescript/Hobby.class'
import isHobby from '../src/typescript/IsHobby.interface'
import Navbar from './typescript/navbar';

document.querySelector('nav').appendChild(Navbar());

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.mobile-nav-links');
const logo = document.querySelector('.nav-logo');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('mobile-nav-links--active');
  logo.classList.toggle('hide');
}

hamburger.addEventListener('click', handleClick);

const myHobbies = [];
myHobbies.push(new Hobby('Technologia', 'Fascynuje mnie nowoczesna technologia i jej dynamiczny rozwój. W wolnym czasie śledzę nowinki ze świata IT, motoryzacji czy Game Dev\'u', 'https://cdn.pixabay.com/photo/2017/10/05/08/20/technology-2818664_960_720.jpg'));
myHobbies.push(new Hobby('Sport', 'Fascynuje mnie nowoczesna technologia i jej dynamiczny rozwój. W wolnym czasie śledzę nowinki ze świata IT, motoryzacji czy Game Dev\'u', 'https://cdn.pixabay.com/photo/2014/10/14/20/24/soccer-488700_960_720.jpg'));
myHobbies.push(new Hobby('Kitesurfing', 'Fascynuje mnie nowoczesna technologia i jej dynamiczny rozwój. W wolnym czasie śledzę nowinki ze świata IT, motoryzacji czy Game Dev\'u', 'https://cdn.pixabay.com/photo/2020/08/18/06/06/extreme-5497194_960_720.jpg'));

const slides = document.querySelector('.hobbies__slides');

const createHobbySlide = ({ name, desc, pic }: isHobby) => {
    const slide = document.createElement('div');
    slide.classList.add('hobbies__slides__hobby');
    slide.style.backgroundImage = `url(${pic})`

    slide.innerHTML = `
        <div class="hobbies__slides__hobby__content">
            <h2>${name}</h2>
            <p>${desc}</p>
        </div>
    `;

    return slide;
}

const myHobbiesSlides = myHobbies.map((hobby) => createHobbySlide(hobby));

const first = <HTMLDivElement> myHobbiesSlides[0].cloneNode(true);
const last = <HTMLDivElement> myHobbiesSlides[myHobbiesSlides.length - 1].cloneNode(true);

myHobbiesSlides.push(first);
myHobbiesSlides.unshift(last);

myHobbiesSlides[0].id = 'lastClone';

myHobbiesSlides[myHobbiesSlides.length - 1].id = 'firstClone';

myHobbiesSlides.map((slide) => slides.appendChild(slide));


///////////////////////////////////////////////////////////////////////////
const slide = <HTMLElement>document.querySelector('.hobbies__slides');
const hobbies = Array.from(document.querySelectorAll('.hobbies__slides__hobby'));
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = hobbies[0].clientWidth;

slide.style.transform = `translateX(${-size * counter}px)`


nextBtn.addEventListener('click', () => {
    if(counter >= hobbies.length -1) return;
    slide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    slide.style.transform = `translateX(${-size * counter}px)`
})

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    slide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    slide.style.transform = `translateX(${-size * counter}px)`
})

slide.addEventListener('transitionend', () => {
    if (hobbies[counter].id === 'lastClone') {
        slide.style.transition = 'none';
        counter = hobbies.length - 2;
        slide.style.transform = `translateX(${-size * counter}px)`
    }

    if (hobbies[counter].id === 'firstClone') {
        slide.style.transition = 'none';
        counter = hobbies.length - counter;
        slide.style.transform = `translateX(${-size * counter}px)`
    }
})