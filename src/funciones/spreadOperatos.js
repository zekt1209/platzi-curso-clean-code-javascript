const array1 = [1,2,3];
const array2 = array1; // Si se modifica el array2, va a afectar al array1
// Hace una copia del arreglo, y si se modifica el array3 ya sera independiente del array1
const array3 = [...array1];
array3.push(4,5);
console.log(array3)
console.log(array1)

const object1 = {
    name: 'Vic',
    age: 23,
    description: 'An amazing guy',
}

const object2 = {...object1};
object2.height = '1.74'
console.log(object2)
console.log(object1)


const hello = 'Hello \
World';
console.log(hello);

const obj1 = {
    nombre: 'Victor',
    edad: 23,
}

const obj2 = {}

obj2.nombre = obj1.nombre;
obj2.nombre = 'newName'
console.log(obj2)
console.log(obj1)