const array = [10, 29, 33, 18, 15, 20, 55];

const arrayDouble = array.forEach(arr => arr * 2)
// console.log(arrayDouble);
const arrayForeach = array.forEach(arr => {
    const calculate = arr * 3;
    // console.log(calculate);
});
// console.log(arrayForeach);
const names = ['Monir', 'Nayem', 'Hamid', 'Forid alik', 'Joshimmmm', 'Parvez'];
const findName = names.filter(name => name.length > 5)
console.log(findName);