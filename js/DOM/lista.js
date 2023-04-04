const body = document.body

// const h1 = document.createElement('h1')
// h1.textContent = 'Pozdrav'

// body.appendChild(h1)
// const ol = document.createElement('ol')

// const li_1 = document.createElement('li')
// li_1.innerHTML = 'Neka rec pre <sup>informaciona struktura</i>'

// const li_2 = document.createElement('li')
// li_2.textContent = 'dizajn sadrzaja'

// const li_3 = document.createElement('li')
// li_3.textContent = 'optimizacija za pretrazivac'

// ol.append(li_1, li_2, li_3)
// body.appendChild(ol)

// const hr = document.createElement('hr')
// body.appendChild(hr)

const h1= document.createElement('h1')
h1.textContent = 'Kreiranje web sajta'
body.appendChild(h1)

const p= document.createElement('p')
p.innerHTML = '<b> Kreiranje web sajta </b>'
body.appendChild(p)

const p1= document.createElement('p')
p1.innerHTML = ' Kreiranje web sajta '
body.appendChild(p1)

const h2= document.createElement('h2')
h2.textContent = 'HTML sadrzaj'
body.appendChild(h2)

const p3= document.createElement('p')
p3.innerHTML = ' Kreiranje web sajta '
body.appendChild(p3)

const img = document.createElement('img')
img.setAttribute('src', '../../Homework/Homework1/img/banner.jpg')
img.style.width='400px'
body.appendChild(img)