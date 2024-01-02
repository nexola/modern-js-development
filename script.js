// Módulo de exportação
import * as ShoppingCart from './shoppingCart.js';

import add, { addToCart, totalItens, cart } from './shoppingCart.js';

console.log('Importando módulo');

// addToCart('Janela', 10);
// addToCart('TV', 15);
// addToCart('Computador', 20);

// console.log(totalItens());

// add('Notebook', 3);

// console.log(cart);

// Top level await - BLOQUEIA O CÓDIGO
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();

// console.log(data);

// console.log('Teste');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = await getLastPost();

console.log(lastPost);
