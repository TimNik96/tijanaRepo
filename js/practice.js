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


//////////////////////////////////////////////////////

// U odnosu na preuzeto trenutno vreme sa računara, u paragrafu ispisati da li je trenutno jutro ili popodne. Popodne je kada prođe 12:00 sati, ne računajući i to vreme.

// let trenutnoVreme = `${new Date().getHours()}:${new Date().getMinutes()}`
// let sati = new Date().getHours()
// let minuti = new Date().getMinutes()
// const p = document.createElement('p')
// if(sati <= 12 && minuti == 0) {
//     p.textContent = 'Trenutno je jutro'
// } else {
//     p.textContent = 'Trenutno je popodne'
// }

// document.body.appendChild(p)


//////////////////////////////////////////////////////

// Za preuzetu godinu sa računara i unetu godinu rođenja izračunati i u paragrafu ispisati da li je osoba punoletna ili maloletna. osoba je punoletna kada napuni 18 godina.

// let godinaRacunar= new Date().getFullYear()
// let godinaRodjenja= 2010

// const p=document.createElement('p')

// if (godinaRacunar-godinaRodjenja > 18)
// p.innerHTML='Osoba je punoletna'

// else{
//     p.innerHTML='Osoba je maloletna'
// }
// document.body.appendChild(p)

//////////////////////////////////////////////////////


// Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend.

// let dan= new Date().getDay()

// if (dan<=5)
// console.log('Radni je dan')
// else{
//     console.log('Vikend je')
// }


//////////////////////////////////////////////////////

// Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

// let vremeRacunarS= new Date().getHours() 
// let vremeRacunarM= new Date().getMinutes()

// if (vremeRacunarS <17 && vremeRacunarS>=9)
// console.log('Firma radi')

// else if (vremeRacunarS==17 && vremeRacunarM==0)
// console.log('Firma radi')

// else
// console.log('Firma ne radi')


/////////////////////////////////////////////////////

// Odrediti i u paragrafu ispisati najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora).

// let a=2
// let b=6
// let c=15

// if (a>b && a>c)
// console.log('a je max')

// else if(b>a && b>c)
// console.log('b je max')

// else{
//     console.log('c je max')
// }


/////////////////////////////////////////////////////

// Ispisati parne brojeve od 1 do 20

// let sum=0
// for (let i = 0; i < 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
//     else if (i % 2 !== 0) {
//         sum += i

//     }
// }
// console.log(sum)


/////////////////////////////////////////////////////

// random * (b-a + 1) + a


/////////////////////////////////////////////////////

// Na osnovu unetog broja poena u paragrafu ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit nekom ocenom ukoliko ima više od 50 poena, u suprotnom treba ispisati da je pao ispit. Za više od 50 poena učenik dobija ocenu 6, za više od 60 poena učenik dobija ocenu 7, za više od 70 poena učenik dobija ocenu 8, za više od 80 poena učenik dobija ocenu 9 i za više od 90 poena učenik dobija ocenu 10.

// let poeni = 60

// const p = document.createElement('p')

// if (poeni > 50) {
//     p.innerHTML = 'Ucenik je polozio ispit'

//     if (poeni >= 50 && poeni <= 60) {
//         p.innerHTML = "ocena je 6";
//     }
//     else if (poeni > 60 && poeni <= 70) {
//         p.innerHTML = "ocena je 7";
//     }
//     else if (poeni > 70 && poeni <= 80) {
//         p.innerHTML = "ocena je 8";
//     }
//     else if (poeni > 80 && poeni <= 90) {
//         p.innerHTML = "ocena je 9";
//     }
//     else if (poeni > 90 && poeni <= 100) {
//         p.innerHTML = "ocena je 10";
//     }
// }
// else {
//     p.innerHTML = "Ucenik nije polozio";
// }
// document.body.appendChild(p)

/////////////////////////////////////////////////////

// Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati, u ostalim slučajevima ispisati dobro veče.

// let vremeRacunarS= new Date().getHours() 
// let vremeRacunarM= new Date().getMinutes()

// if (vremeRacunarS <12 && vremeRacunarM==0)
// console.log('Dobro jutro')

// else if (vremeRacunarS <18 && vremeRacunarM==0)
// console.log('Dobar dan')

// else
// console.log('Dobro vece')


/////////////////////////////////////////////////////
// 1. Za uneti broj ispitati da li je paran ili nije.

// let broj=252

// if (broj%2==0)
// console.log('Broj je paran')
// else
// console.log('Broj je neparan')



/////////////////////////////////////////////////////
// 2. Za uneti broj ispisati da li je deljiv sa 3 ili ne.

// let broj=300

// if (broj%3==0)
// console.log('broj je deljiv sa 3')
// else
// console.log('broj nije deljiv sa 3')

/////////////////////////////////////////////////////
// 3. Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

// let broj_1=70
// let broj_2=66
// const p = document.createElement('p')

// if (broj_1>broj_2)
// p.innerHTML = broj_1-broj_2;
// else
// p.innerHTML = broj_2-broj_1;


// document.body.appendChild(p)



/////////////////////////////////////////////////////
// 4. Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.

// let broj=0

// if (broj<0)
// console.log('broj je manji od 0')
// if (broj==0)
// console.log('broj je 0')
// if (broj>0)
// console.log('broj je veci od 0')

// if (broj<=0)
// console.log(broj-1)

// else
// console.log(broj+1)

/////////////////////////////////////////////////////
// 5. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture.

// let broj_1=15
// let broj_2=66
// let broj_3=43

// if (broj_1>broj_2 && broj_1>broj_3)
// console.log('Broj 1 je max')

// else if(broj_2>broj_1  && broj_2>broj_3)
// console.log('broj 2 je max')

// else{
// console.log('broj 3 je max')}

// console.log(Math.max(broj_1,broj_2,broj_3)+" najveci", Math.min(broj_1,broj_2,broj_3)+" je najmanji", (broj_1,broj_2,broj_3)+" je srednji")


// Nikolino resenje:

// let broj1 = 5
//     let broj2 = 100
//     let broj3 = 150

//     if(broj1 > broj2 && broj1 > broj3) {
//         if(broj2 > broj3) {
//             console.log(`${broj1} je najveci broj, ${broj2} je srednji broj, a ${broj3} je najmanji broj`)
//         } else {
//             console.log(`${broj1} je najveci broj, ${broj3} je srednji broj, a ${broj2} je najmanji broj`)
//         }
//     }
// if(broj2 > broj3 && broj2 > broj1) {
//         if(broj1 > broj3) {
//             console.log(`${broj2} je najveci broj, ${broj1} je srednji broj, a ${broj3} je najmanji broj`)
//         } else {
//             console.log(`${broj2} je najveci broj, ${broj3} je srednji broj, a ${broj1} je najmanji broj`)
//         }
//     }
// if(broj3 > broj1 && broj3 > broj2) {
//         if(broj2 > broj1) {
//             console.log(`${broj3} je najveci broj, ${broj2} je srednji broj, a ${broj1} je najmanji broj`)
//         } else {
//             console.log(`${broj3} je najveci broj, ${broj2} je srednji broj, a ${broj1} je najmanji broj`)
//         }
//     }

/////////////////////////////////////////////////////
// 6. Za učitani broj ispitati da li je ceo.

// let broj=335

// if (broj%1==0)
// console.log('broj je ceo')
// else
// console.log('broj ima ostatak')

/////////////////////////////////////////////////////
// 7. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.

// let broj1=3
// let broj2=8
// let broj3=12
// // // let max
// if(broj1 > broj2 && broj1 > broj3) {
//             if(broj2 > broj3) {
//                 console.log(`${broj1} je najveci broj, ${broj2} je srednji broj, a ${broj3} je najmanji broj`)
//             } else {
//                 console.log(`${broj1} je najveci broj, ${broj3} je srednji broj, a ${broj2} je najmanji broj`)
//             }
//         }
//     if(broj2 > broj3 && broj2 > broj1) {
//             if(broj1 > broj3) {
//                 console.log(`${broj2} je najveci broj, ${broj1} je srednji broj, a ${broj3} je najmanji broj`)
//             } else {
//                 console.log(`${broj2} je najveci broj, ${broj3} je srednji broj, a ${broj1} je najmanji broj`)
//             }
//         }
//     if(broj3 > broj1 && broj3 > broj2) {
//             if(broj2 > broj1) {
//                 console.log(`${broj3} je najveci broj, ${broj2} je srednji broj, a ${broj1} je najmanji broj`)
//             } else {
//                 console.log(`${broj3} je najveci broj, ${broj2} je srednji broj, a ${broj1} je najmanji broj`)
//             }
//         }


// if(a<b){
//     if(b<c){
//         console.log('c je najveci, b je srednji, a je najmanji');
//     }else if(a < c){
//         console.log('b je najveci, c je srednji, a je najmanji ');

//     }else{
//         console.log('b je najveci, a je srednji, c je najmanji');
//     }}


/////////////////////////////////////////////////////
// 8. Učitati dva cela broja i ispitati da li je veći od njih paran.

// let broj_1=70.5
// let broj_2=51.5
// const p = document.createElement('p')

// if (Math.max(Math.floor(broj_1), Math.floor(broj_2)) %2==0)
// p.innerHTML="veci broj je paran"

// else
// p.innerHTML="veci broj nije paran"

// document.body.appendChild(p)


/////////////////////////////////////////////////////
// 9. Uneti dva datuma i ispisati onaj koji je raniji. Datume unosimo tako što u posebnim promenljivama navedemo dan, mesec i godinu, za svaki od njih.

// let dan_1 = 20
// let mesec_1 = 12
// let godina_1 = 2022
// let dan_2 = 23
// let mesec_2 = 12
// let godina_2 = 2022
// if(godina_1 <= godina_2) {
//     if(mesec_1 <= mesec_2) {
//         if(dan_1 <= dan_2) {
//             console.log(`${dan_1}/${mesec_1}/${godina_1}`)
//         } else {
//             console.log(`${dan_2}/${mesec_2}/${godina_2}`)
//         }
//     } else {
//         console.log(`${dan_2}/${mesec_2}/${godina_2}`)
//     }
// } else {
//     console.log(`${dan_2}/${mesec_2}/${godina_2}`)
// }


/////////////////////////////////////////////////////




// 10. Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.

// let godina= new Date().getFullYear()

// if (godina%4==0 && godina%100!==0 || godina%400==0)
// console.log("Godina je prestupna")

// else
// console.log('Godina nije prestupna')


/////////////////////////////////////////////////////
// Ispisati brojeve od 1 do 20

// for (let i=1; i<=20; i++){
//     console.log(i)
// }



/////////////////////////////////////////////////////
// Ispisati brojeve od 20 do 1

// for (let i=20; i>=1; i--){

//     console.log(i)
// }


/////////////////////////////////////////////////////
// Ispisati parne brojeve od 1 do 20 (uraditi zadatak na dva nacina)

// for (let i=1; i<=20; i++){
//     if (i%2==0){
//     console.log(i)
// }}

// for (let i=2; i<=20; i+=2){

//     console.log(i)
// }


/////////////////////////////////////////////////////

// #Domaci_4

// 1. Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
// for(let i = 1; i <= 3; i++) {
//     const img = document.createElement('img')
//     img.setAttribute('src', `./${i}.jpg`)
//     document.body.appendChild(img)
// }

/////////////////////////////////////////////////////
// 2. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).



/////////////////////////////////////////////////////
// 3. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *
// let n=20
// let m=100
// let brojac=0
// let proizvod=1

// while (n<=m){
//     if(n%11==0)
//         proizvod*=n
//         brojac++
//         n++

// }
// console.log(proizvod)


/////////////////////////////////////////////////////
// 4. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
// let n=5
// let m=150
// brojac=0
// while (n<=m){
//     if(n%13==0)
//     brojac ++
//     n++
// }
// console.log(brojac)


/////////////////////////////////////////////////////
// 5. Ispisati aritmetičku sredinu brojeva od n do m.
// let n=2
// let m=6
// let aSredina=0
// let brojac =0

// for(let i=2; i<=m; i++){
//     aSredina+=i
//     brojac++
// }
// console.log(aSredina/brojac)

/////////////////////////////////////////////////////
// 6. Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. *

// let n = -2
// let m = 10
// let brojacP = 0
// let brojacN = 0


// for (let i = n; i < m; i++) {

//     if ( i < 0) {
//        brojacN++
//     }
//     else {
//         brojacP++ 
//     }
// }
// console.log(brojacN, brojacP)



/////////////////////////////////////////////////////
// 7. Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *
// let n = 5
// let m = 50
// let brojac=0

// for (let i = 5; i < 50; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//         brojac++
//     }
// }
// console.log(brojac)



/////////////////////////////////////////////////////
// 8. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.


// let n = 10
// let m = 20
// let suma = 0
// while(n <= m) {
//     if(n % 10 === 4)
//         suma += n
//     n++
// }

// console.log(suma)

// for (let i = n; i <= m; i++) {
//     if (n % 10 == 4)
//         suma += n
//     n++
// }
// console.log(suma)



/////////////////////////////////////////////////////
// 9. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a.
// let a=2
// let m=6
// let n=8
// let suma=0
// for (let i=m; i<=n; i++){
//     if(i%a==0)
//     suma+=i
// }
// console.log(suma)


/////////////////////////////////////////////////////
// 10. Odrediti proizvod brojeva od n do m koji su deljivi brojem a.
// let a=2
// let m=6
// let n=9
// let suma=1
// for (let i=m; i<=n; i++){
//     if(i%a==0)
//     suma*=i
// }
// console.log(suma)

// ili

// let n = 1
// let m = 5
// let a = 2
// let proizvod = 1

// while(n < m) {
//     if(n % a === 0)
//         proizvod *= n
//     n++
// }
// console.log(proizvod)


/////////////////////////////////////////////////////
// 11. Odrediti sa koliko brojeva je deljiv uneti broj k.

// let k = 10
// let i = 1
// let brojac = 0

// while(i < k) {
//     if(k % i === 0)
//         brojac++
//     i++
// }

// console.log(`Broj ${k} je deljiv sa ${brojac} brojeva.`)

/////////////////////////////////////////////////////
// 12. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
// let n=18.6

// if (n%1==0 && n%n==0){
//     console.log('n je prost broj')
// }
// else
// console.log('n nije prost broj')



/////////////////////////////////////////////////////
// 13. Ispisati dvostruku vrednost brojeva od 5 do 15
// let n=5
// let m=15
// for (let i=n; i<m; i++){
//     console.log(i*2)
// }



/////////////////////////////////////////////////////
// 14. Odrediti sumu brojeva od 1 do n
// let n=1
// let m=5
// let suma=0
// for (let i=1; i<m; i++){
// suma +=i
// }
// console.group(suma)


/////////////////////////////////////////////////////
// 15. Odrediti sumu brojeva od n do m
// let m=6
// let n=8
// let suma=0
// for (let i=m; i<=n; i++){
//     suma+=i
// }
// console.log(suma)


/////////////////////////////////////////////////////
// 16. Odrediti proizvod brojeva od n do m
// let m=6
// let n=8
// let proizvod=1
// for (let i=m; i<=n; i++){
//     proizvod *=i
// }
// console.log(proizvod)

/////////////////////////////////////////////////////
// 17. Odrediti sumu kvadrata brojeva od n do m
// let iterator
// while(uslov) {
//     //telo petlje

//     inkrement iteratora
//

// let n = 2
// let m = 4
// let sum = 0

// while (n<=m) {
//         sum += n **2;
//         n++
// }
// console.log(sum)

// Odrediti sumu kvadrata brojeva od m do n.

// const donjaGranicaInput = document.querySelector('#donjaGranica')
// const gornjaGranicaInput = document.querySelector('#gornjaGranica')
// const rezultatP = document.querySelector('p')
// const btn = document.querySelector('button')
// let n = 10
// let m = 20
// let suma = 0
// let dg = +donjaGranicaInput.value

// btn.addEventListener('click', () => {
//     while(dg <= +gornjaGranicaInput.value) {
//         suma += dg ** 2
//         dg++
//     }
    
//     rezultatP.textContent = 'Suma kvadrata je: ' + suma
// })

// let k = 10
// let brojac = 0
// let i = 1

// while(i <= k) {
//     if(k % i == 0) {
//         brojac++
//     }
//     i++
// }

// console.log(brojac)

// let niz = ['marko', 'uros', 'jana']

// for(let i = 0; i < niz.length; i++) {
//     console.log(niz[i])
// }

// let i = 0
// while(i < niz.length) {
//     console.log(niz[i])
//     i++
// }