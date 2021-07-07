import _ from 'lodash';
import './globalStyles.scss';
import Hobby from '../src/typescript/Hobby.class'
import isHobby from '../src/typescript/IsHobby.interface'

const hobbiesContainer = document.querySelector('.hobbies');

const hobby1 = new Hobby('jedzenie', 'jedzenie jedzenia', 45);
const printObj = (obj: isHobby) => {
    if(hobbiesContainer) {
        hobbiesContainer.innerHTML = `
    <h1>${obj.name}</h1>
    <p>${obj.desc}</p>
    <p>${obj.time}</p>
    `
    } else{
        console.log('xd');
    }
}