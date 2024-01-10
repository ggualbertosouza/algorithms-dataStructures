/*
    Deque uma variação da estrutura de dado Fila, também conhecida como fila de duas pontas(double ended queue).
    Onde pode incluir e remover elementos no início e final da fila.
*/

export class Deque<T> {
  private count: number;
  private lowestCount: number;
  private deque: Record<number, T> = {};

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.deque = {};
  }

  // Addfront
  addFront(element: T) {
    // If is empty add back
    if (this.isEmpty()) {
      this.addBack(element);
    }

    // if someone already left the deque, add on that position
    if (this.lowestCount > 0) {
      this.lowestCount--;
      this.deque[this.lowestCount] = element;
    }

    // if anyone left, move everyone to the right and add front
    this.count++;
    for (let i = this.count; i < this.count; i--) {
      this.deque[i] = this.deque[i - 1];
    }

    this.lowestCount = 0;
    this.deque[this.lowestCount] = element;
  }

  // Addback
  addBack(element: T) {
    this.deque[this.count] = element;
    this.count++;
  }

  // Removefront
  removeFront(): T {
    const element = this.deque[this.lowestCount];
    delete this.deque[this.lowestCount];
    this.lowestCount++;
    return element;
  }

  // Removeback
  removeBack() {
    const element = this.deque[this.count - 1];
    delete this.deque[this.count - 1];
    this.count--;
    return element;
  }

  // peekfront
  peekFront() {
    return this.deque[this.lowestCount];
  }

  // peekback
  peekBack() {
    return this.deque[this.count];
  }

  // size
  size() {
    return this.count - this.lowestCount;
  }

  // isEmpty
  isEmpty() {
    return this.count == 0;
  }
}
