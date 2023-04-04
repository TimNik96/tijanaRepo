let sati = new Date().getHours()
let minuti = new Date().getMinutes()
let sekunde = new Date().getSeconds()

let godina = new Date().getFullYear()
let mesec = new Date().getMonth() + 1
let dan = new Date().getDate()

let danUNedelji = new Date().getDay()

switch (danUNedelji) {
    case 1:
        danUNedelji = 'ponedeljak'
        break;
    case 2:
        danUNedelji = 'utorak'
        break;
    case 3:
        danUNedelji = 'sreda'
        break;
    case 4:
        danUNedelji = 'cetvrtak'
        break;
    case 5:
        danUNedelji = 'petak'
        break;
    case 6:
        danUNedelji = 'subota'
        break;
    case 1:
        danUNedelji = 'nedelja'
        break;
    default:
        break;
}

console.log(`${sati}:${minuti}:${sekunde}`)
console.log(`${dan}/${mesec}/${godina}`)
console.log(danUNedelji)