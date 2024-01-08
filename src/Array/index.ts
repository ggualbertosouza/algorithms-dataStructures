// Interface dos métodos utilizados
interface Array<T> {
  insert(num: T): void;
  remove(): void;
  removeUndefined(arr: number[]): number[];
}

// Como funciona Array e seus métodos

// Inicializando um Array
const arr1: number[] = new Array();
const arr2: number[] = [];

// Array que usaremos para manipular
const arr: number[] = [1, 2, 3, 4, 5];

/*
    Cada elemento do array possui um índice, inicinado por 0
    0: 1, 1: 2, 2: 3, 3: 4, 4: 5
 */

// Acessar elemento do array
console.log("Acessando segundo elemento: ", arr[1]);

// Inserindo elemento no início do array, criaremos o método "insert"
// movemos todos os elementos para direita liberando espaço no índice 0, onde incluiremos o novo item
Array.prototype.insert = function (num: number) {
  for (let i = this.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = num;
};

arr.insert(0);
arr.unshift(-1); // Método padrão do javascript

// Removendo elemento do início do array
Array.prototype.remove = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
};

arr.remove();
console.log(arr);

// Precisamos retirar o undefined que fica no array, que está ocupando o último espaço que ficou vago
Array.prototype.removeUndefined = function (arr) {
  const newArr: number[] = [];
  for (let i = 0; i < this.length; i++) {
    if (arr[i] != undefined) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const newArr = arr.removeUndefined(arr);
console.log(newArr);

newArr.shift(); // Método padrão javascript
console.log(newArr);

// Inserindo elemento no final do array
newArr[newArr.length] = 6;
newArr.push(7); // Método padrão javascript
console.log(newArr);

newArr.pop(); // Removendo elemento no final do array
