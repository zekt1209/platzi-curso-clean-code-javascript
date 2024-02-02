// Codigo que se repite
const victorAverage = (90 + 50 + 70) / 3;
const marcoAverage = (80 + 90 + 70 + 80) / 4;
const angelAverage = (40 + 100) / 2;

console.log(victorAverage, marcoAverage, angelAverage);

function getAverage(...grades) {
    // console.log(grades); // -> [ 90, 50, 70 ]
    // console.log(...grades); // -> 90, 50, 70
    return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

/* function getAverage(...grades) {

    let res = 0;

    grades.forEach(element => {
        res += element;
    });

    res = res / grades.length;

    return res;
} */

const victorAverage2 = getAverage(90, 50, 70);
const marcoAverage2 = getAverage(80, 90, 70, 80);
const angelAverage2 = getAverage(40, 100);

console.log(victorAverage2, marcoAverage2, angelAverage2);
