let display = document.getElementById("input-field")

function allclear() {
    display.value=" "

}

function show(n) {
    display.value+=n
}

function calc() {
    display.value = eval(display.value)
}