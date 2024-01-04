# Data Structures

Repositório criado para demonstrar como funciona as estruturas de dados no javascript.

## Array

O array é uma coleção de elementos ORDENADA que possuem um índice como identificador. Dentro do código você irá encontrar 
os seguintes tópicos:
- Como inicializar um array
- Como adicionar um item no final de um array.
- Como adicionar um item no ínicio de um array.
- Como remover um item do ínicio de um array.
- Como remover um item no final de  um array.

### Problema de desempenho de um array
Um array por possuir uma ordenação, prejudica o desemepenho comparado a outras estruturas, tendo em sua grande maioria 
uma ordem de **crescimento Linear - O(n)**
Para adicionar um item no ínicio de um array é necessário reIndexar todas suas propriedades para direita, liberando o 
índice 0 para receber o novo dado. Em outras palavras, iterar sobre o array, movendo o índice **'i'** para **'i + 1'.**
