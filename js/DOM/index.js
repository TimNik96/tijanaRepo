const mojDiv = document.getElementById('mojDiv')
const elementi = document.getElementsByClassName('mojaKlasa')
const mojDiv2 = document.querySelectorAll('.klasa')
const tagovi = document.getElementsByTagName('div')
const body = document.body

const newDiv = document.createElement('div')
newDiv.textContent = 'Pozdrav iz JS-a.'
newDiv.id = ''
newDiv.className = ''
newDiv.classList.add('')
newDiv.classList.remove('novaKlasa')
newDiv.classList.contains('klasa') // za provere da li klase postoje ili ne

body.children
newDiv.parentElement.children[0]
newDiv.previousSibling.nextSibling

body.appendChild(newDiv)
// body.append(newDiv, mojDiv)

console.log(mojDiv);
console.log(elementi[0]);

// mojDiv.textContent = '<p>Pozdrav</p>'
// mojDiv.innerHTML = '<p>Pozdrav</p>'
// mojDiv.innerText = ''

// div {
//     text-align: center;
// }

// newDiv.style.textAlign = 'center'

newDiv.classList.add('klas')

.style.display = 'flex'
.style.justufyContent = 'center'

const img = document.createElement('img')
img.setAttribute('src', '/img/slika1.jpg')
img.setAttribute('alt', 'nesto na slici')