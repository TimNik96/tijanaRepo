
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

forma.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(event)
    console.log('pozdrav nakon klika')
    let cena = cenaPizze(selectPizza.value, +inputPrecnik.value)
    console.log(`Porucili ste ${selectPizza.value} od ${inputPrecnik.value} cm i cena za naplatu je ${cena}`)
})

vreme(pClock)