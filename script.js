// Módulo de exportação

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

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = await getLastPost();

// console.log(lastPost);

// Module pattern
const ShoppingCart = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart.addToCart('apple', 4);
ShoppingCart.addToCart('pizza', 2);

console.log(ShoppingCart.cart);

// npm modules
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
    {
      product: 'pizza',
      quantity: 5,
    },
  ],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);

state.user.loggedIn = false;
console.log(stateClone);

const stateCloneDeep = cloneDeep(state);
state.user.loggedIn = true;

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting} ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(state.cart.find(el => el.quantity >= 2));

import 'core-js/stable/array/find';

import 'regenerator-runtime/runtime';
