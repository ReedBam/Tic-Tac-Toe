const body = document.querySelector(body)
console.log(body)

const nighttimebutton = document.getElementById(ModeButton)


nighttimebutton.addEventListener("click", selector) 
function selector(nighttimebutton) {
    if(nighttimebutton.checked) {
        darkmode()
    } else {
        whitemode()
    }
}

function darkmode(body) {
    body.style.backgroundColor = "var(--dark-clr)"
}

function whitemode(body) {
    body.style.backgroundColor = "var(--light-clr)"
}