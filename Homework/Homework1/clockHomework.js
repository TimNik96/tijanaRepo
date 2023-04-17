const forma = document.querySelector('form')
const selectPizza = document.querySelector('select')
const inputPrecnik = document.querySelector('#precnik')
const pClock = document.querySelector('.clock')

const vreme = (upis) => {
    let sati = new Date().getHours()
    let minuti = new Date().getMinutes()
    let sekunde = new Date().getSeconds()

    if(sati < 10)
        sati = '0' + sati
    if(minuti < 10)
        minuti = '0' + minuti
    if(sekunde < 10)
        sekunde = '0' + sekunde
    
    let time = `${sati}:${minuti}:${sekunde}`

    upis.textContent = time

    return setTimeout(() => {
        vreme(upis)
    }, 1)
}

const cenaPizze = (vrstaPizze, velicina) => {
    let cenaBonus = 100
    let cena = Math.pow((velicina / 2), 2) * Math.PI
    
    if(vrstaPizze !== 'Cappriciosa')
        cena += cenaBonus

    return Math.round(cena) 
}

const porudzbina = (cenaPizze, vrstaPizze, velicinaPizze, vremePorudzbine) => {
    const p = document.createElement('p')
    p.classList.add('porudzbina')
    p.innerHTML = `Porucili ste ${vrstaPizze} od ${velicinaPizze} cm u ${vremePorudzbine} sati i cena za naplatu je ${cenaPizze} dinara. <br> Porudzbina stize na vasu adresu za 30 minuta.`
    document.body.appendChild(p)
    setTimeout(() => {
        document.body.removeChild(p)
    }, 5000)
}

vreme(pClock)

forma.addEventListener('submit', (event) => {
    event.preventDefault()

    // Guard clauses 
    if(selectPizza.value === 'default') {
        alert('Molimo izaberite vrstu pizze!')
        return
    }

    if(inputPrecnik.value === '') {
        inputPrecnik.style.color = 'red'
        inputPrecnik.value = 'Popunite polje!'

        setTimeout(() => {
            inputPrecnik.value = ''
            inputPrecnik.style.color = 'black'
        }, 3000)

        return
    }

    if(isNaN(inputPrecnik.value)) {
        inputPrecnik.style.color = 'red'
        inputPrecnik.value = 'Morate uneti broj!'

        setTimeout(() => {
            inputPrecnik.value = ''
            inputPrecnik.style.color = 'black'
        }, 3000)

        return
    }

    let cena = cenaPizze(selectPizza.value, +inputPrecnik.value)
    // console.log(`Porucili ste ${selectPizza.value} od ${inputPrecnik.value} cm i cena za naplatu je ${cena}`)
    porudzbina(cena, selectPizza.value, +inputPrecnik.value, pClock.textContent)
})


