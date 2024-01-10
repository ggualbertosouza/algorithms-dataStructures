// Stacks | Pilhas

export class Stack<T> {
  private stack: T[];
  private total: number;

  constructor(total: number) {
    this.total = total;
    this.stack = [];
  }

  // Insere um elemento na pilha
  add(element: T): object {
    // Checa se o tamanho da pilha é maior que a capacidade
    if (this.size() >= this.total) {
      return {
        message: "Capacidade máxima, não foi possível inserir novo elemento.",
      };
    }

    // Adiciona elemento
    this.stack.push(element);
    return {
      message: "Inserido com sucesso.",
    };
  }

  // Retorna a capacidade máxima de elementos na pilha
  capacity(): number {
    return this.total;
  }

  // Remove o último elemento inserido na pilha
  remove(): void {
    this.stack.pop();
  }

  // Limpa toda a pilha
  clear(): void {
    this.stack = [];
  }

  // Retorna o último elemento inserido na pilha
  peek(): T {
    return this.stack[this.size() - 1];
  }

  // Retorna quantos elementos possuem na pilha
  size(): number {
    return this.stack.length;
  }
}
