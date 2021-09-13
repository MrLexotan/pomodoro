let min = 25
let sec = 0



function timer() {

    const counter = document.querySelector('#timer')

    if (sec.toString() <= 0 ) {
        min--
        sec = 60
    }
    if (sec.toString() !== 0) {
        sec--
    }
    if (min === 0) {
        location.reload()
    }
    counter.innerHTML = (min.toString().length < 2 ? '0' + min : min) + ':' +
        (sec.toString().length < 2 ? '0' + sec : sec)

    setInterval(timer, 100)
}



