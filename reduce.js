const array = [10, 29, 33, 18, 15, 20, 55];
const reduce = array.reduce((previous, current) => previous + current, 0);
// console.log(reduce);

const products = [
    { name: 'lenovo', price: 45000, color: 'red' },
    { name: 'Dell', price: 65000, color: 'black' },
    { name: 'Samsung', price: 75000, color: 'Black' },
    { name: 'apple', price: 117000, color: 'White' },
]
// const productName = products.find(product => product.price > 60000);
// console.log(productName);
const reduced = products.reduce((accm, curr) => accm+curr.price, 0);
console.log(reduced);