var myName = 'Joshua Graham';
// This var is my name
const states = 50;
// This const states the number of states in the USA
var add = (5 + 4);
// This var adds 5 and 4 together

function sayHello() {
    alert('Hello World');
}
sayHello();

function checkAge(name, age) {
    if (age < 21) {
    return console.log("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let vegies = ['broccoli', 'spinach', 'potatoes'];

for(var i = 0; i < vegies.length; i++) {
    console.log(vegies[i]);
};

let pet = {
    'name': 'Mitzi',
    'breed': 'Cat',
};

console.log(pet.name, pet.breed);

let mark = {
    name: 'Mark',
    age: 20,
};

let shayla = {
    name: 'Shayla',
    age: 28,
};

let dylan = {
    name: 'Dylan',
    age: 25,
};

let chad = {
    name: 'Chad',
    age: 17,
};

let anna = {
    name: 'Anna',
    age: 16,
};


let people = [mark, shayla, dylan, chad, anna];

for(var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
};

function getLength(anyWord) {
    console.log(anyWord.length);
    let myWordLength = anyWord.length;
    if(myWordLength % 2 == 00 ) {
        console.log("The world is even!");
    } else {
        console.log("The world is an odd place!");
    }
}
getLength("Hello World");