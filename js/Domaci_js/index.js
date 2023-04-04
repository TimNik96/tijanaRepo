// const body = document.body

// const h1= document.createElement('h1')
// h1.textContent = 'Kreiranje web sajta'
// body.appendChild(h1)

// const p= document.createElement('p')
// p.innerHTML = '<b> Osnova svakog websajta je njegov sadrzaj'
// body.appendChild(p)

// const p1= document.createElement('p')
// p1.innerHTML = ' Lorem Ipsum is <i> SIMPLY dummy </i> text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
// body.appendChild(p1)

// const p2= document.createElement('p')
// p2.innerHTML = ' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. '
// body.appendChild(p2)

// const hr = document.createElement('hr')
// body.appendChild(hr)

// const p3= document.createElement('p')
// p3.innerHTML = ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
// body.appendChild(p3)

// const h2= document.createElement('h2')
// h2.textContent = 'HTML sadrzaj'
// body.appendChild(h2)

// const p4= document.createElement('p')
// p4.innerHTML = ' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout <i> Contrary to popular belief </i> text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
// body.appendChild(p4)

// const h3= document.createElement('h3')
// h3.textContent = 'CSS- izgled'
// body.appendChild(h3)

// const p5= document.createElement('p')
// p5.innerHTML= 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
// body.appendChild(p5)

// const img = document.createElement('img')
// img.setAttribute('alt', 'road')
// img.setAttribute('src', '../Domaci_js/img/sunset.jpg')
// img.style.width='600px'
// img.style.display='flex'
// img.style.justifyContent='center'
// body.appendChild(img)



// const h4= document.createElement('h3')
// h4.textContent = 'JavaScript- interaktivnost'
// body.appendChild(h4)

// const p6= document.createElement('p')
// p6.innerHTML= 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
// body.appendChild(p6)


// _____________________________________________________________________________________


const body = document.body

const h1= document.createElement('h1')
h1.textContent = 'SEO praksa'
body.appendChild(h1)

const p= document.createElement('p')
p.innerHTML = 'Naziv Knjige, 10 <sup>th</sup>'
body.appendChild(p)

const p1= document.createElement('p')
p1.innerHTML = ' SEO <i> (Search Engine Optimization) </i> predstavlja marketinsku tehniku koja sa odnosi na optimizaciju sajta za pretrazivace. <b>Cilj SEO tehnika je da se sajt prikaze u rezultatima pretrage, sto blize vrhu.</i> '
body.appendChild(p1)

const ol = document.createElement('ol')

const li_1 = document.createElement('li')
li_1.innerHTML = '<i>Informaciona arhitektura</i>'

const li_2 = document.createElement('li')
li_2.innerHTML = '<i>Dizajn sadrzaja</i>'

const li_3 = document.createElement('li')
li_3.innerHTML = '<i>Optimizacija za pretrazivac</i>'

ol.append(li_1, li_2, li_3)
body.appendChild(ol)

const h2= document.createElement ('h2')
h2.textContent = 'Potrebe korisnika i ciljevi pretrazivaca'
body.appendChild(h2)

const p2= document.createElement('p')
p2.innerHTML= '<b>Korisnici zele da sto efikasnije pronadju informaciju koja ih zanima.</b> To znaci, da uz sto manje napora dodju do web sajta koji ih interesuje. Web pretrazivaci, omogucavaju da unosom jednog ili vise termina (kljucnih reci), korisnik dobije listu sajtova koji odgovaraju njegovom upitu'
body.appendChild(p2)

const p3=document.createElement('P')
p3.innerHTML= 'Cilj web pretrazivaca je da na sto kvalitetniji nacin zadovolje potrebe korisnika, posto i sami zaradjuju od korisnickih pretraga direktno (prikazujuci reklame unutar svojih rezultata) ili indirektno (nudeci dodatne usluge).'
body.appendChild(p3)

const p4=document.createElement('p')
p4.innerHTML='Da bi korisnici bili zadovoljni, web pretrazivac pokusava da na najbolji nacin "pogodi" sta su zeleli. Algoritam vrsi procenu koji rezultati su najrelevantniji za datu pretragu i tako ih i poredja na stranici sa rezultatima. Odavno je poznato da su korisnici "lenji" - retko ko zeli da "istrazuje" kroz stranice i stranice rezultata. Znajuci to, Google i ostali pretrazivaci ulazu ogromne napore da na vrhu stranice prikazu najbolje rezultate.'
body.appendChild(p4)

const h3=document.createElement('h2')
h3.innerHTML='Ciljevi vlasnika sajta'
body.appendChild(h3)

const p5=document.createElement('p')
p5.innerHTML='<i>Nije tajna da vlasnici sajtova zele posecenost.</i> Zelimo da korisnici dodju nas sajt iz razlicitih razloga - da saznaju za nasu ponudu, da bismo zaradili od reklamiranja, ili da bismo imali mogucnost prodaje naseg proizvoda ili usluge. U najvecem broju slucajeva, korisnici dolaze do sajtova koriscenjem web pretrazivaca. Samim tim zelimo da se nas sajt nadje u rezultatima pretrage.'
body.appendChild(p5)

const p6=document.createElement('p')
p6.innerHTML='Posto je ponasanje korisnika opste poznato, vlasnici sajtova s pravom pocinju da razmisljaju o tome kako da svoj sajt "doteraju" na vrh pretrage. Svaka aktivnost koja vodi poboljsanju ranga sajta na stranici sa rezultatima, spada u SEO.'
body.appendChild(p6)

const hr = document.createElement('hr')
body.appendChild(hr)

const p7=document.createElement('p')
p7.innerHTML='Kontakt <sub>vazno</sub>'
body.appendChild(p7)

const p8=document.createElement('p')
p8.innerHTML='<i>Nasa kompanija <br> Ime Ulica, br. 49 <br> Beograd, <br> Serbia</i>'
body.appendChild(p8)