const findIndex = (items, match) => {

    for (let i = 0, total = items.length; i < total; i++)
      if (items[i] == match) {
        let res = `El item encontrado es: ${items[i]}, en la posicion: ${i}` 
        return res;
      }
     return 'No encontre nada, devuelvo -1';
  };

const array= ['a', 'b', 'c', 'd'];
console.log(findIndex(array, 'a')); // 0  (1 iteración)
console.log(findIndex(array, 'd')); // 3  (4 iteraciones)
console.log(findIndex(array, 'e')); // -1 (4 iteraciones)