const data = [{ name: 'Samsul Alam', address: 'Badda, Mou chak' }];
// console.log(data[0].name);

const info = {
    name: 'Salman',
    information: [
        { job: 'Acting', salary: 30000000, gf: 'Katrina kaif', ranking: 2 },
        {
            sister: 'Lota', husband: 'Khota', gXf: 'Ninja', job: 'Dancer',
            son: [
               {name: 'Abid', age: 4, hobby: 'singing song'}
            ]
        },
    ]
};
console.log(info.information[1].son[0].hobby);