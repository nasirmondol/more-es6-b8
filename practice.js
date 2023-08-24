let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}
// console.log(data.Sophia.study[1].secondary[0].school_name);

// task-2: console .log  output: Petersburg, Herry

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}
// console.log(students['2222'].address['city']);
// console.log( students['3333'].name);




// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}
// console.log(data2.data[0].bookDetails.name);
// console.log(data2.data[1].bookCategory);

// Practice-1.
const oddArray = [1, 3, 5, 7, 9];
const makeEven = oddArray.map(num => num + 1);
// console.log(makeEven);
const makeEven2 = (arr) => {
    for (const num of arr) {
        const even = num + 1;
        // console.log(even);
    }
}
makeEven2(oddArray);

// Practice-2.

const divisiblArr = [33, 50, 78, 79, 90, 101, 30]
const diviTen = divisiblArr.filter(arr => arr % 10 === 0);
const findNumber = divisiblArr.find(arr => arr % 10 === 0);
// console.log(findNumber);

const instructor = [
    { name: 'Nodi', age: 28, position: 'senior' },
    { name: 'Akil', age: 26, position: 'Junior' },
    { name: 'Sabuj', age: 30, position: 'senior' },
]

const seniorObj = instructor.filter(name => name.age > 27);
// console.log(seniorObj);

const people = [
    { name: 'Mina', age: 20 },
    { name: 'Rina', age: 10 },
    { name: 'Bina', age: 22 },
]

const peopleAge = (arr) => {
    let sum = 0;
    for (const num of arr) {
        const ages = num.age;
        sum = sum + ages;
    }
    return sum;
}

const result = peopleAge(people)
// console.log(result);


const reduced = people.reduce((previous, curr) => previous + curr.age, 0);
// console.log(reduced);

const oddArray1 = [1, 3, 5, 7, 9];
const emptyArray = oddArray1.splice(0, oddArray1.length);
console.log(emptyArray);
