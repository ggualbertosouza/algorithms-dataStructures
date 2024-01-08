/*
    Aqui você pode testar todas as estruturas de dados livremente.
    Lembre sempre de criar uma nova instância da classe que quer testar.

    Para rodar seu teste, use o comando 
    "npm run | yarn run | pnpm run",
    de acordo com empacotador de sua preferência.
 */

import { Stack } from "./src/Stacks";

const stack = new Stack(5);

// Criador
stack.insert("Guilherme G Souza");

console.log(
    stack, 
    stack.size(), 
    stack.peek(), 
    stack.capacity()
);
