// Módulo de importação
console.log('Exportando módulo');

const shippingCost = 10;
export const cart = [];

const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalItens = function () {
  return cart.map(x => (x = x.quantity)).reduce((acc, x) => acc + x, 0);
};

// Named exports
export { addToCart, totalItens };

// Default exports
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
