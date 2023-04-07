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

// Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.

// let minuti= 127
// let sati= Math.floor(minuti/60) 
// let minuta= minuti%60

// console.log(`Proslo je ${sati} sati i ${minuta} minuta`)

// Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.

// let cena=100
// let novac=90

// if(cena<=novac){
//     let kusur= novac-cena
//     console.log(kusur)
// }
// else{
//     console.log ('Nema dovoljno')
// }



//////////////////////////////////////////////////////

// Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.
// let minuti= 127
// let sati= Math.floor(minuti/60) 
// let minuta= minuti%60

// console.log(`Proslo je ${minuta} minuta posle ponoci`)



//////////////////////////////////////////////////////

// Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd.

// let dd=7
// let mm= 4
// let yy=2023
// console.log(`${dd}.${mm}.${yy} i ${yy}/${mm}/${dd}`)


//////////////////////////////////////////////////////

// Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljiva u kojoj je vrednost trenutnog kursa. Odrediti koliko ćemo imati dinara nakon razmene. Uraditi isto i za konverziju iz dinara u evre..


// let sumaEura=300
// let kurs=118

// let dinar=sumaEura*kurs
// console.log(dinar);

// let euri=dinar/kurs
// console.log(euri);


//////////////////////////////////////////////////////

// Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljive u kojima je vrednost kurseva evro-dinar, kao i dolar-dinar, redom. Odrediti koliko ćemo imati dolara nakon razmene. Uraditi isto i za konverziju iz dolare u evre.

// let sumaEura=300
// let evroDin=118
// let dolarDin=107

// let razmenaUdinare=sumaEura*evroDin


// let razmenaUdolare= Math.floor(razmenaUdinare/107) 
// console.log(razmenaUdolare);

// let razmenaUevre= Math.floor(razmenaUdolare*0.91) 
// console.log(razmenaUevre);


//////////////////////////////////////////////////////

// Za unetu zapreminu proizvoda, u paragrafu ispisati “Throw away”, ukoliko je proizvod zapremine veće od 100ml. U suprotnom ispisati “Pack up”.

// const body = document.body
// let zapremina = 50
// const p=document.createElement('p')

// // // if(zapremina>100){
// // // console.log(`Throw away`)
// const rezultat = (zapremina > 100) ? "Throw away." : "Puck up.";
// p.innerHTML=rezultat
// body.appendChild(p)

// // }
// // else{
// //     console.log ('Puck up')
// // }


//////////////////////////////////////////////////////

// Za unetu temperaturu u paragrafu, ispisati “Temperatura u plusu” crvenom bojom ili “Temperatura u minusu” plavom bojom. Ukoliko je temperatura nula, računati kao temperaturu u plusu.

// const body = document.body
// let temp = -5
// const p=document.createElement('p')

// if(temp >=0) {
//     p.innerHTML='Temperatura je u plusu'
//     p.style.color= 'red' 
// }
//     else{
//         p.innerHTML='Temperatura je u minusu'
//         p.style.color= 'blue'  
//         }

//         body.appendChild(p)


//////////////////////////////////////////////////////

// U odnosu na pol koji je korisnik uneo u promenljivu (“m” za muški pol ili “z” za ženski pol) na ekranu prikazati odgovarajući avatar (odgovarajuću sličicu).

// const body=document.body
// const p= document.createElement('p')


// let pol = 'm'

// if(pol=='m') {
//     p.innerHTML= '<img src="https://static.escolakids.uol.com.br/2019/07/coala.jpg">'

// }
//     else{
//         p.innerHTML= '<img src="https://static.escolakids.uol.com.br/2019/07/coala.jpg">'
//         }

//         body.appendChild(p)