// Antes de ES6

    // Constructor
function Person(name) {
    this.name = name;
}
    // Metodo
Person.prototype.greet = function() {
    return 'Hello, I am ' + this.name;
}

var person = new Person('Victor');
console.log(person.name);
console.log(person.greet());

// ES6
class Dog {
    // Constructor
    constructor(dog) {
        this.name = dog;
    }
    // Metodo
    greet() {
        return 'Hello, I am a dog, and my name is: ' + this.name;
    }
}

const dog = new Dog('Chiquis');
console.log(dog.name);
console.log(dog.greet());

