// Exercícios

// 1. Retorne as primeiras letras de cada palavra do nome 'George Raymond Richard Martin' em um array.
// "GRRM"
// p.s. NÃO É UM ARRAY

const personName = "George Raymond Richard Martin"
const letters = [...personName]

const getUppercaseLetters = letters.filter((letter) => {
    return letter !== " " && letter === letter.toUpperCase()
}).join("")

console.log(getUppercaseLetters)

// 2. Retorne cada título dentro de um h1 (por ex. <h1>Tesla Model S</h1>).
// ["<h1>Tesla Model S</h1>", ...]

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const mapWishlistTitles = wishlist.map(({title}) => `<h1>${title}</h1>`)

console.log(mapWishlistTitles)

// 3. Retornar:
// {
//   under25: // até 25
//   under40: // entre 25 e 39
//   under60: // entre 40 e 59
// }

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true}
]

const getVotersCounts = (array) => {
    let under25Count = 0
    let under40Count = 0
    let under60Count = 0

    array.map(({age, voted}) => {
        if (age < 25 && voted) under25Count++
        else if (age >= 25 && age < 40 && voted) under40Count++
        else if (age >= 40 && age < 60 && voted) under60Count++
    })

    return {
        under25: under25Count,
        under40: under40Count,
        under60: under60Count
    }
}

console.log(getVotersCounts(voters))