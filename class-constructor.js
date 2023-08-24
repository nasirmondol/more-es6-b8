// class Teacher{
//     constructor(name, subject){
//         this.name = name;
//         this.subject = subject;
//     }
//     lecture(){
//         console.log('Sir teaching us English');
//     }
// }
// const Topon = new Teacher('Topon', 'Englihs');
// console.log(Topon);
// const Saiful = new Teacher('Saiful', 'Banla');
// console.log(Saiful);
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const mobile = new Product('Mobile', 33400);
console.log(mobile);
const laptop = new Product('hp', 55000);
console.log(laptop);