
const person = {
    name: 'Max',
    age: 29,
    green:function(){
        console.log("Hi, I am "+this.name);        
    }
}

const printName = ({name,age}) => {
    console.log(name,age);
    
}

//printName(person);

const {name,age} = person;
console.log(name,age);

const hobbies = ['Sports','Cooking'];
const [hobby1,hobby2] = hobbies;
console.log(hobby2);
