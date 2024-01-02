var greet = 'Hello';

(
    function() {
        var greet;
        console.log(greet);
        var greet = 'Hi';
        console.log(greet);
    }
    )();
    
console.log(greet);

/* var greet = "Hello";

function saludar() {
  console.log(greet); //> undefined
  var greet = "Hi";
  console.log(greet); //> Hi
}

saludar(); // se invoca la función */