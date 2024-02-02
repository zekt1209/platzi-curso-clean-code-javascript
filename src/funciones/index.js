// Declaracion de funciones
function getResults() {
    console.log('results');
    return 'Results'
}

getResults() //> Return results

// Expresion de funciones
const getResults2 = () => {
    console.log('results2');
    return 'results';
}

getResults2() //> Return results


// *** Spread Operator

// Toma los argumentos que vengan sin importar la cantidad y los mete en un array
function add (...args) {
    const array = [];
    const object = {};

    console.log(args); //> [ 1, 2, 3, 4, 5 ]
}

add(1, 2, 3, 4, 5)

