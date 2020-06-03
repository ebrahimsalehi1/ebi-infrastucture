const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

const summerizeUser = (userName,userAge,userHobby)=>{
    return (
        'Name is '+
        name+
        ', age is '+
        userAge+
        ' and hobbies: '+
        userHobby
    );
}

console.log(summerizeUser(name,age,hasHobbies));

const add = (a,b)=> a+b;

console.log('a+b',add(10,20));

const addRandom = () => Math.random();
console.log('addRandom',addRandom());

