// -- napisati f-ju koja sabira dva broja

// let a = 10
// let b = 20

// let suma = a + b
// console.log(suma)

// function imeFunkije(parametar1, parametar2, ...) {
//     //telo funkcije u kome se pise kod
//     return vrednost
// }

// function suma(sabirak_1, sabirak_2) {
//     let zbir = sabirak_1 + sabirak_2
//     return zbir
// }

// console.log(suma(10, 20))

// -- dodati novi element u niz

// let niz = [1, 2, 3]

// niz.push(4)
// console.log(niz)

// -- ispisati prvih 10 brojeva

// for(let i = 0; i <= 9; i++) {
//     console.log(i)
// }

// for(iterator; uslovIzlazaIzPetlje; stepPomeranja) {
//     // telo petlje
//     if(i % 2 != 0)
//         continue
// }

// -- ispisati sve karaktere zadatog stringa

// let str = 'Dobar dan'

// for(let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i))
// }

// let osoba = {
//     ime: 'Tijana',
//     prezime: 'Djukic',
//     profesija: 'developer'
// }

// console.log(`${osoba.ime} ${osoba.prezime} je ${osoba.profesija}!`)

// -- ispisati sve parne od m do n

// let m = 20
// let n = 60

// for(let i = m; i <= n; i++) {
//     if(i % 2 == 0)
//         console.log(i)
// }

// -- pronaci maksimum od 3 broja

// let a = 1
// let b = 3 
// let c = 6
// let max

// let max = a
// if(b > max)
//     max = b
// if(c > max) 
//     max = c

// if(a > b && a > c)
//     max = a
// if(a < b && b > c)
//     max = b
// if(c > b && c > a)
//     max = c

// console.log(max)

// -- prebrojati karaktere do zadatog karaktera

// let str = 'Tijana'
// let karakter = 'n'
// let brojKaraktera = 0

// for(let i = 0; i < str.length; i++) {
//     if(i == str.indexOf(karakter))
//         break
//     brojKaraktera++
// }

// console.log(brojKaraktera)

// let broj = {
//     vrednost: 10
// }

// let broj1 = broj

// broj1.vrednost = 15

// console.log(broj)

// -Faktorijel broja

// let faktorijel = 5
// let sum = 1
// const pRezultat = document.createElement('p')
// document.body.appendChild(pRezultat)

// for(let i = faktorijel; i >= 1; i--) {
//     sum *= i
// }

// pRezultat.textContent = sum

// -Stepen broja

// let osnova = 10
// let eksponent = 3
// let sum = 1
// const pRezultat = document.createElement('p')
// document.body.appendChild(pRezultat)
// Math.pow(osnova, eksponent)

// for(let i = 0; i < eksponent; i++) {

// }

// for(let i = eksponent; i > 0; i--) {
//     sum *= osnova
// }

// pRezultat.textContent = sum

// -Cena pizze prema precniku

// let precnik = 30
// let cenaPoCM2 = 1

// let pPizze = Math.round(Math.pow(precnik / 2, 2) * Math.PI) * cenaPoCM2

// console.log(pPizze);

// -Date su dve promenljive u kojima su dati vreme u satima i minutima. Izračunati koliko minuta je prošlo od ponoći.

