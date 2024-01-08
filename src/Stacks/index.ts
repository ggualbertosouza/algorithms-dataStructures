// Stacks | Pilhas

interface IStack<T> {
  // Onde vamos armazenar os dados, famoso Storage
  stack: T[];

  // Capacidade máxima de elementos que podem ser armazenados
  capacity: number;

  // Inserir elemento, apenas 1 por vez
  insert(element: T): object;

  // Remove elemento
  remove(): void;

  // Limpa toda a pilha
  clear(): void;

  // Retorna o elemento do topo da pilha
  peek(): T;

  // Retorna o tamanho da pilha
  size(): number;
}

class Stack<T> implements IStack<T> {
  stack: T[];
  capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.stack = [];
  }

  insert(element: T): object {
    if (this.size() >= this.capacity) {
      return {
        message: "Capacidade máxima, não foi possível inserir novo elemento.",
      };
    }

    this.stack.push(element);
    return {
      message: "Inserido com sucesso.",
    };
  }

  remove(): void {
    this.stack.pop();
  }

  clear(): void {
    this.stack = [];
  }

  peek(): T {
    return this.stack[this.size() - 1];
  }

  size(): number {
    return this.stack.length;
  }
}
