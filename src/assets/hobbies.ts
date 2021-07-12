import Hobby from "../typescript/Hobby.class";
import isHobby from "../typescript/IsHobby.interface";

const myHobbies: isHobby[] = [];
myHobbies.push(new Hobby('Technologia', 'Fascynuje mnie nowoczesna technologia i jej dynamiczny rozwój. W wolnym czasie śledzę nowinki ze świata IT, motoryzacji czy Game Dev\'u', 'https://cdn.pixabay.com/photo/2017/10/05/08/20/technology-2818664_960_720.jpg'));
myHobbies.push(new Hobby('Sport', 'Fascynuje mnie nowoczesna technologia i jej dynamiczny rozwój. W wolnym czasie śledzę nowinki ze świata IT, motoryzacji czy Game Dev\'u', 'https://cdn.pixabay.com/photo/2014/10/14/20/24/soccer-488700_960_720.jpg'));
myHobbies.push(new Hobby('Kitesurfing', 'Fascynuje mnie nowoczesna technologia i jej dynamiczny rozwój. W wolnym czasie śledzę nowinki ze świata IT, motoryzacji czy Game Dev\'u', 'https://cdn.pixabay.com/photo/2020/08/18/06/06/extreme-5497194_960_720.jpg'));

export default myHobbies;