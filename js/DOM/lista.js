const body = document.body

const h1 = document.createElement('h1')
h1.textContent = 'Pozdrav'

body.appendChild(h1)
const ol = document.createElement('ol')

const li_1 = document.createElement('li')
li_1.innerHTML = 'Neka rec pre <sup>informaciona struktura</i>'

const li_2 = document.createElement('li')
li_2.textContent = 'dizajn sadrzaja'

const li_3 = document.createElement('li')
li_3.textContent = 'optimizacija za pretrazivac'

ol.append(li_1, li_2, li_3)
body.appendChild(ol)

const hr = document.createElement('hr')
body.appendChild(hr)
