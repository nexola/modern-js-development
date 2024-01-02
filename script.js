// Módulo de exportação
import * as ShoppingCart from './shoppingCart.js';

import add, { addToCart, totalItens, cart } from './shoppingCart.js';

console.log('Importando módulo');

addToCart('Janela', 10);
addToCart('TV', 15);
addToCart('Computador', 20);

console.log(totalItens());

add('Notebook', 3);

console.log(cart);
