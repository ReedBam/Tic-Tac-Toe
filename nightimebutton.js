


const body = document.querySelector("body")
console.log(body)

const nighttimebutton = document.getElementById("ModeButton")
var on = false

nighttimebutton.addEventListener("click", selector) 
function selector(nighttimebutton) {
    if(on === false) {
        darkmode(body)
        on = true
    } else {
        whitemode(body)
        on = false
    }
}

function darkmode(body) {
    body.style.backgroundColor = "var(--dark-clr)"
    nighttimebutton.style.backgroundColor = "var(--dark-clr)"
    nighttimebutton.innerHTML = "💡"
}

function whitemode(body) {
    body.style.backgroundColor = "var(--light-clr)"
    nighttimebutton.style.backgroundColor = "var(--light-clr)"
    nighttimebutton.innerHTML = "🌙"
}