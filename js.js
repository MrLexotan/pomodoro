let min = 25
let sec = 0
const counter = document.querySelector('#timer')
const start = document.querySelector('.btn:first-child')
const stop = document.querySelector('.btn:nth-child(2)')

function timer() {
    if (sec.toString() <= 0 ) {
        min--
        sec = 60
    }
    if (sec.toString() !== 0) {
        sec--
    }
    if (min === 0) {
        window.alert('De uma pausa')
        location.reload()
    }
    counter.innerHTML = (min.toString().length < 2 ? '0' + min : min) + ':' +
        (sec.toString().length < 2 ? '0' + sec : sec)
}

function inicializador () {
    const interval = setInterval(timer, 100)
    // clearInterval(interval)
    if (stop.addEventListener('click', ()=> {clearInterval(interval)})){

    }

}

function reset() {
    location.reload()
}

start.addEventListener('click', inicializador )






//
// stop1.addEventListener('click', stop)
// const reset1 = stop.nextElementSibling


