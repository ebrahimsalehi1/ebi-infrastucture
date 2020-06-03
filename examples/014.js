
const person ={
    name: 'Max',
    age: 29,
    green:function(){
        console.log("Hi, I am "+this.name);        
    }
}

console.log(person);
person.green();

const hobbies = ['Sports','Cooking']
for(var hobby of hobbies){
    console.log(hobby);      
}
hobbies.push('Programming');

console.log(hobbies.map(hobby=>
    hobby+' , '
));

const copiedArray = {...hobbies};
console.log(copiedArray);

const toArray= (...args)=>  {
    return args;
}

console.log("toArray:",toArray(1,2,3,4,5));
