import './globalStyles.scss';
import Navbar from './typescript/navbar';

document.querySelector('nav').appendChild(Navbar());

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.mobile-nav-links');
const logo = document.querySelector('.nav-logo');
const aboutMeText = document.querySelector('.container__right__text');

fetch('http://localhost:3000/aboutMe')
.then(res => res.json())
.then(data => {
  aboutMeText.innerHTML = data.text;
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('mobile-nav-links--active');
  logo.classList.toggle('nav-logo--hide');
});
