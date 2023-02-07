// let niz = [1, 5, 3]

// PUSH - niz.length

// niz.push(4, 5, 6)
// console.log(niz.push(), niz)

// POP - vraca nazad element koji se izbacuje iz niza

// niz.pop()
// console.log(niz)
// console.log(niz.pop())

// SHIFT - vraca nazad element koji se izbacuje iz niza

// niz.shift()
// console.log(niz)

// UNSHIFT - vraca duzinu niza nakon ubacivanja elemenenata (niz.length)

// niz.unshift(0)
// console.log(niz)
// console.log(niz.unshift())

// INDEXOF - vraca index trazenog elementa; ukoliko ga ne pronadje, vraca -1

// console.log(niz.indexOf(5))

// INCLUDES - proverava da li element postoji u nizu

// console.log(niz.includes(3, niz.length / 2))

// let arr = []
// if(arr.includes(56)) {
//     let promenljiva = arr[arr.indexOf(56)]
// }

// SLICE - vraca kopiju isecka niza (originalni niz nad kojim se metoda poziva se ne menja)

// console.log(niz.slice(0,3), niz)
// console.log(niz.slice(-2, -1))

// JOIN

// let nizStr = ['D', 'a', 'n', 'a', 's']
// console.log(nizStr.join(''))

// REVERSE

// console.log(niz.reverse())

// CONCAT

// let noviNiz = [4, 5, 6]
// console.log(niz.concat(noviNiz))

/////////////////////////////////////////////////////////////////////////////
// ARROW FUNCTION
// hoisting 

// function fName(params) {
//     return value
// }

// const fName = (params) => {
//     return value
// }

// (params) => {
//     //code to be executed
// }
/////////////////////////////////////////////////////////////////////////////

// FOREACH

// niz.forEach((element, index) => {
//     console.log(element, index)
// })

// for(let i = 0; i < niz.length; i++) {
//     console.log(niz[i])
// }

// EVERY

// console.log(niz.every(el => el < 5))

// function add(s1, s2) {
//     return s1 + s2
// }

// let broj1 = 10
// let broj2 = 20

// add(broj1, broj2)

// SOME

// console.log(niz.some(el => el > 2))

// FIND - vraca undefined (ili vraca prvi element koji ispunjava zadati uslov)

// console.log(niz.find(element => element % 2 == 0))

// FINDINDEX - vraca -1 ako ne pronadje navedeni element

// console.log(niz.findIndex(element => element == 4))

// FILTER

let niz = [1, 5, 11, 3]
// console.log(niz.filter(el => el % 2 == 0))

// MAP

// let newArr = niz.map(el => el ** 2)
// console.log(niz.map(el => el ** 2))
// console.log(niz)

// let people = [
//     {
//         name: '',
//         surname: '',
//         age: 30
//     }
// ]

// let nameArr = people.map(el => {
//     let obj = {
//         name: el.name
//     }
// })

// console.log(imenaLjudi)

// SORT
// let nizStr = ['Ana', 'Marija', 'Dunja','Sanja']
// let nizObj = [{ name: 'Ana' }, { name: 'Marija' }, { name: 'Dunja' }, { name:'Sanja' }]

// console.log(nizStr.sort())
// console.log(niz.sort((a, b) => b - a))
// console.log(nizObj.sort((a, b) => a.name - b.name)) // NE RADI!! Uneti ispravku