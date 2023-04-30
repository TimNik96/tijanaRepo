const flipper = document.querySelector('.flipper')
const trigger = document.querySelector('.trigger')
const pMessage = document.querySelector('p')
let toggleFlipper = false

function flipperOn() {
    flipper.style.backgroundColor = '#0f0'
    trigger.style.backgroundColor = '#fff'
    trigger.style.left = '28px'
}

function flipperOff() {
    flipper.style.backgroundColor = '#fff'
    trigger.style.backgroundColor = '#acacac'
    trigger.style.left = '2px'
}

function displayMessage(flipper, messageContainer) {
    if(flipper)
        messageContainer.textContent = 'Prekidac aktivan'
    else
        messageContainer.textContent = 'Prekidac neaktivan'

}

displayMessage(toggleFlipper, pMessage)

trigger.addEventListener('click', () => {

    toggleFlipper = !toggleFlipper

    // if(toggleFlipper == false)
    //     toggleFlipper = true
    // else
    //     toggleFlipper = false

    if (toggleFlipper) {
        flipperOn()
    } else {
        flipperOff()
    }

    displayMessage(toggleFlipper, pMessage)

})
