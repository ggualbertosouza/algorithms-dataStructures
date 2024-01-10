/* 
    Traduzida como "Fila", é uma estrutura de dado muito parecida com as pilhas. Utiliza o princípio FIFO
    (first in, first out). 
*/

export class Queue<T> {
  private count: number;
  private lowestCount: number;
  private queue: Record<number, T> = {};

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.queue = {};
  }

  // Get all values of the queue
  get() {
    return this.queue;
  }

  // enqueue
  add(element: T) {
    this.queue[this.count] = element;
    this.count++;
  }

  // dequeue
  remove(): T {
    const element = this.queue[this.lowestCount];
    delete this.queue[this.lowestCount];
    this.lowestCount++;
    return element;
  }

  // size
  size(): number {
    return this.count;
  }

  // peek
  peek(): T {
    return this.queue[this.lowestCount];
  }
}
