import isHobby from "./IsHobby.interface";

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

export default createHobbySlide;