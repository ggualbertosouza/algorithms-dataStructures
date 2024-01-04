// É uma coleção de elementos que são identificados pelo seu índice, em outras palavras, armazenar dados ORDENADAMENTE

// Inicializando um Array
const array = new Array();
const array1 = [];

// =======================================
const numbers = [1, 2, 3, 4, 5];

// índices sempre começa no 0

// Adicionar elemento no fim do array
numbers.push(6);
numbers[numbers.length] = 7;

// Adicionar elemento no ínicio do array
numbers.unshift(0);
Array.prototype.inserir = function (num) {
  for (let i = this.length; i > 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = num;
};

numbers.inserir(-1);

// Remover elemento do final do array
numbers.pop();

// Remover elemento no ínicio do array
numbers.shift();
Array.prototype.retirar = function (arr) {
  const newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] != undefined) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

Array.prototype.retirarComUndefined = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
};
numbers.retirarComUndefined();
const newArr = numbers.retirar(numbers);

console.log(newArr);
