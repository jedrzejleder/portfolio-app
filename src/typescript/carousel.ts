import isHobby from './IsHobby.interface';
import createHobbySlide from './hobbySlide';

const slides = document.querySelector('.hobbies__slides');

fetch('http://localhost:3000/slider')
  .then((res) => res.json())
  .then((data) => {
    const url = window.location.href;
    const urlTail = url.substr(url.lastIndexOf('/') + 1);
    if (urlTail === 'hobby.html') {
      const myHobbiesSlides = data.map((hobby: isHobby) =>
        createHobbySlide(hobby)
      );
      const first = <HTMLDivElement>myHobbiesSlides[0].cloneNode(true);
      const last = <HTMLDivElement>(
        myHobbiesSlides[myHobbiesSlides.length - 1].cloneNode(true)
      );

      myHobbiesSlides.push(first);
      myHobbiesSlides.unshift(last);

      myHobbiesSlides[0].id = 'lastClone';

      myHobbiesSlides[myHobbiesSlides.length - 1].id = 'firstClone';

      myHobbiesSlides.forEach((slide: any) => slides.appendChild(slide));

      const slide = <HTMLElement>document.querySelector('.hobbies__slides');
      const hobbies = Array.from(
        document.querySelectorAll('.hobbies__slides__hobby')
      );
      const prevBtn = document.querySelector('#prevBtn');
      const nextBtn = document.querySelector('#nextBtn');

      let counter = 1;
      let size = hobbies[0].clientWidth;

      window.addEventListener('resize', () => {
        size = hobbies[0].clientWidth;
      });

      slide.style.transform = `translateX(${-size * counter}px)`;

      nextBtn.addEventListener('click', () => {
        if (counter >= hobbies.length - 1) return;
        slide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        slide.style.transform = `translateX(${-size * counter}px)`;
      });

      prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        slide.style.transition = 'transform 0.4s ease-in-out';
        counter--;
        slide.style.transform = `translateX(${-size * counter}px)`;
      });

      slide.addEventListener('transitionend', () => {
        if (hobbies[counter].id === 'lastClone') {
          slide.style.transition = 'none';
          counter = hobbies.length - 2;
          slide.style.transform = `translateX(${-size * counter}px)`;
        }

        if (hobbies[counter].id === 'firstClone') {
          slide.style.transition = 'none';
          counter = hobbies.length - counter;
          slide.style.transform = `translateX(${-size * counter}px)`;
        }
      });
    }
  });
