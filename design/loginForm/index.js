const forma = document.querySelector('form')
const inputUsername = document.querySelector('#username')
const inputPassword = document.querySelector('#password')
const pErrorMessage = document.querySelector('#error')

let nizKorisnika = [
    {
        username: 'admin',
        password: 'admin'
    }
]

// modifikovati funkciju i za slucaj logina i dodati sve potrebne parametre
const stylingErrors = (errMsg,userField, passField) => {
    userField.style.borderColor = '#f00'
    passField.style.borderColor = '#f00'
    pErrorMessage.textContent = errMsg
}

const login = (korisnici, user, pass) => {    
    if(user.value === '' || pass.value === '') {
        let msg = 'Morate popuniti sva polja!'
        stylingErrors(msg, user, pass)
        return
    }

    let korisnik = korisnici.find(el => el.username === user.value && el.password === pass.value)

    if(korisnik == undefined) {
        let msg = 'Proverite podatke za unos! Ukoliko nemate nalog, registrujte se na nasoj stranici!'
        stylingErrors(msg, user, pass)
        return
    }

    console.log("Ulogovali ste se!")
    forma.reset()
    return korisnik // potencijalno nam moze znaciti da imamo ostale informacije na raspolaganju o korisniku koji se ulogovao
}

forma.addEventListener('submit', (event) => {
    event.preventDefault()
    login(nizKorisnika, inputUsername, inputPassword)
})