const vreme = (upis) => {
    let sati = new Date().getHours()
    let minuti = new Date().getMinutes()
    let sekunde = new Date().getSeconds()
    let milisekunde = new Date().getMilliseconds()

    if(sati < 10)
        sati = '0' + sati
    if(minuti < 10)
        minuti = '0' + minuti
    if(sekunde < 10)
        sekunde = '0' + sekunde
    
    let time = `${sati}:${minuti}:${sekunde}:${milisekunde}`

    upis.textContent = time

    return setTimeout(() => {
        vreme(upis)
    }, 1)
}

const p = document.createElement('p')
document.body.appendChild(p)
vreme(p)