const url = window.location.href;
const urlTail = url.substr(url.lastIndexOf('/') + 1);

if (urlTail === 'hobby.html') {
    const slide = <HTMLElement>document.querySelector('.hobbies__slides');
    const hobbies = Array.from(document.querySelectorAll('.hobbies__slides__hobby'));
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    let counter = 1;
    const size = hobbies[0].clientWidth;

    slide.style.transform = `translateX(${-size * counter}px)`


    nextBtn.addEventListener('click', () => {
        if (counter >= hobbies.length - 1) return;
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
}