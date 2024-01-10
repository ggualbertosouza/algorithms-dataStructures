# Data Structures

Repositório criado para demonstrar como funciona as estruturas de dados no javascript.

## Instalação

Instale o projeto com npm, yarn ou pnpm

Clone o repositório e rode no console,

Instale as dependências do projeto:
```bash
  npm install | yarn add | pnpm i
```

**Para testar as classes que deseja, 
crie uma nova instância no arquivo test.ts na raíz do projeto e divirta-se.**

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

## Stack
É uma coleção de elementos ORDENADOS em formato de pilha(stack). <br/>
Imagine realmente uma pilha de pratos, livros,...
onde o prato que colocar por cima sempre vai ser o primeiro a ser retirado, daí surge "LIFO" (last in, first out). <br/>
Dê uma olhada no código e entenda como funciona para inserir, remover, olhar, limpar e
ver o tamanho de uma pilha, lembrando que aqui no código, nossa pilha possui tamanho máximo.

## Queue
É uma coleção de elemente Ordenados, onde só a uma saída e uma entrada. 
Como uma fila de um banco, uma pessoa entra e aguarda a sua vez, o atendimento é por ordem de chegada, uma nova pessoa entrará
na parte de trás da fila. As filas possuem algumas variações, que estará nas próximas estruturas, olhe o código e confirme que 
entendeu bem como funciona uma fila.

## Deque
É uma fila com duas saídas e duas entradas. Como em uma fila de cinema, você pode comprar o ingresso e sair da fila e voltar 
rapidamente para pedir uma informação e sair de novo. Esse tipo de estrutura permite a execução de outras funcionalidades,
como detectar se uma palavra é um palíndromo.
