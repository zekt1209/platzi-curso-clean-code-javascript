const age = 23;

function printAge() {
    console.log(age);
}

function mainApp() {
    const age = 21;
    console.log('Age from mainApp: ' + age);
    printAge();
}



mainApp();

