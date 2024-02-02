// ----------------------------- Antes de ES6

    // Constructor
function Person(name) {
    this.name = name;
}
    // Metodo
Person.prototype.greet = function() {
    console.log('Hello, I am ' + this.name);
}

var person = new Person('Victor');
console.log(person.name);
person.greet();

    // Clase Hija
function Developer(name) {
    this.name = name;
}
    // Herencia
Developer.prototype = Object.create(Person.prototype);

Developer.prototype.writeCode = function(coffee) {
    if (coffee) console.log('I am working in a new feature');
    else console.log('I need coffee, please!');
};

var dev = new Developer('Vic');
dev.greet();
dev.writeCode(coffee = true);


// ----------------------------- ES6
class Dog {
    // Constructor
    constructor(name) {
        this.name = name;
    }
    // Metodo
    greet() {
        console.log('Hello, I am a pet, and my name is: ' + this.name);
    }
}

    // Clase Hija
    // Herencia
class Cat extends Dog {
    constructor(name) {
        super(name)
    }

    drinkMilk(milk) {
        milk ? console.log('Drinking Milk ... :)') : console.log('Milk is over, give milk, please!');
    }
}

const dog = new Dog('Chiquis');
console.log(dog.name);
dog.greet();

const cat = new Cat('Michi');
console.log(cat.name);
cat.greet();
cat.drinkMilk(milk = false);