/***
 * 1. How decleare arrow fucntion
 * 2. templet string
 * 3. object destructuring
 * 4. array destrcturing
 * 5. object keys , values, object entries
 * 6. default parameter 
 * 7. for of use array 
 * 8. for in use object
 */
// Normal function
function add(a, b) {
    return a + b;
}
add(3, 5);

//  Arrow fucntion
const add2 = (a, b) => a + b;
add2(4, 7);

const name1 = 'Jamal';
const array = [2, 5, 9, 7, 90, 20, 88];
const person = {
    name: 'Rasel',
    age: 18,
    job: 'study'
}
for(const info of array){
    // console.log(info);
}

for(const info in person){
    console.log();
}

// destructuring array
const [a, b, c, d, e, f] = array;

// object destructuring
const { name, age, job } = person;
const raselInfo = `My name is ${name1}, and my brother name is ${person.name} and His age is ${person.age}`;
// console.log(raselInfo);